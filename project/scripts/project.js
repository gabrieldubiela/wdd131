const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const navMenu = document.querySelector('nav');
    const title = document.querySelector('h1');
    const navLinks = document.querySelectorAll('nav a');

    button.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        title.style.display = title.style.display === 'none' ? 'block' : 'none';
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        button.textContent = button.textContent === 'Close' ? 'Menu' : 'Close';
        navLinks.forEach(link => {
            link.style.fontSize = '20px';
        });
    });
});

function isWeekday(date) {
    const day = date.getDay();
    return day !== 5 && day !== 6;
}

function setMinDate() {
    const dateInput = document.getElementById("date");
    let minDate = new Date();

    if (!isWeekday(minDate)) {
        minDate.setDate(minDate.getDate() + (8 - minDate.getDay()));
    }

    const minDateString = minDate.toISOString().split("T")[0];
    dateInput.min = minDateString;
}

function generateTimeSlots() {
    const timeSelect = document.getElementById("time");
    const startHour = 9;
    const endHour = 17;

    while (timeSelect.options.length > 1) {
        timeSelect.remove(1);
    }

    for (let hour = startHour; hour < endHour; hour++) {
        const timeString = `${hour.toString().padStart(2, "0")}:00`;
        const option = document.createElement("option");
        option.value = timeString;
        option.textContent = timeString;
        timeSelect.appendChild(option);
    }
}

function blockTimeSlot(date, time) {
    const blockedSlots = JSON.parse(localStorage.getItem("blockedSlots")) || {};

    if (!blockedSlots[date]) {
        blockedSlots[date] = [];
    }

    if (!blockedSlots[date].includes(time)) {
        blockedSlots[date].push(time);
        localStorage.setItem("blockedSlots", JSON.stringify(blockedSlots));
    }
}

function updateTimeDropdown() {
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time");
    const blockedSlots = JSON.parse(localStorage.getItem("blockedSlots")) || {};

    while (timeSelect.options.length > 1) {
        timeSelect.remove(1);
    }

    const selectedDate = dateInput.value;

    generateTimeSlots();

    if (blockedSlots[selectedDate]) {
        blockedSlots[selectedDate].forEach(time => {
            const option = timeSelect.querySelector(`option[value="${time}"]`);
            if (option) {
                option.disabled = true;
                option.textContent += " (Booked)";
            }
        });
    }
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (date && time) {
        blockTimeSlot(date, time);

        alert(`Your appointment is scheduled for ${date} at ${time}.`);

        this.reset();
        setMinDate();
        generateTimeSlots();
    }
});

document.getElementById("date").addEventListener("change", function () {
    const selectedDate = new Date(this.value);
    if (!isWeekday(selectedDate)) {
        alert("Please select a weekday (Monday to Friday).");
        this.value = "";
        return;
    }
    updateTimeDropdown();
});

setMinDate();
generateTimeSlots();