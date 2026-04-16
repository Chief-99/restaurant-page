import './styles.css';
import bakeryBuilding from './images/bakery-building.svg';
import bakeryShelf from './images/bakery-shelf.svg';
import { buildHomepage } from './hompage.js';
import { buildMenuPage } from './menu-page.js';

buildHomepage();

const homeButton = document.getElementById('home-tab');
const menuButton = document.getElementById('menu-tab');
const breadOption = document.querySelector('.bread-option');
const cakesOption = document.querySelector('.cakes-option');
const sandwichesOption = document.querySelector('.sandwiches-option');
const sweetTreatsOption = document.querySelector('.sweet-treats-option');
const teasOption = document.querySelector('.teas-option');

breadOption.addEventListener('click', () => {
    buildMenuPage();
    document.querySelector('.bread-section').scrollIntoView();
});

cakesOption.addEventListener('click', () => {
    buildMenuPage();
    document.querySelector('.cakes-section').scrollIntoView();
});

sandwichesOption.addEventListener('click', () => {
    buildMenuPage();
    document.querySelector('.sandwiches-section').scrollIntoView();
});

sweetTreatsOption.addEventListener('click', () => {
    buildMenuPage();
    document.querySelector('.sweet-treats-section').scrollIntoView();
});

teasOption.addEventListener('click', () => {
    buildMenuPage();
    document.querySelector('.tea-section').scrollIntoView();
})

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