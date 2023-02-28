export {heading, coverText};


function heading(container) {
    const heading = document.createElement('div');
    heading.classList.add('heading');
    

    const headingTitle = document.createElement('h2');
    headingTitle.textContent = 'Papa\'s Cookies';
    heading.appendChild(headingTitle);


    const directory = document.createElement('div');
    directory.classList.add('directory');
    

    const menuDirectory = document.createElement('button');
    menuDirectory.textContent = 'Menu';
    menuDirectory.classList.add('menu-button');
    directory.appendChild(menuDirectory);
    
    const homeDirectory = document.createElement('button');
    homeDirectory.textContent = 'Home';
    homeDirectory.classList.add('home-button');
    homeDirectory.classList.add('selected-button');
    directory.appendChild(homeDirectory);
    
    const contactDirectory = document.createElement('button');
    contactDirectory.textContent = 'Contact';
    contactDirectory.classList.add('contact-button');
    directory.appendChild(contactDirectory);

    heading.appendChild(directory);

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







