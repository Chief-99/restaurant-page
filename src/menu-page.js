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
    bagelPrice.textContent = 'R22';

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
    whitePrice.textContent = 'R44';

    whiteText.append(whiteTitle, whiteDescription);
    whiteCard.append(whiteText, whitePrice);

    breadItemContainer.append(sourdoughCard, ciabattaCard, ryeCard, seededCard, bagelCard, whiteCard);
    breadContent.append(breadPretitle, breadTitle, breadItemContainer);
    breadSection.append(breadContent);
    content.append(breadSection);

    const cakesSection = document.createElement('section');
    const cakesContent = document.createElement('div');
    const cakesPretitle = document.createElement('p');
    const cakesTitle = document.createElement('h2');
    const cakesFancy = document.createElement('span');
    const cakesSecondary = document.createElement('span');
    const cakesItemContainer = document.createElement('div');

    cakesSection.classList.add('cakes-section', 'green-section', 'menu-section');
    cakesContent.classList.add('cakes-content', 'menu-content');
    cakesPretitle.classList.add('cakes-pretitle', 'pretitle');
    cakesTitle.classList.add('cakes-title', 'menu-title');
    cakesFancy.classList.add('fancy-and');
    cakesSecondary.classList.add('secondary-title');
    cakesItemContainer.classList.add('menu-item-container');

    cakesPretitle.textContent = 'BY THE SLICE';
    cakesFancy.textContent = '&';
    cakesSecondary.textContent = 'Celebration';
    cakesTitle.append('Cakes ', cakesFancy, ' ', cakesSecondary);

    const velvetCard = document.createElement('div');
    const velvetText = document.createElement('div');
    const velvetTitle = document.createElement('p');
    const velvetDescription = document.createElement('p');
    const velvetPrice = document.createElement('p');

    velvetCard.classList.add('menu-item-card');
    velvetText.classList.add('menu-item-text');
    velvetTitle.classList.add('item-title');
    velvetDescription.classList.add('item-description');
    velvetPrice.classList.add('price');

    velvetTitle.textContent = 'Red Velvet';
    velvetDescription.textContent = 'Deep crimson sponge, cream cheese frosting. Rich, velvety, and lightly chocolatey. A showstopper.';
    velvetPrice.textContent = 'R38 / slice';

    velvetText.append(velvetTitle, velvetDescription);
    velvetCard.append(velvetText, velvetPrice);

    const carrotCard = document.createElement('div');
    const carrotText = document.createElement('div');
    const carrotTitle = document.createElement('p');
    const carrotDescription = document.createElement('p');
    const carrotPrice = document.createElement('p');

    carrotCard.classList.add('menu-item-card');
    carrotText.classList.add('menu-item-text');
    carrotTitle.classList.add('item-title');
    carrotDescription.classList.add('item-description');
    carrotPrice.classList.add('price');

    carrotTitle.textContent = 'Carrot Cake';
    carrotDescription.textContent = 'Moist, warmly spiced with cinnamon and nutmeg. Walnuts inside, cream cheese frosting on top.';
    carrotPrice.textContent = 'R35 / slice';

    carrotText.append(carrotTitle, carrotDescription);
    carrotCard.append(carrotText, carrotPrice);

    const christmasCard = document.createElement('div');
    const christmasText = document.createElement('div');
    const christmasTitle = document.createElement('p');
    const christmasDescription = document.createElement('p');
    const christmasPrice = document.createElement('p');

    christmasCard.classList.add('menu-item-card');
    christmasText.classList.add('menu-item-text');
    christmasTitle.classList.add('item-title');
    christmasDescription.classList.add('item-description');
    christmasPrice.classList.add('price');

    christmasTitle.textContent = 'Christmas Cake';
    christmasDescription.textContent = 'Brandy-soaked fruit, dark treacle, almonds and mixed spice. Made months ahead and aged to perfection.';
    christmasPrice.textContent = 'R42 / slice';

    christmasText.append(christmasTitle, christmasDescription);
    christmasCard.append(christmasText, christmasPrice);

    const cheesecakeCard = document.createElement('div');
    const cheesecakeText = document.createElement('div');
    const cheesecakeTitle = document.createElement('p');
    const cheesecakeDescription = document.createElement('p');
    const cheesecakePrice = document.createElement('p');

    cheesecakeCard.classList.add('menu-item-card');
    cheesecakeText.classList.add('menu-item-text');
    cheesecakeTitle.classList.add('item-title');
    cheesecakeDescription.classList.add('item-description');
    cheesecakePrice.classList.add('price');

    cheesecakeTitle.textContent = 'Cheesecake';
    cheesecakeDescription.textContent = 'Baked New York style. Buttery biscuit base, silky cream cheese filling. Plain or with a fruit compote.';
    cheesecakePrice.textContent = 'R40 / slice';

    cheesecakeText.append(cheesecakeTitle, cheesecakeDescription);
    cheesecakeCard.append(cheesecakeText, cheesecakePrice);

    const forrestCard = document.createElement('div');
    const forrestText = document.createElement('div');
    const forrestTitle = document.createElement('p');
    const forrestDescription = document.createElement('p');
    const forrestPrice = document.createElement('p');

    forrestCard.classList.add('menu-item-card');
    forrestText.classList.add('menu-item-text');
    forrestTitle.classList.add('item-title');
    forrestDescription.classList.add('item-description');
    forrestPrice.classList.add('price');

    forrestTitle.textContent = 'Black Forrest';
    forrestDescription.textContent = 'Layers of dark chocolate sponge, morello cherries, and whipped cream. A classic done properly.';
    forrestPrice.textContent = 'R42 / slice';

    forrestText.append(forrestTitle, forrestDescription);
    forrestCard.append(forrestText, forrestPrice);

    const poppyCard = document.createElement('div');
    const poppyText = document.createElement('div');
    const poppyTitle = document.createElement('p');
    const poppyDescription = document.createElement('p');
    const poppyPrice = document.createElement('p');

    poppyCard.classList.add('menu-item-card');
    poppyText.classList.add('menu-item-text');
    poppyTitle.classList.add('item-title');
    poppyDescription.classList.add('item-description');
    poppyPrice.classList.add('price');

    poppyTitle.textContent = 'Lemon Poppy';
    poppyDescription.textContent = 'Bright and zesty. A lemon drizzle sponge dotted with poppy seeds and finished with a sharp lemon glaze.';
    poppyPrice.textContent = 'R34 / slice';

    poppyText.append(poppyTitle, poppyDescription);
    poppyCard.append(poppyText, poppyPrice);

    cakesItemContainer.append(velvetCard, carrotCard, christmasCard, cheesecakeCard, forrestCard, poppyCard);
    cakesContent.append(cakesPretitle, cakesTitle, cakesItemContainer);
    cakesSection.append(cakesContent);
    content.append(cakesSection);
    
}

export { buildMenuPage }