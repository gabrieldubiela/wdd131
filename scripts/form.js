const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
let oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 'Last Modification: ' + document.lastModified;

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

    const stars = document.querySelectorAll('.stars input[type="radio"]');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            // Remove a classe de todas as estrelas
            document.querySelectorAll('.stars label.star').forEach(label => {
                label.classList.remove('selected');
            });
    
            // Adiciona a classe apenas às estrelas selecionadas e anteriores
            for (let i = 1; i <= star.value; i++) {
                document.querySelector(`label[for="${i}star"]`).classList.add('selected');
            }
        });
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.reset();
        form.submit();
    });
