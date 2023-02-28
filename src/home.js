export {heading, coverText};


function heading(container) {
    const heading = document.createElement('div');
    heading.classList.add('heading');
    

    const headingTitle = document.createElement('h2');
    headingTitle.textContent = 'Papa\'s Cookies';
    heading.appendChild(headingTitle);


    const directory = document.createElement('div');
    directory.classList.add('directory');
    heading.appendChild(directory);

    const menuDirectory = document.createElement('div');
    menuDirectory.textContent = 'Menu';
    directory.appendChild(menuDirectory);

    const homeDirectory = document.createElement('div');
    homeDirectory.textContent = 'Home';
    directory.appendChild(homeDirectory);

    const contactDirectory = document.createElement('div');
    contactDirectory.textContent = 'Contact';
    directory.appendChild(contactDirectory);

    container.appendChild(heading);

}


function coverText(container) {
    const coverText = document.createElement('div');
    coverText.classList.add('cover-text');
    

    const coverTextTitle = document.createElement('h1');
    coverTextTitle.textContent = 'Handcrafted Perfection';
    coverText.appendChild(coverTextTitle);


    const blur = document.createElement('div');
    blur.classList.add('blur');
    blur.textContent = '\" At Papa\'s Cookies, each cookie is handcrafted with the perfect blend of premium ingredients and love. \" - Papa';
    coverText.appendChild(blur);

    container.appendChild(coverText);

}







