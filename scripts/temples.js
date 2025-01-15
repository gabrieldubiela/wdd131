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