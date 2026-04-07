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

    // story section

    const storySection = document.createElement('section');
    const storyContent = document.createElement('div');
    const storyIconFrame = document.createElement('div');
    const shelfImage = document.createElement('img');
    const storyContentText = document.createElement('div');
    const ourStory = document.createElement('span');
    const storyTitle = document.createElement('h2');
    const storySecondary = document.createElement('span');
    const storyContentParagraphs = document.createElement('div');
    const storyDescription1 = document.createElement('p');
    const storyDescription2 = document.createElement('p');
    const storyDescription3 = document.createElement('p');
    const storySignature = document.createElement('p');

    storySection.classList.add('story-section', 'cream-section');
    storyContent.classList.add('story-content');
    storyIconFrame.classList.add('story-icon-frame');
    shelfImage.id = 'shelf-img';
    storyContentText.classList.add('story-content-text');
    ourStory.classList.add('our-story', 'pretitle');
    storyTitle.classList.add('story-title', 'content-title');
    storySecondary.classList.add('secondary-title');
    storyContentParagraphs.classList.add('story-content-paragraphs');
    storyDescription1.classList.add('story-description', 'content-description');
    storyDescription2.classList.add('story-description', 'content-description');
    storyDescription3.classList.add('story-description', 'content-description');
    storySignature.classList.add('story-signature');

    ourStory.textContent = '- OUR STORY';
    storySecondary.textContent = 'a real kitchen.';
    storyTitle.append('A warm corner, ', storySecondary);
    storyDescription1.textContent = 'Busi\'s Bakery was born in a Victorian building on a quiet Cape Town street - the kind with high ceilings, a warm homey feel and the smell of something good always coming from the back.';
    storyDescription2.textContent = 'Every morning begins before sunrise. Sourdoughs are shaped by hand, croissants laminated the slow way (the right way) and nothing leaves the oven unless it\'s perfect. No shortcuts.';
    storyDescription3.textContent = 'We bake the way your grandmother baked - with patience and love.';
    storySignature.textContent = '- Busi';

    storyContentParagraphs.append(storyDescription1, storyDescription2, storyDescription3);
    storyContentText.append(ourStory, storyTitle, storyContentParagraphs, storySignature);
    storyIconFrame.append(shelfImage);
    storyContent.append(storyIconFrame, storyContentText)
    storySection.append(storyContent);
    content.append(storySection);

    // offering section

    const offeringSection = document.createElement('section');
    const offeringContent = document.createElement('div');
    const offeringPretitle = document.createElement('span');
    const offeringTitle = document.createElement('h2');
    const offeringSecondary = document.createElement('span');
    const offeringDescription = document.createElement('p');
    const offeringContainer = document.createElement('div');
    const offeringOption1 = document.createElement('div');
    const optionTitle1 = document.createElement('p');
    const optionDescription1 = document.createElement('p');
    const offeringOption2 = document.createElement('div');
    const optionTitle2 = document.createElement('p');
    const optionDescription2 = document.createElement('p');
    const offeringOption3 = document.createElement('div');
    const optionTitle3 = document.createElement('p');
    const optionDescription3 = document.createElement('p');
    const offeringOption4 = document.createElement('div');
    const optionTitle4 = document.createElement('p');
    const optionDescription4 = document.createElement('p');
    const offeringOption5 = document.createElement('div');
    const optionTitle5 = document.createElement('p');
    const optionDescription5 = document.createElement('p');

    offeringSection.classList.add('offering-section', 'green-section');
    offeringContent.classList.add('offering-content');
    offeringPretitle.classList.add('what-we-make', 'pretitle');
    offeringTitle.classList.add('offering-title', 'content-title');
    offeringSecondary.classList.add('secondary-title');
    offeringDescription.classList.add('offering-description', 'content-description');
    offeringContainer.classList.add('offering-container');
    offeringOption1.classList.add('offering-option');
    offeringOption2.classList.add('offering-option');
    offeringOption3.classList.add('offering-option');
    offeringOption4.classList.add('offering-option');
    offeringOption5.classList.add('offering-option');
    optionTitle1.classList.add('option-title');
    optionTitle2.classList.add('option-title');
    optionTitle3.classList.add('option-title');
    optionTitle4.classList.add('option-title');
    optionTitle5.classList.add('option-title');
    optionDescription1.classList.add('option-description');
    optionDescription2.classList.add('option-description');
    optionDescription3.classList.add('option-description');
    optionDescription4.classList.add('option-description');
    optionDescription5.classList.add('option-description');

    offeringPretitle.textContent = '- WHAT WE MAKE';
    offeringSecondary.textContent = 'oven';
    offeringTitle.append('From our ', offeringSecondary, ' to your table');
    offeringDescription.textContent = 'Every item made in-house, fresh each morning';
    optionTitle1.textContent = 'Breads';
    optionTitle2.textContent = 'Cakes';
    optionTitle3.textContent = 'Sandwiches';
    optionTitle4.textContent = 'Sweet treats';
    optionTitle5.textContent = 'Teas';
    optionDescription1.textContent = 'The heart and soul of our bakery. Sourdough, rye, seeded and more.';
    optionDescription2.textContent = 'Every occassion deserves something made with care. From silky baked cheesecake to everyday slices of red velvet - baked and ready for you at the counter.';
    optionDescription3.textContent = 'Made on our own bread, spread with love, every time. Honest fillings, no shortcuts - the kind of lunch worth sitting down for.';
    optionDescription4.textContent = 'Make your Tuesday feel special with some of our cookies, scones, milk tart and more. Be sure to get here quick they might be gone by afternoon.';
    optionDescription5.textContent = 'A good slice of something belongs with a good cup of tea. Wee keep it simple with our small, considered selection brewed properly and served warm.';

    offeringOption1.append(optionTitle1, optionDescription1);
    offeringOption2.append(optionTitle2, optionDescription2);
    offeringOption3.append(optionTitle3, optionDescription3);
    offeringOption4.append(optionTitle4, optionDescription4);
    offeringOption5.append(optionTitle5, optionDescription5);
    offeringContainer.append(offeringOption1, offeringOption2, offeringOption3, offeringOption4, offeringOption5);
    offeringContent.append(offeringPretitle, offeringTitle, offeringDescription, offeringContainer);
    offeringSection.append(offeringContent);
    content.append(offeringSection);

    // specials section

    const specialsSection = document.createElement('section');
    const specialsContent = document.createElement('div');
    const specialsPretitle = document.createElement('span');
    const specialsTitle = document.createElement('h2');
    const specialsSecondary = document.createElement('span');
    const specialsContainer = document.createElement('div');
    const featuredCard = document.createElement('div');
    const featuredType = document.createElement('p');
    const featuredTitle = document.createElement('h3');
    const featuredDescription = document.createElement('p');
    const featuredPrice = document.createElement('p');
    const specialCard2 = document.createElement('div');
    const specialType2 = document.createElement('p');
    const specialTitle2 = document.createElement('h3');
    const specialDescription2 = document.createElement('p');
    const specialPrice2 = document.createElement('p');
    const specialCard3 = document.createElement('div');
    const specialType3 = document.createElement('p');
    const specialTitle3 = document.createElement('h3');
    const specialDescription3 = document.createElement('p');
    const specialPrice3 = document.createElement('p');

    specialsSection.classList.add('specials-section', 'cream-section');
    specialsContent.classList.add('specials-content');
    specialsPretitle.classList.add('out-the-oven', 'pretitle');
    specialsTitle.classList.add('specials-title', 'content-title');
    specialsSecondary.classList.add('secondary-title');
    specialsContainer.classList.add('specials-card-container');
    featuredCard.classList.add('special-card', 'featured-special');
    featuredType.classList.add('special-type');
    featuredTitle.classList.add('special-card-title', 'featured-special-title');
    featuredDescription.classList.add('special-description');
    featuredPrice.classList.add('special-price', 'featured-price');
    specialCard2.classList.add('special-card');
    specialType2.classList.add('special-type');
    specialTitle2.classList.add('special-card-title');
    specialDescription2.classList.add('special-description');
    specialPrice2.classList.add('special-price');
    specialCard3.classList.add('special-card');
    specialType3.classList.add('special-type');
    specialTitle3.classList.add('special-card-title');
    specialDescription3.classList.add('special-description');
    specialPrice3.classList.add('special-price');

    specialsPretitle.textContent = '-WHAT\'S OUT THE OVEN';
    specialsSecondary.textContent = 'specials';
    specialsTitle.append('Today\'s ', specialsSecondary);
    featuredType.textContent = 'BREAD OF THE DAY';
    featuredTitle.textContent = 'Whole Wheat Sourdough';
    featuredDescription.textContent = '72-hour cold ferment. Dark, crackled crust. Open crumb. Made with stoneground wheat from a local mill - the kind of loaf that warms your heart and your belly.';
    featuredPrice.textContent = 'R68 per loaf';
    specialType2.textContent = 'DESSERT SPECIAL';
    specialTitle2.textContent = 'Malva Pudding';
    specialDescription2.textContent = 'Some things don\'t need improving. Sticky, spongy and soaked through with a signature cream. Served hot. Gone fast.';
    specialPrice2.textContent = 'R34 per slice';
    specialType3.textContent = 'SWEET TREAT';
    specialTitle3.textContent = 'Cheesecake';
    specialDescription3.textContent = 'Baked New York style, with a buttery biscuit base and a silky smooth cream cheese filling. Served plain or with fruit compote - ask at the counter.';
    specialPrice3.textContent = 'R40 per slice';

    featuredCard.append(featuredType, featuredTitle, featuredDescription, featuredPrice);
    specialCard2.append(specialType2, specialTitle2, specialDescription2, specialPrice2);
    specialCard3.append(specialType3, specialTitle3, specialDescription3, specialPrice3);
    specialsContainer.append(featuredCard, specialCard2, specialCard3);
    specialsContent.append(specialsPretitle, specialsTitle, specialsContainer);
    specialsSection.append(specialsContent);
    content.append(specialsSection);
}

export { buildHomepage };