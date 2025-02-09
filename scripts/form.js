document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    const today = new Date();
    currentYearElement.textContent = today.getFullYear();

    const lastModified = document.lastModified;
    lastModifiedElement.textContent = "Last Modified: " + lastModified;

    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    createSelectOption(products);

    function createSelectOption(products) {
        const productSelect = document.getElementById("product");

        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    const rangevalue = document.getElementById("rangevalue");
    const range = document.getElementById("r");

    range.addEventListener('change', displayRatingValue);
    range.addEventListener('input', displayRatingValue);

    function displayRatingValue() {
        rangevalue.innerHTML = range.value;
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.reset();
        form.submit();
    });
});