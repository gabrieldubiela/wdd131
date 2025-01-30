const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
let oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 'Last Modification: ' + document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const navMenu = document.querySelector('nav');
    const title = document.querySelector('h1');
    const navLinks = document.querySelectorAll('nav a');

    button.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        title.style.display = title.style.display === 'none' ? 'block' : 'none';
        button.textContent = button.textContent === 'Close' ? 'Menu' : 'Close';
        navLinks.forEach(link => {
            link.style.fontSize = '20px';
        });
    });
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Autralia",
        location: "Marden, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
      },
      {
        templeName: "Manila Philippines",
        location: "Quezon City, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
      },
      {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "2023, October, 22",
        area: 48525,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
      },
];

const templeCardsContainer = document.getElementById("temple-cards");

function renderTemples(templesArray) {
    templeCardsContainer.innerHTML = "";

    templesArray.forEach((temple) => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement("p");
        area.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;
        card.appendChild(area);

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";
        card.appendChild(image);

        templeCardsContainer.appendChild(card);
    });
}

function filterTemples(criteria) {
    let filteredTemples = [];

    switch (criteria) {
        case "Old":
            filteredTemples = temples.filter((temple) => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;

        case "New":
            filteredTemples = temples.filter((temple) => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;

        case "Large":
            filteredTemples = temples.filter((temple) => temple.area > 90000);
            break;

        case "Small":
            filteredTemples = temples.filter((temple) => temple.area < 10000);
            break;

        case "Home":
            filteredTemples = temples;
            break;
    }

    heading.innerHTML = criteria

    renderTemples(filteredTemples);
}

document.getElementById("home").addEventListener("click", () => filterTemples("Home"));
document.getElementById("old").addEventListener("click", () => filterTemples("Old"));
document.getElementById("new").addEventListener("click", () => filterTemples("New"));
document.getElementById("large").addEventListener("click", () => filterTemples("Large"));
document.getElementById("small").addEventListener("click", () => filterTemples("Small"));
const heading = document.getElementById("h2");

renderTemples(temples);


  