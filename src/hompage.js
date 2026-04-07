function buildHomepage() {
    const content = document.getElementById('content');
    // hero section
    const heroSection = document.createElement('section');
    const heroContent = document.createElement('div');
    const heroContentText = document.createElement('div');
    const establishmentPretitle = document.createElement('span');
    const heroTitle = document.createElement('h2');
    const heroSecondary = document.createElement('span');
    const heroDescription = document.createElement('p');
    const heroButton = document.createElement('button');
    const heroImgContainer = document.createElement('div');
    const heroImg = document.createElement('img');

    heroSection.classList.add('hero-section', 'green-section');
    heroContent.classList.add('hero-content');
    heroContentText.classList.add('hero-content-text');
    establishmentPretitle.classList.add('establishment', 'pretitle');
    heroTitle.classList.add('hero-title', 'content-title');
    heroSecondary.classList.add('secondary-title');
    heroDescription.classList.add('hero-description', 'content-description');
    heroButton.classList.add('specials-button');
    heroImgContainer.classList.add('hero-image');
    heroImg.id = 'bakery-img';

    establishmentPretitle.textContent = '- EST. 1987 CAPE TOWN';
    heroSecondary.textContent = 'love,';
    heroTitle.append('Baked with ', heroSecondary, ' the old way.');
    heroDescription.textContent = 'From our Victorian corner kitchen to your table - breads, treats and cakes made slowly, with the freshest ingredients, just as they should be.';
    heroButton.textContent = 'Check out our specials';

    heroContentText.append(establishmentPretitle, heroTitle, heroDescription, heroButton);
    heroImgContainer.append(heroImg);
    heroContent.append(heroContentText, heroImgContainer);
    heroSection.append(heroContent);
    content.append(heroSection);
}

export { buildHomepage };