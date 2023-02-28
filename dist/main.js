/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coverText": () => (/* binding */ coverText),
/* harmony export */   "heading": () => (/* binding */ heading)
/* harmony export */ });



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









/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });



const title1 = 'Classic Chocolate Chip Cookie';
const description1 = 'This classic chocolate chip cookie is a favorite of many with its crispy edges and soft and chewy center. Made with real butter and high-quality chocolate chips, this cookie is the perfect treat to indulge in. Whether enjoyed with a cold glass of milk or on its own, this cookie is sure to satisfy any sweet tooth.';

const title2 = 'Peanut Butter Cookie';
const description2 = 'This delicious peanut butter cookie is packed with rich, nutty flavor and has a satisfyingly chewy texture. Made with creamy peanut butter and real butter, these cookies are perfect for peanut butter lovers. They\'re also gluten-free, so they\'re a great option for anyone with dietary restrictions. Try them with a cold glass of milk for the ultimate indulgent treat.';

const title3 = 'Oatmeal Raisin Cookie';
const description3 = 'This hearty oatmeal raisin cookie is perfect for a wholesome snack or a quick breakfast on-the-go. Made with whole oats, plump raisins, and a touch of cinnamon, these cookies are chewy, flavorful, and oh-so-satisfying. Whether enjoyed as a mid-day pick-me-up or a post-workout snack, these cookies are sure to fuel your day.';

const title4 = 'Double Chocolate Cookie';
const description4 = 'This rich and decadent double chocolate cookie is perfect for anyone who loves chocolate. Made with high-quality cocoa powder and rich chocolate chips, these cookies are chewy, chocolatey, and utterly irresistible. Whether enjoyed as a dessert or a special treat, these cookies are sure to satisfy any chocolate lover.';

const title5 = 'Snickerdoodle Cookie';
const description5 = 'This classic snickerdoodle cookie is a favorite of many with its buttery, cinnamon-sugar flavor and soft, chewy texture. Made with real butter, cream of tartar, and a touch of cinnamon, these cookies are simple yet oh-so-satisfying. Whether enjoyed with a hot cup of tea or on their own, these cookies are sure to warm your heart and your taste buds.';

const title6 = 'White Chocolate Macadamia Nut Cookie';
const description6 = 'This delicious white chocolate macadamia nut cookie is a crowd-pleaser with its sweet, nutty flavor and satisfyingly chewy texture. Made with real butter, high-quality white chocolate chips, and crunchy macadamia nuts, these cookies are perfect for anyone looking for a treat that\'s a little bit different. Try pairing them with a hot cup of coffee or tea for a special treat that\'s perfect for any time of day.';



function menu(container) {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const cardTitles = [title1, title2, title3, title4, title5, title6];

    const cardDescriptions = [description1, description2, description3, description4, description5, description6];

    for(let i = 0; i < 6; ++i){
        let card = generateCard(cardTitles[i], cardDescriptions[i]);
        menu.appendChild(card);
    }

    container.appendChild(menu);

    function generateCard(title, description){
        const card = document.createElement('div');
        card.classList.add('card');
    
        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = title;
        card.appendChild(cardTitle);
    
        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = description;
        card.appendChild(cardText);
        return card;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



console.log('engaged');

const body = document.body;
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.heading)(body);
// coverText(body);

(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)(body);
// if you click menu or contact -> rmeove cover text, add whatever new elements

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EYzs7O0FBR2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDZDs7QUFFL0I7O0FBRUE7QUFDQSxpREFBTztBQUNQOztBQUVBLDhDQUFJO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtoZWFkaW5nLCBjb3ZlclRleHR9O1xuXG5cbmZ1bmN0aW9uIGhlYWRpbmcoY29udGFpbmVyKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgIFxuXG4gICAgY29uc3QgaGVhZGluZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nVGl0bGUudGV4dENvbnRlbnQgPSAnUGFwYVxcJ3MgQ29va2llcyc7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChoZWFkaW5nVGl0bGUpO1xuXG5cbiAgICBjb25zdCBkaXJlY3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXJlY3RvcnkuY2xhc3NMaXN0LmFkZCgnZGlyZWN0b3J5Jyk7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChkaXJlY3RvcnkpO1xuXG4gICAgY29uc3QgbWVudURpcmVjdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEaXJlY3RvcnkudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgZGlyZWN0b3J5LmFwcGVuZENoaWxkKG1lbnVEaXJlY3RvcnkpO1xuXG4gICAgY29uc3QgaG9tZURpcmVjdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVEaXJlY3RvcnkudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgZGlyZWN0b3J5LmFwcGVuZENoaWxkKGhvbWVEaXJlY3RvcnkpO1xuXG4gICAgY29uc3QgY29udGFjdERpcmVjdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3REaXJlY3RvcnkudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgZGlyZWN0b3J5LmFwcGVuZENoaWxkKGNvbnRhY3REaXJlY3RvcnkpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG59XG5cblxuZnVuY3Rpb24gY292ZXJUZXh0KGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGNvdmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdjb3Zlci10ZXh0Jyk7XG4gICAgXG5cbiAgICBjb25zdCBjb3ZlclRleHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY292ZXJUZXh0VGl0bGUudGV4dENvbnRlbnQgPSAnSGFuZGNyYWZ0ZWQgUGVyZmVjdGlvbic7XG4gICAgY292ZXJUZXh0LmFwcGVuZENoaWxkKGNvdmVyVGV4dFRpdGxlKTtcblxuXG4gICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJsdXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgIGJsdXIudGV4dENvbnRlbnQgPSAnXFxcIiBBdCBQYXBhXFwncyBDb29raWVzLCBlYWNoIGNvb2tpZSBpcyBoYW5kY3JhZnRlZCB3aXRoIHRoZSBwZXJmZWN0IGJsZW5kIG9mIHByZW1pdW0gaW5ncmVkaWVudHMgYW5kIGxvdmUuIFxcXCIgLSBQYXBhJztcbiAgICBjb3ZlclRleHQuYXBwZW5kQ2hpbGQoYmx1cik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY292ZXJUZXh0KTtcblxufVxuXG5cblxuXG5cblxuXG4iLCJleHBvcnQge21lbnV9O1xuXG5cbmNvbnN0IHRpdGxlMSA9ICdDbGFzc2ljIENob2NvbGF0ZSBDaGlwIENvb2tpZSc7XG5jb25zdCBkZXNjcmlwdGlvbjEgPSAnVGhpcyBjbGFzc2ljIGNob2NvbGF0ZSBjaGlwIGNvb2tpZSBpcyBhIGZhdm9yaXRlIG9mIG1hbnkgd2l0aCBpdHMgY3Jpc3B5IGVkZ2VzIGFuZCBzb2Z0IGFuZCBjaGV3eSBjZW50ZXIuIE1hZGUgd2l0aCByZWFsIGJ1dHRlciBhbmQgaGlnaC1xdWFsaXR5IGNob2NvbGF0ZSBjaGlwcywgdGhpcyBjb29raWUgaXMgdGhlIHBlcmZlY3QgdHJlYXQgdG8gaW5kdWxnZSBpbi4gV2hldGhlciBlbmpveWVkIHdpdGggYSBjb2xkIGdsYXNzIG9mIG1pbGsgb3Igb24gaXRzIG93biwgdGhpcyBjb29raWUgaXMgc3VyZSB0byBzYXRpc2Z5IGFueSBzd2VldCB0b290aC4nO1xuXG5jb25zdCB0aXRsZTIgPSAnUGVhbnV0IEJ1dHRlciBDb29raWUnO1xuY29uc3QgZGVzY3JpcHRpb24yID0gJ1RoaXMgZGVsaWNpb3VzIHBlYW51dCBidXR0ZXIgY29va2llIGlzIHBhY2tlZCB3aXRoIHJpY2gsIG51dHR5IGZsYXZvciBhbmQgaGFzIGEgc2F0aXNmeWluZ2x5IGNoZXd5IHRleHR1cmUuIE1hZGUgd2l0aCBjcmVhbXkgcGVhbnV0IGJ1dHRlciBhbmQgcmVhbCBidXR0ZXIsIHRoZXNlIGNvb2tpZXMgYXJlIHBlcmZlY3QgZm9yIHBlYW51dCBidXR0ZXIgbG92ZXJzLiBUaGV5XFwncmUgYWxzbyBnbHV0ZW4tZnJlZSwgc28gdGhleVxcJ3JlIGEgZ3JlYXQgb3B0aW9uIGZvciBhbnlvbmUgd2l0aCBkaWV0YXJ5IHJlc3RyaWN0aW9ucy4gVHJ5IHRoZW0gd2l0aCBhIGNvbGQgZ2xhc3Mgb2YgbWlsayBmb3IgdGhlIHVsdGltYXRlIGluZHVsZ2VudCB0cmVhdC4nO1xuXG5jb25zdCB0aXRsZTMgPSAnT2F0bWVhbCBSYWlzaW4gQ29va2llJztcbmNvbnN0IGRlc2NyaXB0aW9uMyA9ICdUaGlzIGhlYXJ0eSBvYXRtZWFsIHJhaXNpbiBjb29raWUgaXMgcGVyZmVjdCBmb3IgYSB3aG9sZXNvbWUgc25hY2sgb3IgYSBxdWljayBicmVha2Zhc3Qgb24tdGhlLWdvLiBNYWRlIHdpdGggd2hvbGUgb2F0cywgcGx1bXAgcmFpc2lucywgYW5kIGEgdG91Y2ggb2YgY2lubmFtb24sIHRoZXNlIGNvb2tpZXMgYXJlIGNoZXd5LCBmbGF2b3JmdWwsIGFuZCBvaC1zby1zYXRpc2Z5aW5nLiBXaGV0aGVyIGVuam95ZWQgYXMgYSBtaWQtZGF5IHBpY2stbWUtdXAgb3IgYSBwb3N0LXdvcmtvdXQgc25hY2ssIHRoZXNlIGNvb2tpZXMgYXJlIHN1cmUgdG8gZnVlbCB5b3VyIGRheS4nO1xuXG5jb25zdCB0aXRsZTQgPSAnRG91YmxlIENob2NvbGF0ZSBDb29raWUnO1xuY29uc3QgZGVzY3JpcHRpb240ID0gJ1RoaXMgcmljaCBhbmQgZGVjYWRlbnQgZG91YmxlIGNob2NvbGF0ZSBjb29raWUgaXMgcGVyZmVjdCBmb3IgYW55b25lIHdobyBsb3ZlcyBjaG9jb2xhdGUuIE1hZGUgd2l0aCBoaWdoLXF1YWxpdHkgY29jb2EgcG93ZGVyIGFuZCByaWNoIGNob2NvbGF0ZSBjaGlwcywgdGhlc2UgY29va2llcyBhcmUgY2hld3ksIGNob2NvbGF0ZXksIGFuZCB1dHRlcmx5IGlycmVzaXN0aWJsZS4gV2hldGhlciBlbmpveWVkIGFzIGEgZGVzc2VydCBvciBhIHNwZWNpYWwgdHJlYXQsIHRoZXNlIGNvb2tpZXMgYXJlIHN1cmUgdG8gc2F0aXNmeSBhbnkgY2hvY29sYXRlIGxvdmVyLic7XG5cbmNvbnN0IHRpdGxlNSA9ICdTbmlja2VyZG9vZGxlIENvb2tpZSc7XG5jb25zdCBkZXNjcmlwdGlvbjUgPSAnVGhpcyBjbGFzc2ljIHNuaWNrZXJkb29kbGUgY29va2llIGlzIGEgZmF2b3JpdGUgb2YgbWFueSB3aXRoIGl0cyBidXR0ZXJ5LCBjaW5uYW1vbi1zdWdhciBmbGF2b3IgYW5kIHNvZnQsIGNoZXd5IHRleHR1cmUuIE1hZGUgd2l0aCByZWFsIGJ1dHRlciwgY3JlYW0gb2YgdGFydGFyLCBhbmQgYSB0b3VjaCBvZiBjaW5uYW1vbiwgdGhlc2UgY29va2llcyBhcmUgc2ltcGxlIHlldCBvaC1zby1zYXRpc2Z5aW5nLiBXaGV0aGVyIGVuam95ZWQgd2l0aCBhIGhvdCBjdXAgb2YgdGVhIG9yIG9uIHRoZWlyIG93biwgdGhlc2UgY29va2llcyBhcmUgc3VyZSB0byB3YXJtIHlvdXIgaGVhcnQgYW5kIHlvdXIgdGFzdGUgYnVkcy4nO1xuXG5jb25zdCB0aXRsZTYgPSAnV2hpdGUgQ2hvY29sYXRlIE1hY2FkYW1pYSBOdXQgQ29va2llJztcbmNvbnN0IGRlc2NyaXB0aW9uNiA9ICdUaGlzIGRlbGljaW91cyB3aGl0ZSBjaG9jb2xhdGUgbWFjYWRhbWlhIG51dCBjb29raWUgaXMgYSBjcm93ZC1wbGVhc2VyIHdpdGggaXRzIHN3ZWV0LCBudXR0eSBmbGF2b3IgYW5kIHNhdGlzZnlpbmdseSBjaGV3eSB0ZXh0dXJlLiBNYWRlIHdpdGggcmVhbCBidXR0ZXIsIGhpZ2gtcXVhbGl0eSB3aGl0ZSBjaG9jb2xhdGUgY2hpcHMsIGFuZCBjcnVuY2h5IG1hY2FkYW1pYSBudXRzLCB0aGVzZSBjb29raWVzIGFyZSBwZXJmZWN0IGZvciBhbnlvbmUgbG9va2luZyBmb3IgYSB0cmVhdCB0aGF0XFwncyBhIGxpdHRsZSBiaXQgZGlmZmVyZW50LiBUcnkgcGFpcmluZyB0aGVtIHdpdGggYSBob3QgY3VwIG9mIGNvZmZlZSBvciB0ZWEgZm9yIGEgc3BlY2lhbCB0cmVhdCB0aGF0XFwncyBwZXJmZWN0IGZvciBhbnkgdGltZSBvZiBkYXkuJztcblxuXG5cbmZ1bmN0aW9uIG1lbnUoY29udGFpbmVyKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlcyA9IFt0aXRsZTEsIHRpdGxlMiwgdGl0bGUzLCB0aXRsZTQsIHRpdGxlNSwgdGl0bGU2XTtcblxuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbnMgPSBbZGVzY3JpcHRpb24xLCBkZXNjcmlwdGlvbjIsIGRlc2NyaXB0aW9uMywgZGVzY3JpcHRpb240LCBkZXNjcmlwdGlvbjUsIGRlc2NyaXB0aW9uNl07XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjsgKytpKXtcbiAgICAgICAgbGV0IGNhcmQgPSBnZW5lcmF0ZUNhcmQoY2FyZFRpdGxlc1tpXSwgY2FyZERlc2NyaXB0aW9uc1tpXSk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXJkKHRpdGxlLCBkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gICAgICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkVGV4dC5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICAgICAgY2FyZFRleHQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aGVhZGluZywgY292ZXJUZXh0fSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHttZW51fSBmcm9tICcuL21lbnUuanMnO1xuXG5jb25zb2xlLmxvZygnZW5nYWdlZCcpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmhlYWRpbmcoYm9keSk7XG4vLyBjb3ZlclRleHQoYm9keSk7XG5cbm1lbnUoYm9keSk7XG4vLyBpZiB5b3UgY2xpY2sgbWVudSBvciBjb250YWN0IC0+IHJtZW92ZSBjb3ZlciB0ZXh0LCBhZGQgd2hhdGV2ZXIgbmV3IGVsZW1lbnRzXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=