
        document.addEventListener("DOMContentLoaded", function () {
            // Check if the counter exists in localStorage
            if (localStorage.getItem("reviewCounter") === null) {
                // If not, initialize it to 0
                localStorage.setItem("reviewCounter", 0);
            }

            // Increment the counter by 1
            let counter = parseInt(localStorage.getItem("reviewCounter"));
            counter += 1;
            localStorage.setItem("reviewCounter", counter);

            // Display the counter on the page (optional)
            const counterDisplay = document.createElement("p");
            counterDisplay.textContent = `Total Reviews Submitted: ${counter}`;
            document.body.appendChild(counterDisplay);
        });
