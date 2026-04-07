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
}

export { buildHomepage };