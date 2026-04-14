function buildMenuPage() {
    const content = document.getElementById('content');

    // bread section
    const breadSection = document.createElement('section');
    const breadContent = document.createElement('div');
    const breadPretitle = document.createElement('p');
    const breadTitle = document.createElement('h2');
    const breadFancyAnd = document.createElement('span');
    const breadSecondary = document.createElement('span');
    const breadItemContainer = document.createElement('div');

    breadSection.classList.add('bread-section', 'cream-section', 'menu-section');
    breadContent.classList.add('bread-content', 'menu-content');
    breadPretitle.classList.add('bread-pretitle', 'pretitle');
    breadTitle.classList.add('bread-title', 'menu-title');
    breadFancyAnd.classList.add('fancy-and');
    breadSecondary.classList.add('secondary-title');
    breadItemContainer.classList.add('menu-item-container');

    breadPretitle.textContent = 'FROM THE OVEN';
    breadFancyAnd.textContent = '&';
    breadSecondary.textContent = 'Loaves';
    breadTitle.append('Breads ', breadFancyAnd, ' ', breadSecondary);

    const sourdoughCard = document.createElement('div');
    const sourdoughText = document.createElement('div');
    const sourdoughTitle = document.createElement('p');
    const sourdoughdescription = document.createElement('p');
    const sourdoughPrice = document.createElement('p');

    sourdoughCard.classList.add('menu-item-card');
    sourdoughText.classList.add('menu-item.text');
    sourdoughTitle.classList.add('item-title');
    sourdoughdescription.classList.add('item-description');
    sourdoughPrice.classList.add('price');

    sourdoughTitle.textContent = 'Sourdough';
    sourdoughdescription.textContent = 'Our signature. 72-hour cold ferment, stoneground wheat from a local mill. Dark crackled crust, open irregular crumb — the loaf that started it all.';
    sourdoughPrice.textContent = 'R68';

    sourdoughText.append(sourdoughTitle, sourdoughdescription);
    sourdoughCard.append(sourdoughText, sourdoughPrice);

    const ciabattaCard = document.createElement('div');
    const ciabattaText = document.createElement('div');
    const ciabattaTitle = document.createElement('p');
    const ciabattaDescription = document.createElement('p');
    const ciabattaPrice = document.createElement('p');

    ciabattaCard.classList.add('menu-item-card');
    ciabattaText.classList.add('menu-item-text');
    ciabattaTitle.classList.add('item-title');
    ciabattaDescription.classList.add('item-description');
    ciabattaPrice.classList.add('price');

    ciabattaTitle.textContent = 'Ciabatta';
    ciabattaDescription.textContent = 'High hydration, airy and chewy. Thin crisp crust with a tender, holey crumb. Perfect for dunking or sandwiches.';
    ciabattaPrice.textContent = 'R48';

    ciabattaText.append(ciabattaTitle, ciabattaDescription);
    ciabattaCard.append(ciabattaText, ciabattaPrice);

    const ryeCard = document.createElement('div');
    const ryeText = document.createElement('div');
    const ryeTitle = document.createElement('p');
    const ryeDescription = document.createElement('p');
    const ryePrice = document.createElement('p');

    ryeCard.classList.add('menu-item-card');
    ryeText.classList.add('menu-item-text');
    ryeTitle.classList.add('item-title');
    ryeDescription.classList.add('item-description');
    ryePrice.classList.add('price');

    ryeTitle.textContent = 'Rye';
    ryeDescription.textContent = 'Dark, dense, and deeply flavoured. Made with whole rye flour, caraway seeds, and a slow overnight ferment.';
    ryePrice.textContent = 'R58';

    ryeText.append(ryeTitle, ryeDescription);
    ryeCard.append(ryeText, ryePrice);

    const seededCard = document.createElement('div');
    const seededText = document.createElement('div');
    const seededTitle = document.createElement('p');
    const seededDescription = document.createElement('p');
    const seededPrice = document.createElement('p');

    seededCard.classList.add('menu-item-card');
    seededText.classList.add('menu-item-text');
    seededTitle.classList.add('item-title');
    seededDescription.classList.add('item-description');
    seededPrice.classList.add('price');

    seededTitle.textContent = 'Seeded loaf';
    seededDescription.textContent = 'Sunflower, sesame, poppy and flax — toasted and baked into a hearty whole wheat base. Nutty and wholesome.';
    seededPrice.textContent = 'R62';

    seededText.append(seededTitle, seededDescription);
    seededCard.append(seededText, seededPrice);

    const bagelCard = document.createElement('div');
    const bagelText = document.createElement('div');
    const bagelTitle = document.createElement('p');
    const bagelDescription = document.createElement('p');
    const bagelPrice = document.createElement('p');

    bagelCard.classList.add('menu-item-card');
    bagelText.classList.add('menu-item-text');
    bagelTitle.classList.add('item-title');
    bagelDescription.classList.add('item-description');
    bagelPrice.classList.add('price');

    bagelTitle.textContent = 'Bagel';
    bagelDescription.textContent = 'Boiled, then baked. Chewy, shiny, and satisfying. Plain, sesame, or everything — ask at the counter.';
    bagelPrice.textContent = 'R62';

    bagelText.append(bagelTitle, bagelDescription);
    bagelCard.append(bagelText, bagelPrice);

    const whiteCard = document.createElement('div');
    const whiteText = document.createElement('div');
    const whiteTitle = document.createElement('p');
    const whiteDescription = document.createElement('p');
    const whitePrice = document.createElement('p');

    whiteCard.classList.add('menu-item-card');
    whiteText.classList.add('menu-item-text');
    whiteTitle.classList.add('item-title');
    whiteDescription.classList.add('item-description');
    whitePrice.classList.add('price');

    whiteTitle.textContent = 'Country White';
    whiteDescription.textContent = 'The everyday loaf. Soft crumb, golden crust, gentle tang. Made with unbleached white flour and a touch of honey.';
    whitePrice.textContent = 'R62';

    whiteText.append(whiteTitle, whiteDescription);
    whiteCard.append(whiteText, whitePrice);

    breadItemContainer.append(sourdoughCard, ciabattaCard, ryeCard, seededCard, bagelCard, whiteCard);
    breadContent.append(breadPretitle, breadTitle, breadItemContainer);
    breadSection.append(breadContent);
    content.append(breadSection);
}

export { buildMenuPage }