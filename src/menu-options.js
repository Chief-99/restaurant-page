import { buildMenuPage } from "./menu-page.js";

function loadOption() {
    const bread = document.querySelector('.bread-option');
    const cakes = document.querySelector('.cakes-option');
    const sandwiches = document.querySelector('.sandwiches-option');
    const sweetTreats = document.querySelector('.sweet-treats-option');
    const teas = document.querySelector('.teas-option');

    bread.addEventListener('click', () => {
        buildMenuPage();
        document.querySelector('.bread-section').scrollIntoView();
    });

    cakes.addEventListener('click', () => {
        buildMenuPage();
        document.querySelector('.cakes-section').scrollIntoView();
    });

    sandwiches.addEventListener('click', () => {
        buildMenuPage();
        document.querySelector('.sandwiches-section').scrollIntoView();
    });

    sweetTreats.addEventListener('click', () => {
        buildMenuPage();
        document.querySelector('.sweet-treats-section').scrollIntoView();
    });

    teas.addEventListener('click', () => {
        buildMenuPage();
        document.querySelector('.tea-section').scrollIntoView();
    });
}

export { loadOption };