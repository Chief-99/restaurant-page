import './styles.css';
import bakeryBuilding from './images/bakery-building.svg';
import bakeryShelf from './images/bakery-shelf.svg';
import { buildHomepage } from './hompage.js';

buildHomepage();
let bakery = document.getElementById('bakery-img');
let shelf = document.getElementById('shelf-img');
bakery.src = bakeryBuilding;
shelf.src = bakeryShelf;