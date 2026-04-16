import './styles.css';
import bakeryBuilding from './images/bakery-building.svg';
import bakeryShelf from './images/bakery-shelf.svg';
import { buildHomepage } from './hompage.js';
import { buildMenuPage } from './menu-page.js';
import { clearContent } from './clear-content.js';

buildHomepage();

const homeButton = document.getElementById('home-tab');
const menuButton = document.getElementById('menu-tab');

homeButton.addEventListener('click', () => {
    clearContent();
    buildHomepage();
    let bakery = document.getElementById('bakery-img');
    let shelf = document.getElementById('shelf-img');
    bakery.src = bakeryBuilding;
    shelf.src = bakeryShelf;
    window.scrollTo(0, 0);
})

menuButton.addEventListener('click', () => {
    clearContent();
    buildMenuPage();
    window.scrollTo(0, 0);
})

let bakery = document.getElementById('bakery-img');
let shelf = document.getElementById('shelf-img');
bakery.src = bakeryBuilding;
shelf.src = bakeryShelf;