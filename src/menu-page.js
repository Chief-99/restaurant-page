import { clearContent } from './clear-content.js';

function buildMenuPage() {
    clearContent();
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

    const sweetTreatsSection = document.createElement('section');
    const sweetTreatsContent = document.createElement('div');
    const sweetTreatsPretitle = document.createElement('p');
    const sweetTreatsTitle = document.createElement('h2');
    const sweetTreatsSecondary = document.createElement('span');
    const sweetTreatsItemContainer = document.createElement('div');

    sweetTreatsSection.classList.add('sweet-treats-section', 'cream-section', 'menu-section');
    sweetTreatsContent.classList.add('sweet-treats-content', 'menu-content');
    sweetTreatsPretitle.classList.add('sweet-treats-pretitle', 'pretitle');
    sweetTreatsTitle.classList.add('sweet-treats-title', 'menu-title');
    sweetTreatsSecondary.classList.add('secondary-title');
    sweetTreatsItemContainer.classList.add('menu-item-container');

    sweetTreatsPretitle.textContent = 'LITTLE SOMETHINGS';
    sweetTreatsSecondary.textContent = 'Treats';
    sweetTreatsTitle.append('Sweet ', sweetTreatsSecondary);

    const chocChipCard = document.createElement('div');
    const chocChipText = document.createElement('div');
    const chocChipTitle = document.createElement('p');
    const chocChipDescription = document.createElement('p');
    const chocChipPrice = document.createElement('p');

    chocChipCard.classList.add('menu-item-card');
    chocChipText.classList.add('menu-item-text');
    chocChipTitle.classList.add('item-title');
    chocChipDescription.classList.add('item-description');
    chocChipPrice.classList.add('price');

    chocChipTitle.textContent = 'Choc Chip Cookies';
    chocChipDescription.textContent = 'Big, golden-edged, chewy in the middle. Dark chocolate chunks and a pinch of sea salt.';
    chocChipPrice.textContent = 'R18 each';

    chocChipText.append(chocChipTitle, chocChipDescription);
    chocChipCard.append(chocChipText, chocChipPrice);

    const lofthouseCard = document.createElement('div');
    const lofthouseText = document.createElement('div');
    const lofthouseTitle = document.createElement('p');
    const lofthouseDescription = document.createElement('p');
    const lofthousePrice = document.createElement('p');

    lofthouseCard.classList.add('menu-item-card');
    lofthouseText.classList.add('menu-item-text');
    lofthouseTitle.classList.add('item-title');
    lofthouseDescription.classList.add('item-description');
    lofthousePrice.classList.add('price');

    lofthouseTitle.textContent = 'Lofthouse Cookies';
    lofthouseDescription.textContent = 'Thick, pillowy, soft-frosted sugar cookies. Topped with coloured buttercream — the kind that melt on your tongue.';
    lofthousePrice.textContent = 'R20 each';

    lofthouseText.append(lofthouseTitle, lofthouseDescription);
    lofthouseCard.append(lofthouseText, lofthousePrice);

    const sconesCard = document.createElement('div');
    const sconesText = document.createElement('div');
    const sconesTitle = document.createElement('p');
    const sconesDescription = document.createElement('p');
    const sconesPrice = document.createElement('p');

    sconesCard.classList.add('menu-item-card');
    sconesText.classList.add('menu-item-text');
    sconesTitle.classList.add('item-title');
    sconesDescription.classList.add('item-description');
    sconesPrice.classList.add('price');

    sconesTitle.textContent = 'Scones';
    sconesDescription.textContent = 'Tall, flaky, golden. Plain or fruit. Served with clotted cream and jam — the proper way.';
    sconesPrice.textContent = 'R24 each';

    sconesText.append(sconesTitle, sconesDescription);
    sconesCard.append(sconesText, sconesPrice);

    const muffinsCard = document.createElement('div');
    const muffinsText = document.createElement('div');
    const muffinsTitle = document.createElement('p');
    const muffinsDescription = document.createElement('p');
    const muffinsPrice = document.createElement('p');

    muffinsCard.classList.add('menu-item-card');
    muffinsText.classList.add('menu-item-text');
    muffinsTitle.classList.add('item-title');
    muffinsDescription.classList.add('item-description');
    muffinsPrice.classList.add('price');

    muffinsTitle.textContent = 'Muffins';
    muffinsDescription.textContent = 'Domed and generous. Rotating flavours baked fresh each morning — ask at the counter for today\'s.';
    muffinsPrice.textContent = 'R26 each';

    muffinsText.append(muffinsTitle, muffinsDescription);
    muffinsCard.append(muffinsText, muffinsPrice);

    const cakePopsCard = document.createElement('div');
    const cakePopsText = document.createElement('div');
    const cakePopsTitle = document.createElement('p');
    const cakePopsDescription = document.createElement('p');
    const cakePopsPrice = document.createElement('p');

    cakePopsCard.classList.add('menu-item-card');
    cakePopsText.classList.add('menu-item-text');
    cakePopsTitle.classList.add('item-title');
    cakePopsDescription.classList.add('item-description');
    cakePopsPrice.classList.add('price');

    cakePopsTitle.textContent = 'Cake Pops';
    cakePopsDescription.textContent = 'Crumbled sponge and frosting, rolled into balls and dipped in chocolate. A joy on a stick.';
    cakePopsPrice.textContent = 'R22 each';

    cakePopsText.append(cakePopsTitle, cakePopsDescription);
    cakePopsCard.append(cakePopsText, cakePopsPrice);

    const milkTartCard = document.createElement('div');
    const milkTartText = document.createElement('div');
    const milkTartTitle = document.createElement('p');
    const milkTartDescription = document.createElement('p');
    const milkTartPrice = document.createElement('p');

    milkTartCard.classList.add('menu-item-card');
    milkTartText.classList.add('menu-item-text');
    milkTartTitle.classList.add('item-title');
    milkTartDescription.classList.add('item-description');
    milkTartPrice.classList.add('price');

    milkTartTitle.textContent = 'Milk Tart';
    milkTartDescription.textContent = 'A South African classic. Sweet pastry shell, creamy milk custard filling, dusted with cinnamon. Busi\'s grandmother\'s recipe.';
    milkTartPrice.textContent = 'R30 / slice';

    milkTartText.append(milkTartTitle, milkTartDescription);
    milkTartCard.append(milkTartText, milkTartPrice);

    sweetTreatsItemContainer.append(chocChipCard, lofthouseCard, sconesCard, muffinsCard, cakePopsCard, milkTartCard);
    sweetTreatsContent.append(sweetTreatsPretitle, sweetTreatsTitle, sweetTreatsItemContainer);
    sweetTreatsSection.append(sweetTreatsContent);
    content.append(sweetTreatsSection);

    const sandwichesSection = document.createElement('section');
    const sandwichesContent = document.createElement('div');
    const sandwichesPretitle = document.createElement('p');
    const sandwichesTitle = document.createElement('h2');
    const sandwichesItemContainer = document.createElement('div');

    sandwichesSection.classList.add('sandwiches-section', 'brown-section', 'menu-section');
    sandwichesContent.classList.add('sandwiches-content', 'menu-content');
    sandwichesPretitle.classList.add('sandwiches-pretitle', 'pretitle');
    sandwichesTitle.classList.add('sandwiches-title', 'menu-title');
    sandwichesItemContainer.classList.add('menu-item-container');

    sandwichesPretitle.textContent = 'ON OUR OWN BREAD';
    sandwichesTitle.textContent = 'Sandwiches';

    const chickenCard = document.createElement('div');
    const chickenText = document.createElement('div');
    const chickenTitle = document.createElement('p');
    const chickenDescription = document.createElement('p');
    const chickenPrice = document.createElement('p');

    chickenCard.classList.add('menu-item-card');
    chickenText.classList.add('menu-item-text');
    chickenTitle.classList.add('item-title');
    chickenDescription.classList.add('item-description');
    chickenPrice.classList.add('price');

    chickenTitle.textContent = 'Chicken Mayo';
    chickenDescription.textContent = 'Tender pulled chicken, house-made mayo, lettuce and a touch of wholegrain mustard. On ciabatta or country white.';
    chickenPrice.textContent = 'R58';

    chickenText.append(chickenTitle, chickenDescription);
    chickenCard.append(chickenText, chickenPrice);

    const cheeseCard = document.createElement('div');
    const cheeseText = document.createElement('div');
    const cheeseTitle = document.createElement('p');
    const cheeseDescription = document.createElement('p');
    const cheesePrice = document.createElement('p');

    cheeseCard.classList.add('menu-item-card');
    cheeseText.classList.add('menu-item-text');
    cheeseTitle.classList.add('item-title');
    cheeseDescription.classList.add('item-description');
    cheesePrice.classList.add('price');

    cheeseTitle.textContent = 'Cheese Toastie';
    cheeseDescription.textContent = 'Thick-cut country white, generously cheesed, pressed golden and crispy. Served with sliced tomato on the side.';
    cheesePrice.textContent = 'R48';

    cheeseText.append(cheeseTitle, cheeseDescription);
    cheeseCard.append(cheeseText, cheesePrice);

    const vegCard = document.createElement('div');
    const vegText = document.createElement('div');
    const vegTitle = document.createElement('p');
    const vegDescription = document.createElement('p');
    const vegPrice = document.createElement('p');

    vegCard.classList.add('menu-item-card');
    vegText.classList.add('menu-item-text');
    vegTitle.classList.add('item-title');
    vegDescription.classList.add('item-description');
    vegPrice.classList.add('price');

    vegTitle.textContent = 'Roasted Veg & Hummus';
    vegDescription.textContent = 'Seasonal roasted vegetables, house hummus, rocket and a drizzle of olive oil. On sourdough or ciabatta.';
    vegPrice.textContent = 'R62';

    vegText.append(vegTitle, vegDescription);
    vegCard.append(vegText, vegPrice);

    const avoCard = document.createElement('div');
    const avoText = document.createElement('div');
    const avoTitle = document.createElement('p');
    const avoDescription = document.createElement('p');
    const avoPrice = document.createElement('p');

    avoCard.classList.add('menu-item-card');
    avoText.classList.add('menu-item-text');
    avoTitle.classList.add('item-title');
    avoDescription.classList.add('item-description');
    avoPrice.classList.add('price');

    avoTitle.textContent = 'Smashed Avo';
    avoDescription.textContent = 'Fresh avo, lemon, chilli flakes, and flaky salt on thick-cut sourdough toast. Simple, done properly.';
    avoPrice.textContent = 'R34';

    avoText.append(avoTitle, avoDescription);
    avoCard.append(avoText, avoPrice);

    sandwichesItemContainer.append(chickenCard, cheeseCard, vegCard, avoCard);
    sandwichesContent.append(sandwichesPretitle, sandwichesTitle, sandwichesItemContainer);
    sandwichesSection.append(sandwichesContent);
    content.append(sandwichesSection);

    const teaSection = document.createElement('section');
    const teaContent = document.createElement('div');
    const teaPretitle = document.createElement('p');
    const teaTitle = document.createElement('h2');
    const teaItemContainer = document.createElement('div');

    teaSection.classList.add('tea-section', 'cream-section', 'menu-section');
    teaContent.classList.add('tea-content', 'menu-content');
    teaPretitle.classList.add('tea-pretitle', 'pretitle');
    teaTitle.classList.add('tea-title', 'menu-title');
    teaItemContainer.classList.add('menu-item-container');

    teaPretitle.textContent = 'WARM YOUR HEART AND YOUR HANDS';
    teaTitle.textContent = 'Teas';

    const hibiscusCard = document.createElement('div');
    const hibiscusText = document.createElement('div');
    const hibiscusTitle = document.createElement('p');
    const hibiscusDescription = document.createElement('p');
    const hibiscusPrice = document.createElement('p');

    hibiscusCard.classList.add('menu-item-card');
    hibiscusText.classList.add('menu-item-text');
    hibiscusTitle.classList.add('item-title');
    hibiscusDescription.classList.add('item-description');
    hibiscusPrice.classList.add('price');

    hibiscusTitle.textContent = 'Hibiscus';
    hibiscusDescription.textContent = 'Tart, ruby red and floral. Served hot or ask for it iced on a warm day.';
    hibiscusPrice.textContent = 'R28';

    hibiscusText.append(hibiscusTitle, hibiscusDescription);
    hibiscusCard.append(hibiscusText, hibiscusPrice);

    const jasmineCard = document.createElement('div');
    const jasmineText = document.createElement('div');
    const jasmineTitle = document.createElement('p');
    const jasmineDescription = document.createElement('p');
    const jasminePrice = document.createElement('p');

    jasmineCard.classList.add('menu-item-card');
    jasmineText.classList.add('menu-item-text');
    jasmineTitle.classList.add('item-title');
    jasmineDescription.classList.add('item-description');
    jasminePrice.classList.add('price');

    jasmineTitle.textContent = 'Jasmine';
    jasmineDescription.textContent = 'Delicate and gragrant. Green tea blossomed with jasmine flowers. Light and calming.';
    jasminePrice.textContent = 'R28';

    jasmineText.append(jasmineTitle, jasmineDescription);
    jasmineCard.append(jasmineText, jasminePrice);

    const rooibosCard = document.createElement('div');
    const rooibosText = document.createElement('div');
    const rooibosTitle = document.createElement('p');
    const rooibosDescription = document.createElement('p');
    const rooibosPrice = document.createElement('p');

    rooibosCard.classList.add('menu-item-card');
    rooibosText.classList.add('menu-item-text');
    rooibosTitle.classList.add('item-title');
    rooibosDescription.classList.add('item-description');
    rooibosPrice.classList.add('price');

    rooibosTitle.textContent = 'Rooibos';
    rooibosDescription.textContent = 'Our proudly South African staple. Earthy, caffeine-free, and warming. Plain or with milk.';
    rooibosPrice.textContent = 'R24';

    rooibosText.append(rooibosTitle, rooibosDescription);
    rooibosCard.append(rooibosText, rooibosPrice);

    const greenTeaCard = document.createElement('div');
    const greenTeaText = document.createElement('div');
    const greenTeaTitle = document.createElement('p');
    const greenTeaDescription = document.createElement('p');
    const greenTeaPrice = document.createElement('p');

    greenTeaCard.classList.add('menu-item-card');
    greenTeaText.classList.add('menu-item-text');
    greenTeaTitle.classList.add('item-title');
    greenTeaDescription.classList.add('item-description');
    greenTeaPrice.classList.add('price');

    greenTeaTitle.textContent = 'Green Tea';
    greenTeaDescription.textContent = 'Clean, grassy, and gently astringent. Brewed at the right temperature — not boiling — for a smooth cup.';
    greenTeaPrice.textContent = 'R26';

    greenTeaText.append(greenTeaTitle, greenTeaDescription);
    greenTeaCard.append(greenTeaText, greenTeaPrice);

    const fruitCard = document.createElement('div');
    const fruitText = document.createElement('div');
    const fruitTitle = document.createElement('p');
    const fruitDescription = document.createElement('p');
    const fruitPrice = document.createElement('p');

    fruitCard.classList.add('menu-item-card', 'fruit-card');
    fruitText.classList.add('menu-item-text');
    fruitTitle.classList.add('item-title');
    fruitDescription.classList.add('item-description');
    fruitPrice.classList.add('price');

    fruitTitle.textContent = 'Fruit Flavours';
    fruitDescription.textContent = 'Peach, strawberry, orange and more — we\'re finalising our fruit tea selection. Ask at the counter for what\'s available today, or pop back soon.';
    fruitPrice.textContent = 'Coming soon';

    fruitText.append(fruitTitle, fruitDescription);
    fruitCard.append(fruitText, fruitPrice);

    teaItemContainer.append(hibiscusCard, jasmineCard, rooibosCard, greenTeaCard, fruitCard);
    teaContent.append(teaPretitle, teaTitle, teaItemContainer);
    teaSection.append(teaContent);
    content.append(teaSection);
}

export { buildMenuPage }