/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _papa_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./papa.jpg */ "./src/papa.jpg");




function contact(container) {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    
    const leftPanel = generateLeftPanel();
    contact.appendChild(leftPanel);

    const rightPanel = generateRightPanel();
    contact.appendChild(rightPanel);


    container.appendChild(contact);

}

function generateLeftPanel(){
    const leftPanel = document.createElement('div');
    leftPanel.classList.add('left-panel');

    const papaImg = new Image();
    papaImg.src = _papa_jpg__WEBPACK_IMPORTED_MODULE_0__;
    papaImg.width = 400;
    papaImg.height = 500;
    leftPanel.appendChild(papaImg);

    const leftPanelInfo = document.createElement('div');
    leftPanelInfo.classList.add('info');
    

    const leftPanelInfoNumber = document.createElement('div');
    leftPanelInfoNumber.classList.add('number');

    const phoneHeading = document.createElement('h6');
    phoneHeading.textContent = 'Phone Number: ';
    leftPanelInfoNumber.appendChild(phoneHeading);

    const number = document.createElement('p');
    number.textContent = '+61 3 9113 7846';
    leftPanelInfoNumber.appendChild(number);

    leftPanelInfo.appendChild(leftPanelInfoNumber);


    const leftPanelInfoEmail = document.createElement('div');
    leftPanelInfoEmail.classList.add('email');


    const emailHeading = document.createElement('h6');
    emailHeading.textContent = 'Email address: ';
    leftPanelInfoEmail.appendChild(emailHeading);

    const email = document.createElement('p');
    email.textContent = 'info@papacookies.com';
    leftPanelInfoEmail.appendChild(email);

    leftPanelInfo.appendChild(leftPanelInfoEmail);


    leftPanel.appendChild(leftPanelInfo);

    return leftPanel;
}

function generateRightPanel(){
    const rightPanel = document.createElement('div');
    rightPanel.classList.add('right-panel');

    const rightPanelAddress = document.createElement('div');
    rightPanelAddress.classList.add('address');

    const addressHeading = document.createElement('h6');
    addressHeading.textContent = 'Location: ';
    rightPanelAddress.appendChild(addressHeading);

    const address = document.createElement('p');
    address.textContent = '123 Main Street Melbourne, VIC 3000 Australia';
    rightPanelAddress.appendChild(address);

    rightPanel.appendChild(rightPanelAddress);

    const rightPanelHours = document.createElement('div');
    rightPanelHours.classList.add('hours');
    
    const hoursHeading = document.createElement('h6');
    hoursHeading.textContent = 'Business Hours: ';
    rightPanelHours.appendChild(hoursHeading);
    
    const hoursList = document.createElement('ul');
    
    const mondayFriday = document.createElement('li');
    mondayFriday.textContent = 'Monday - Friday: 9am - 6pm';
    hoursList.appendChild(mondayFriday);
    
    const saturday = document.createElement('li');
    saturday.textContent = 'Saturday: 10am - 4pm';
    hoursList.appendChild(saturday);
    
    const sunday = document.createElement('li');
    sunday.textContent = 'Sunday: Closed';
    hoursList.appendChild(sunday);
    
    rightPanelHours.appendChild(hoursList);
    rightPanel.appendChild(rightPanelHours);
    

    
    return rightPanel;
}

/***/ }),

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

/***/ }),

/***/ "./src/papa.jpg":
/*!**********************!*\
  !*** ./src/papa.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebfbf32b90db97ed4f3d.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




console.log('engaged');

const body = document.body;
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.heading)(body);
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.coverText)(body);

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    removeCurrentPage();
    let selectedButton = document.querySelector('.selected-button');
    selectedButton.classList.toggle('selected-button');
    menuButton.classList.toggle('selected-button');
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)(body);

});

const homeButton = document.querySelector('.home-button');

homeButton.addEventListener('click', () => {
    removeCurrentPage();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.coverText)(body);
    let selectedButton = document.querySelector('.selected-button');
    selectedButton.classList.toggle('selected-button');
    homeButton.classList.toggle('selected-button');
});

const contactButton = document.querySelector('.contact-button');

contactButton.addEventListener('click', () => {
    removeCurrentPage();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)(body);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7O0FBRVo7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isc0NBQUc7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRzRCOzs7QUFHNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRjOzs7QUFHZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZjZDO0FBQ2Q7QUFDUTs7QUFFdkM7O0FBRUE7QUFDQSxpREFBTztBQUNQLG1EQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFJOztBQUVSLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltZyBmcm9tICcuL3BhcGEuanBnJztcblxuZXhwb3J0IHtjb250YWN0fTtcblxuZnVuY3Rpb24gY29udGFjdChjb250YWluZXIpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgXG4gICAgY29uc3QgbGVmdFBhbmVsID0gZ2VuZXJhdGVMZWZ0UGFuZWwoKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGxlZnRQYW5lbCk7XG5cbiAgICBjb25zdCByaWdodFBhbmVsID0gZ2VuZXJhdGVSaWdodFBhbmVsKCk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChyaWdodFBhbmVsKTtcblxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTGVmdFBhbmVsKCl7XG4gICAgY29uc3QgbGVmdFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFBhbmVsLmNsYXNzTGlzdC5hZGQoJ2xlZnQtcGFuZWwnKTtcblxuICAgIGNvbnN0IHBhcGFJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBwYXBhSW1nLnNyYyA9IGltZztcbiAgICBwYXBhSW1nLndpZHRoID0gNDAwO1xuICAgIHBhcGFJbWcuaGVpZ2h0ID0gNTAwO1xuICAgIGxlZnRQYW5lbC5hcHBlbmRDaGlsZChwYXBhSW1nKTtcblxuICAgIGNvbnN0IGxlZnRQYW5lbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0UGFuZWxJbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBcblxuICAgIGNvbnN0IGxlZnRQYW5lbEluZm9OdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0UGFuZWxJbmZvTnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuXG4gICAgY29uc3QgcGhvbmVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtcbiAgICBwaG9uZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnUGhvbmUgTnVtYmVyOiAnO1xuICAgIGxlZnRQYW5lbEluZm9OdW1iZXIuYXBwZW5kQ2hpbGQocGhvbmVIZWFkaW5nKTtcblxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBudW1iZXIudGV4dENvbnRlbnQgPSAnKzYxIDMgOTExMyA3ODQ2JztcbiAgICBsZWZ0UGFuZWxJbmZvTnVtYmVyLmFwcGVuZENoaWxkKG51bWJlcik7XG5cbiAgICBsZWZ0UGFuZWxJbmZvLmFwcGVuZENoaWxkKGxlZnRQYW5lbEluZm9OdW1iZXIpO1xuXG5cbiAgICBjb25zdCBsZWZ0UGFuZWxJbmZvRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0UGFuZWxJbmZvRW1haWwuY2xhc3NMaXN0LmFkZCgnZW1haWwnKTtcblxuXG4gICAgY29uc3QgZW1haWxIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKTtcbiAgICBlbWFpbEhlYWRpbmcudGV4dENvbnRlbnQgPSAnRW1haWwgYWRkcmVzczogJztcbiAgICBsZWZ0UGFuZWxJbmZvRW1haWwuYXBwZW5kQ2hpbGQoZW1haWxIZWFkaW5nKTtcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ2luZm9AcGFwYWNvb2tpZXMuY29tJztcbiAgICBsZWZ0UGFuZWxJbmZvRW1haWwuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgbGVmdFBhbmVsSW5mby5hcHBlbmRDaGlsZChsZWZ0UGFuZWxJbmZvRW1haWwpO1xuXG5cbiAgICBsZWZ0UGFuZWwuYXBwZW5kQ2hpbGQobGVmdFBhbmVsSW5mbyk7XG5cbiAgICByZXR1cm4gbGVmdFBhbmVsO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJpZ2h0UGFuZWwoKXtcbiAgICBjb25zdCByaWdodFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRQYW5lbC5jbGFzc0xpc3QuYWRkKCdyaWdodC1wYW5lbCcpO1xuXG4gICAgY29uc3QgcmlnaHRQYW5lbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodFBhbmVsQWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG5cbiAgICBjb25zdCBhZGRyZXNzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgYWRkcmVzc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnTG9jYXRpb246ICc7XG4gICAgcmlnaHRQYW5lbEFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0hlYWRpbmcpO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJzEyMyBNYWluIFN0cmVldCBNZWxib3VybmUsIFZJQyAzMDAwIEF1c3RyYWxpYSc7XG4gICAgcmlnaHRQYW5lbEFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICByaWdodFBhbmVsLmFwcGVuZENoaWxkKHJpZ2h0UGFuZWxBZGRyZXNzKTtcblxuICAgIGNvbnN0IHJpZ2h0UGFuZWxIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0UGFuZWxIb3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuICAgIFxuICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgaG91cnNIZWFkaW5nLnRleHRDb250ZW50ID0gJ0J1c2luZXNzIEhvdXJzOiAnO1xuICAgIHJpZ2h0UGFuZWxIb3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuICAgIFxuICAgIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgY29uc3QgbW9uZGF5RnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtb25kYXlGcmlkYXkudGV4dENvbnRlbnQgPSAnTW9uZGF5IC0gRnJpZGF5OiA5YW0gLSA2cG0nO1xuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChtb25kYXlGcmlkYXkpO1xuICAgIFxuICAgIGNvbnN0IHNhdHVyZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBzYXR1cmRheS50ZXh0Q29udGVudCA9ICdTYXR1cmRheTogMTBhbSAtIDRwbSc7XG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcbiAgICBcbiAgICBjb25zdCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHN1bmRheS50ZXh0Q29udGVudCA9ICdTdW5kYXk6IENsb3NlZCc7XG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKHN1bmRheSk7XG4gICAgXG4gICAgcmlnaHRQYW5lbEhvdXJzLmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XG4gICAgcmlnaHRQYW5lbC5hcHBlbmRDaGlsZChyaWdodFBhbmVsSG91cnMpO1xuICAgIFxuXG4gICAgXG4gICAgcmV0dXJuIHJpZ2h0UGFuZWw7XG59IiwiZXhwb3J0IHtoZWFkaW5nLCBjb3ZlclRleHR9O1xuXG5cbmZ1bmN0aW9uIGhlYWRpbmcoY29udGFpbmVyKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgIFxuXG4gICAgY29uc3QgaGVhZGluZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nVGl0bGUudGV4dENvbnRlbnQgPSAnUGFwYVxcJ3MgQ29va2llcyc7XG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChoZWFkaW5nVGl0bGUpO1xuXG5cbiAgICBjb25zdCBkaXJlY3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXJlY3RvcnkuY2xhc3NMaXN0LmFkZCgnZGlyZWN0b3J5Jyk7XG4gICAgXG5cbiAgICBjb25zdCBtZW51RGlyZWN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudURpcmVjdG9yeS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51RGlyZWN0b3J5LmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG4gICAgZGlyZWN0b3J5LmFwcGVuZENoaWxkKG1lbnVEaXJlY3RvcnkpO1xuICAgIFxuICAgIGNvbnN0IGhvbWVEaXJlY3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lRGlyZWN0b3J5LnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGhvbWVEaXJlY3RvcnkuY2xhc3NMaXN0LmFkZCgnaG9tZS1idXR0b24nKTtcbiAgICBob21lRGlyZWN0b3J5LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWJ1dHRvbicpO1xuICAgIGRpcmVjdG9yeS5hcHBlbmRDaGlsZChob21lRGlyZWN0b3J5KTtcbiAgICBcbiAgICBjb25zdCBjb250YWN0RGlyZWN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdERpcmVjdG9yeS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBjb250YWN0RGlyZWN0b3J5LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYnV0dG9uJyk7XG4gICAgZGlyZWN0b3J5LmFwcGVuZENoaWxkKGNvbnRhY3REaXJlY3RvcnkpO1xuXG4gICAgaGVhZGluZy5hcHBlbmRDaGlsZChkaXJlY3RvcnkpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG59XG5cblxuZnVuY3Rpb24gY292ZXJUZXh0KGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGNvdmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvdmVyVGV4dC5jbGFzc0xpc3QuYWRkKCdjb3Zlci10ZXh0Jyk7XG4gICAgXG5cbiAgICBjb25zdCBjb3ZlclRleHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY292ZXJUZXh0VGl0bGUudGV4dENvbnRlbnQgPSAnSGFuZGNyYWZ0ZWQgUGVyZmVjdGlvbic7XG4gICAgY292ZXJUZXh0LmFwcGVuZENoaWxkKGNvdmVyVGV4dFRpdGxlKTtcblxuXG4gICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJsdXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgIGJsdXIudGV4dENvbnRlbnQgPSAnXFxcIiBBdCBQYXBhXFwncyBDb29raWVzLCBlYWNoIGNvb2tpZSBpcyBoYW5kY3JhZnRlZCB3aXRoIHRoZSBwZXJmZWN0IGJsZW5kIG9mIHByZW1pdW0gaW5ncmVkaWVudHMgYW5kIGxvdmUuIFxcXCIgLSBQYXBhJztcbiAgICBjb3ZlclRleHQuYXBwZW5kQ2hpbGQoYmx1cik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY292ZXJUZXh0KTtcblxufVxuXG5cblxuXG5cblxuXG4iLCJleHBvcnQge21lbnV9O1xuXG5cbmNvbnN0IHRpdGxlMSA9ICdDbGFzc2ljIENob2NvbGF0ZSBDaGlwIENvb2tpZSc7XG5jb25zdCBkZXNjcmlwdGlvbjEgPSAnVGhpcyBjbGFzc2ljIGNob2NvbGF0ZSBjaGlwIGNvb2tpZSBpcyBhIGZhdm9yaXRlIG9mIG1hbnkgd2l0aCBpdHMgY3Jpc3B5IGVkZ2VzIGFuZCBzb2Z0IGFuZCBjaGV3eSBjZW50ZXIuIE1hZGUgd2l0aCByZWFsIGJ1dHRlciBhbmQgaGlnaC1xdWFsaXR5IGNob2NvbGF0ZSBjaGlwcywgdGhpcyBjb29raWUgaXMgdGhlIHBlcmZlY3QgdHJlYXQgdG8gaW5kdWxnZSBpbi4gV2hldGhlciBlbmpveWVkIHdpdGggYSBjb2xkIGdsYXNzIG9mIG1pbGsgb3Igb24gaXRzIG93biwgdGhpcyBjb29raWUgaXMgc3VyZSB0byBzYXRpc2Z5IGFueSBzd2VldCB0b290aC4nO1xuXG5jb25zdCB0aXRsZTIgPSAnUGVhbnV0IEJ1dHRlciBDb29raWUnO1xuY29uc3QgZGVzY3JpcHRpb24yID0gJ1RoaXMgZGVsaWNpb3VzIHBlYW51dCBidXR0ZXIgY29va2llIGlzIHBhY2tlZCB3aXRoIHJpY2gsIG51dHR5IGZsYXZvciBhbmQgaGFzIGEgc2F0aXNmeWluZ2x5IGNoZXd5IHRleHR1cmUuIE1hZGUgd2l0aCBjcmVhbXkgcGVhbnV0IGJ1dHRlciBhbmQgcmVhbCBidXR0ZXIsIHRoZXNlIGNvb2tpZXMgYXJlIHBlcmZlY3QgZm9yIHBlYW51dCBidXR0ZXIgbG92ZXJzLiBUaGV5XFwncmUgYWxzbyBnbHV0ZW4tZnJlZSwgc28gdGhleVxcJ3JlIGEgZ3JlYXQgb3B0aW9uIGZvciBhbnlvbmUgd2l0aCBkaWV0YXJ5IHJlc3RyaWN0aW9ucy4gVHJ5IHRoZW0gd2l0aCBhIGNvbGQgZ2xhc3Mgb2YgbWlsayBmb3IgdGhlIHVsdGltYXRlIGluZHVsZ2VudCB0cmVhdC4nO1xuXG5jb25zdCB0aXRsZTMgPSAnT2F0bWVhbCBSYWlzaW4gQ29va2llJztcbmNvbnN0IGRlc2NyaXB0aW9uMyA9ICdUaGlzIGhlYXJ0eSBvYXRtZWFsIHJhaXNpbiBjb29raWUgaXMgcGVyZmVjdCBmb3IgYSB3aG9sZXNvbWUgc25hY2sgb3IgYSBxdWljayBicmVha2Zhc3Qgb24tdGhlLWdvLiBNYWRlIHdpdGggd2hvbGUgb2F0cywgcGx1bXAgcmFpc2lucywgYW5kIGEgdG91Y2ggb2YgY2lubmFtb24sIHRoZXNlIGNvb2tpZXMgYXJlIGNoZXd5LCBmbGF2b3JmdWwsIGFuZCBvaC1zby1zYXRpc2Z5aW5nLiBXaGV0aGVyIGVuam95ZWQgYXMgYSBtaWQtZGF5IHBpY2stbWUtdXAgb3IgYSBwb3N0LXdvcmtvdXQgc25hY2ssIHRoZXNlIGNvb2tpZXMgYXJlIHN1cmUgdG8gZnVlbCB5b3VyIGRheS4nO1xuXG5jb25zdCB0aXRsZTQgPSAnRG91YmxlIENob2NvbGF0ZSBDb29raWUnO1xuY29uc3QgZGVzY3JpcHRpb240ID0gJ1RoaXMgcmljaCBhbmQgZGVjYWRlbnQgZG91YmxlIGNob2NvbGF0ZSBjb29raWUgaXMgcGVyZmVjdCBmb3IgYW55b25lIHdobyBsb3ZlcyBjaG9jb2xhdGUuIE1hZGUgd2l0aCBoaWdoLXF1YWxpdHkgY29jb2EgcG93ZGVyIGFuZCByaWNoIGNob2NvbGF0ZSBjaGlwcywgdGhlc2UgY29va2llcyBhcmUgY2hld3ksIGNob2NvbGF0ZXksIGFuZCB1dHRlcmx5IGlycmVzaXN0aWJsZS4gV2hldGhlciBlbmpveWVkIGFzIGEgZGVzc2VydCBvciBhIHNwZWNpYWwgdHJlYXQsIHRoZXNlIGNvb2tpZXMgYXJlIHN1cmUgdG8gc2F0aXNmeSBhbnkgY2hvY29sYXRlIGxvdmVyLic7XG5cbmNvbnN0IHRpdGxlNSA9ICdTbmlja2VyZG9vZGxlIENvb2tpZSc7XG5jb25zdCBkZXNjcmlwdGlvbjUgPSAnVGhpcyBjbGFzc2ljIHNuaWNrZXJkb29kbGUgY29va2llIGlzIGEgZmF2b3JpdGUgb2YgbWFueSB3aXRoIGl0cyBidXR0ZXJ5LCBjaW5uYW1vbi1zdWdhciBmbGF2b3IgYW5kIHNvZnQsIGNoZXd5IHRleHR1cmUuIE1hZGUgd2l0aCByZWFsIGJ1dHRlciwgY3JlYW0gb2YgdGFydGFyLCBhbmQgYSB0b3VjaCBvZiBjaW5uYW1vbiwgdGhlc2UgY29va2llcyBhcmUgc2ltcGxlIHlldCBvaC1zby1zYXRpc2Z5aW5nLiBXaGV0aGVyIGVuam95ZWQgd2l0aCBhIGhvdCBjdXAgb2YgdGVhIG9yIG9uIHRoZWlyIG93biwgdGhlc2UgY29va2llcyBhcmUgc3VyZSB0byB3YXJtIHlvdXIgaGVhcnQgYW5kIHlvdXIgdGFzdGUgYnVkcy4nO1xuXG5jb25zdCB0aXRsZTYgPSAnV2hpdGUgQ2hvY29sYXRlIE1hY2FkYW1pYSBOdXQgQ29va2llJztcbmNvbnN0IGRlc2NyaXB0aW9uNiA9ICdUaGlzIGRlbGljaW91cyB3aGl0ZSBjaG9jb2xhdGUgbWFjYWRhbWlhIG51dCBjb29raWUgaXMgYSBjcm93ZC1wbGVhc2VyIHdpdGggaXRzIHN3ZWV0LCBudXR0eSBmbGF2b3IgYW5kIHNhdGlzZnlpbmdseSBjaGV3eSB0ZXh0dXJlLiBNYWRlIHdpdGggcmVhbCBidXR0ZXIsIGhpZ2gtcXVhbGl0eSB3aGl0ZSBjaG9jb2xhdGUgY2hpcHMsIGFuZCBjcnVuY2h5IG1hY2FkYW1pYSBudXRzLCB0aGVzZSBjb29raWVzIGFyZSBwZXJmZWN0IGZvciBhbnlvbmUgbG9va2luZyBmb3IgYSB0cmVhdCB0aGF0XFwncyBhIGxpdHRsZSBiaXQgZGlmZmVyZW50LiBUcnkgcGFpcmluZyB0aGVtIHdpdGggYSBob3QgY3VwIG9mIGNvZmZlZSBvciB0ZWEgZm9yIGEgc3BlY2lhbCB0cmVhdCB0aGF0XFwncyBwZXJmZWN0IGZvciBhbnkgdGltZSBvZiBkYXkuJztcblxuXG5cbmZ1bmN0aW9uIG1lbnUoY29udGFpbmVyKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlcyA9IFt0aXRsZTEsIHRpdGxlMiwgdGl0bGUzLCB0aXRsZTQsIHRpdGxlNSwgdGl0bGU2XTtcblxuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbnMgPSBbZGVzY3JpcHRpb24xLCBkZXNjcmlwdGlvbjIsIGRlc2NyaXB0aW9uMywgZGVzY3JpcHRpb240LCBkZXNjcmlwdGlvbjUsIGRlc2NyaXB0aW9uNl07XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjsgKytpKXtcbiAgICAgICAgbGV0IGNhcmQgPSBnZW5lcmF0ZUNhcmQoY2FyZFRpdGxlc1tpXSwgY2FyZERlc2NyaXB0aW9uc1tpXSk7XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYXJkKHRpdGxlLCBkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gICAgICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkVGV4dC5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICAgICAgY2FyZFRleHQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQge2hlYWRpbmcsIGNvdmVyVGV4dH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7bWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zb2xlLmxvZygnZW5nYWdlZCcpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmhlYWRpbmcoYm9keSk7XG5jb3ZlclRleHQoYm9keSk7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idXR0b24nKTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVDdXJyZW50UGFnZSgpO1xuICAgIGxldCBzZWxlY3RlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1idXR0b24nKTtcbiAgICBzZWxlY3RlZEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZC1idXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkLWJ1dHRvbicpO1xuICAgIG1lbnUoYm9keSk7XG5cbn0pO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnV0dG9uJyk7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQ3VycmVudFBhZ2UoKTtcbiAgICBjb3ZlclRleHQoYm9keSk7XG4gICAgbGV0IHNlbGVjdGVkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLWJ1dHRvbicpO1xuICAgIHNlbGVjdGVkQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkLWJ1dHRvbicpO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQtYnV0dG9uJyk7XG59KTtcblxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ1dHRvbicpO1xuXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUN1cnJlbnRQYWdlKCk7XG4gICAgY29udGFjdChib2R5KTtcbiAgICBsZXQgc2VsZWN0ZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtYnV0dG9uJyk7XG4gICAgc2VsZWN0ZWRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQtYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZC1idXR0b24nKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHJlbW92ZUN1cnJlbnRQYWdlKCl7XG4gICAgY29uc3QgYm9keUNoaWxkcmVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSA+IDpub3QoLmhlYWRpbmcpJyk7XG4gICAgYm9keUNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9