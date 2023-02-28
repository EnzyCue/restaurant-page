import {heading, coverText} from './home.js';
import {menu} from './menu.js';
import { contact } from './contact.js';

console.log('engaged');

const body = document.body;
heading(body);
coverText(body);

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    removeCurrentPage();
    let selectedButton = document.querySelector('.selected-button');
    selectedButton.classList.toggle('selected-button');
    menuButton.classList.toggle('selected-button');
    menu(body);

});

const homeButton = document.querySelector('.home-button');

homeButton.addEventListener('click', () => {
    removeCurrentPage();
    coverText(body);
    let selectedButton = document.querySelector('.selected-button');
    selectedButton.classList.toggle('selected-button');
    homeButton.classList.toggle('selected-button');
});

const contactButton = document.querySelector('.contact-button');

contactButton.addEventListener('click', () => {
    removeCurrentPage();
    contact(body);
    let selectedButton = document.querySelector('.selected-button');
    selectedButton.classList.toggle('selected-button');
    contactButton.classList.toggle('selected-button');
});


function removeCurrentPage(){
    const bodyChildren = document.querySelectorAll('body > :not(.heading)');
    bodyChildren.forEach((child) => {
        child.parentNode.removeChild(child);
    })
}