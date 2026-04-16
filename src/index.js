import './styles.css';
import bakeryBuilding from './images/bakery-building.svg';
import bakeryShelf from './images/bakery-shelf.svg';
import { buildHomepage } from './hompage.js';
import { buildMenuPage } from './menu-page.js';

const homeButton = document.getElementById('home-tab');
const menuButton = document.getElementById('menu-tab');

buildHomepage();

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('specials-button')) {
        document.querySelector('.specials-section').scrollIntoView({behavior: 'smooth'});
    }
});

homeButton.addEventListener('click', () => {
    buildHomepage();
    let bakery = document.getElementById('bakery-img');
    let shelf = document.getElementById('shelf-img');
    bakery.src = bakeryBuilding;
    shelf.src = bakeryShelf;
    window.scrollTo(0, 0);
});

menuButton.addEventListener('click', () => {
    buildMenuPage();
    window.scrollTo(0, 0);
});


let bakery = document.getElementById('bakery-img');
let shelf = document.getElementById('shelf-img');
bakery.src = bakeryBuilding;
shelf.src = bakeryShelf;