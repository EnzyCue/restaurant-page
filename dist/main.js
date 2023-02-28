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
    
    const hours = document.createElement('p');
    hours.textContent = 'Monday - Friday: 9am - 6pm\nSaturday: 10am - 4pm\nSunday: Closed';
    rightPanelHours.appendChild(hours);
    
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

/***/ }),

/***/ "./src/papa.jpg":
/*!**********************!*\
  !*** ./src/papa.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12a83e4d28bac633aadb.jpg";

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
// coverText(body);

// menu(body);

(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)(body);
// if you click menu or contact -> rmeove cover text, add whatever new elements

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7O0FBRVo7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isc0NBQUc7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEc0Qjs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRjOzs7QUFHZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZjZDO0FBQ2Q7QUFDUTs7QUFFdkM7O0FBRUE7QUFDQSxpREFBTztBQUNQOztBQUVBOztBQUVBLG9EQUFPO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWcgZnJvbSAnLi9wYXBhLmpwZyc7XG5cbmV4cG9ydCB7Y29udGFjdH07XG5cbmZ1bmN0aW9uIGNvbnRhY3QoY29udGFpbmVyKSB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIFxuICAgIGNvbnN0IGxlZnRQYW5lbCA9IGdlbmVyYXRlTGVmdFBhbmVsKCk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChsZWZ0UGFuZWwpO1xuXG4gICAgY29uc3QgcmlnaHRQYW5lbCA9IGdlbmVyYXRlUmlnaHRQYW5lbCgpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQocmlnaHRQYW5lbCk7XG5cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxlZnRQYW5lbCgpe1xuICAgIGNvbnN0IGxlZnRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRQYW5lbC5jbGFzc0xpc3QuYWRkKCdsZWZ0LXBhbmVsJyk7XG5cbiAgICBjb25zdCBwYXBhSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcGFwYUltZy5zcmMgPSBpbWc7XG4gICAgcGFwYUltZy53aWR0aCA9IDQwMDtcbiAgICBwYXBhSW1nLmhlaWdodCA9IDUwMDtcbiAgICBsZWZ0UGFuZWwuYXBwZW5kQ2hpbGQocGFwYUltZyk7XG5cbiAgICBjb25zdCBsZWZ0UGFuZWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFBhbmVsSW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgXG5cbiAgICBjb25zdCBsZWZ0UGFuZWxJbmZvTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFBhbmVsSW5mb051bWJlci5jbGFzc0xpc3QuYWRkKCdudW1iZXInKTtcblxuICAgIGNvbnN0IHBob25lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgcGhvbmVIZWFkaW5nLnRleHRDb250ZW50ID0gJ1Bob25lIE51bWJlcjogJztcbiAgICBsZWZ0UGFuZWxJbmZvTnVtYmVyLmFwcGVuZENoaWxkKHBob25lSGVhZGluZyk7XG5cbiAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbnVtYmVyLnRleHRDb250ZW50ID0gJys2MSAzIDkxMTMgNzg0Nic7XG4gICAgbGVmdFBhbmVsSW5mb051bWJlci5hcHBlbmRDaGlsZChudW1iZXIpO1xuXG4gICAgbGVmdFBhbmVsSW5mby5hcHBlbmRDaGlsZChsZWZ0UGFuZWxJbmZvTnVtYmVyKTtcblxuXG4gICAgY29uc3QgbGVmdFBhbmVsSW5mb0VtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdFBhbmVsSW5mb0VtYWlsLmNsYXNzTGlzdC5hZGQoJ2VtYWlsJyk7XG5cblxuICAgIGNvbnN0IGVtYWlsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgZW1haWxIZWFkaW5nLnRleHRDb250ZW50ID0gJ0VtYWlsIGFkZHJlc3M6ICc7XG4gICAgbGVmdFBhbmVsSW5mb0VtYWlsLmFwcGVuZENoaWxkKGVtYWlsSGVhZGluZyk7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdpbmZvQHBhcGFjb29raWVzLmNvbSc7XG4gICAgbGVmdFBhbmVsSW5mb0VtYWlsLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIGxlZnRQYW5lbEluZm8uYXBwZW5kQ2hpbGQobGVmdFBhbmVsSW5mb0VtYWlsKTtcblxuXG4gICAgbGVmdFBhbmVsLmFwcGVuZENoaWxkKGxlZnRQYW5lbEluZm8pO1xuXG4gICAgcmV0dXJuIGxlZnRQYW5lbDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSaWdodFBhbmVsKCl7XG4gICAgY29uc3QgcmlnaHRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0UGFuZWwuY2xhc3NMaXN0LmFkZCgncmlnaHQtcGFuZWwnKTtcblxuICAgIGNvbnN0IHJpZ2h0UGFuZWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRQYW5lbEFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuXG4gICAgY29uc3QgYWRkcmVzc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuICAgIGFkZHJlc3NIZWFkaW5nLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uOiAnO1xuICAgIHJpZ2h0UGFuZWxBZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkaW5nKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxMjMgTWFpbiBTdHJlZXQgTWVsYm91cm5lLCBWSUMgMzAwMCBBdXN0cmFsaWEnO1xuICAgIHJpZ2h0UGFuZWxBZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgcmlnaHRQYW5lbC5hcHBlbmRDaGlsZChyaWdodFBhbmVsQWRkcmVzcyk7XG5cblxuICAgIGNvbnN0IHJpZ2h0UGFuZWxIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0UGFuZWxIb3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuICAgIFxuICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgaG91cnNIZWFkaW5nLnRleHRDb250ZW50ID0gJ0J1c2luZXNzIEhvdXJzOiAnO1xuICAgIHJpZ2h0UGFuZWxIb3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuICAgIFxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzLnRleHRDb250ZW50ID0gJ01vbmRheSAtIEZyaWRheTogOWFtIC0gNnBtXFxuU2F0dXJkYXk6IDEwYW0gLSA0cG1cXG5TdW5kYXk6IENsb3NlZCc7XG4gICAgcmlnaHRQYW5lbEhvdXJzLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICBcbiAgICByaWdodFBhbmVsLmFwcGVuZENoaWxkKHJpZ2h0UGFuZWxIb3Vycyk7XG5cbiAgICBcbiAgICByZXR1cm4gcmlnaHRQYW5lbDtcbn0iLCJleHBvcnQge2hlYWRpbmcsIGNvdmVyVGV4dH07XG5cblxuZnVuY3Rpb24gaGVhZGluZyhjb250YWluZXIpIHtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgXG5cbiAgICBjb25zdCBoZWFkaW5nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmdUaXRsZS50ZXh0Q29udGVudCA9ICdQYXBhXFwncyBDb29raWVzJztcbiAgICBoZWFkaW5nLmFwcGVuZENoaWxkKGhlYWRpbmdUaXRsZSk7XG5cblxuICAgIGNvbnN0IGRpcmVjdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpcmVjdG9yeS5jbGFzc0xpc3QuYWRkKCdkaXJlY3RvcnknKTtcbiAgICBoZWFkaW5nLmFwcGVuZENoaWxkKGRpcmVjdG9yeSk7XG5cbiAgICBjb25zdCBtZW51RGlyZWN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURpcmVjdG9yeS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBkaXJlY3RvcnkuYXBwZW5kQ2hpbGQobWVudURpcmVjdG9yeSk7XG5cbiAgICBjb25zdCBob21lRGlyZWN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZURpcmVjdG9yeS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBkaXJlY3RvcnkuYXBwZW5kQ2hpbGQoaG9tZURpcmVjdG9yeSk7XG5cbiAgICBjb25zdCBjb250YWN0RGlyZWN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdERpcmVjdG9yeS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBkaXJlY3RvcnkuYXBwZW5kQ2hpbGQoY29udGFjdERpcmVjdG9yeSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbn1cblxuXG5mdW5jdGlvbiBjb3ZlclRleHQoY29udGFpbmVyKSB7XG4gICAgY29uc3QgY292ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY292ZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2NvdmVyLXRleHQnKTtcbiAgICBcblxuICAgIGNvbnN0IGNvdmVyVGV4dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb3ZlclRleHRUaXRsZS50ZXh0Q29udGVudCA9ICdIYW5kY3JhZnRlZCBQZXJmZWN0aW9uJztcbiAgICBjb3ZlclRleHQuYXBwZW5kQ2hpbGQoY292ZXJUZXh0VGl0bGUpO1xuXG5cbiAgICBjb25zdCBibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmx1ci5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG4gICAgYmx1ci50ZXh0Q29udGVudCA9ICdcXFwiIEF0IFBhcGFcXCdzIENvb2tpZXMsIGVhY2ggY29va2llIGlzIGhhbmRjcmFmdGVkIHdpdGggdGhlIHBlcmZlY3QgYmxlbmQgb2YgcHJlbWl1bSBpbmdyZWRpZW50cyBhbmQgbG92ZS4gXFxcIiAtIFBhcGEnO1xuICAgIGNvdmVyVGV4dC5hcHBlbmRDaGlsZChibHVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3ZlclRleHQpO1xuXG59XG5cblxuXG5cblxuXG5cbiIsImV4cG9ydCB7bWVudX07XG5cblxuY29uc3QgdGl0bGUxID0gJ0NsYXNzaWMgQ2hvY29sYXRlIENoaXAgQ29va2llJztcbmNvbnN0IGRlc2NyaXB0aW9uMSA9ICdUaGlzIGNsYXNzaWMgY2hvY29sYXRlIGNoaXAgY29va2llIGlzIGEgZmF2b3JpdGUgb2YgbWFueSB3aXRoIGl0cyBjcmlzcHkgZWRnZXMgYW5kIHNvZnQgYW5kIGNoZXd5IGNlbnRlci4gTWFkZSB3aXRoIHJlYWwgYnV0dGVyIGFuZCBoaWdoLXF1YWxpdHkgY2hvY29sYXRlIGNoaXBzLCB0aGlzIGNvb2tpZSBpcyB0aGUgcGVyZmVjdCB0cmVhdCB0byBpbmR1bGdlIGluLiBXaGV0aGVyIGVuam95ZWQgd2l0aCBhIGNvbGQgZ2xhc3Mgb2YgbWlsayBvciBvbiBpdHMgb3duLCB0aGlzIGNvb2tpZSBpcyBzdXJlIHRvIHNhdGlzZnkgYW55IHN3ZWV0IHRvb3RoLic7XG5cbmNvbnN0IHRpdGxlMiA9ICdQZWFudXQgQnV0dGVyIENvb2tpZSc7XG5jb25zdCBkZXNjcmlwdGlvbjIgPSAnVGhpcyBkZWxpY2lvdXMgcGVhbnV0IGJ1dHRlciBjb29raWUgaXMgcGFja2VkIHdpdGggcmljaCwgbnV0dHkgZmxhdm9yIGFuZCBoYXMgYSBzYXRpc2Z5aW5nbHkgY2hld3kgdGV4dHVyZS4gTWFkZSB3aXRoIGNyZWFteSBwZWFudXQgYnV0dGVyIGFuZCByZWFsIGJ1dHRlciwgdGhlc2UgY29va2llcyBhcmUgcGVyZmVjdCBmb3IgcGVhbnV0IGJ1dHRlciBsb3ZlcnMuIFRoZXlcXCdyZSBhbHNvIGdsdXRlbi1mcmVlLCBzbyB0aGV5XFwncmUgYSBncmVhdCBvcHRpb24gZm9yIGFueW9uZSB3aXRoIGRpZXRhcnkgcmVzdHJpY3Rpb25zLiBUcnkgdGhlbSB3aXRoIGEgY29sZCBnbGFzcyBvZiBtaWxrIGZvciB0aGUgdWx0aW1hdGUgaW5kdWxnZW50IHRyZWF0Lic7XG5cbmNvbnN0IHRpdGxlMyA9ICdPYXRtZWFsIFJhaXNpbiBDb29raWUnO1xuY29uc3QgZGVzY3JpcHRpb24zID0gJ1RoaXMgaGVhcnR5IG9hdG1lYWwgcmFpc2luIGNvb2tpZSBpcyBwZXJmZWN0IGZvciBhIHdob2xlc29tZSBzbmFjayBvciBhIHF1aWNrIGJyZWFrZmFzdCBvbi10aGUtZ28uIE1hZGUgd2l0aCB3aG9sZSBvYXRzLCBwbHVtcCByYWlzaW5zLCBhbmQgYSB0b3VjaCBvZiBjaW5uYW1vbiwgdGhlc2UgY29va2llcyBhcmUgY2hld3ksIGZsYXZvcmZ1bCwgYW5kIG9oLXNvLXNhdGlzZnlpbmcuIFdoZXRoZXIgZW5qb3llZCBhcyBhIG1pZC1kYXkgcGljay1tZS11cCBvciBhIHBvc3Qtd29ya291dCBzbmFjaywgdGhlc2UgY29va2llcyBhcmUgc3VyZSB0byBmdWVsIHlvdXIgZGF5Lic7XG5cbmNvbnN0IHRpdGxlNCA9ICdEb3VibGUgQ2hvY29sYXRlIENvb2tpZSc7XG5jb25zdCBkZXNjcmlwdGlvbjQgPSAnVGhpcyByaWNoIGFuZCBkZWNhZGVudCBkb3VibGUgY2hvY29sYXRlIGNvb2tpZSBpcyBwZXJmZWN0IGZvciBhbnlvbmUgd2hvIGxvdmVzIGNob2NvbGF0ZS4gTWFkZSB3aXRoIGhpZ2gtcXVhbGl0eSBjb2NvYSBwb3dkZXIgYW5kIHJpY2ggY2hvY29sYXRlIGNoaXBzLCB0aGVzZSBjb29raWVzIGFyZSBjaGV3eSwgY2hvY29sYXRleSwgYW5kIHV0dGVybHkgaXJyZXNpc3RpYmxlLiBXaGV0aGVyIGVuam95ZWQgYXMgYSBkZXNzZXJ0IG9yIGEgc3BlY2lhbCB0cmVhdCwgdGhlc2UgY29va2llcyBhcmUgc3VyZSB0byBzYXRpc2Z5IGFueSBjaG9jb2xhdGUgbG92ZXIuJztcblxuY29uc3QgdGl0bGU1ID0gJ1NuaWNrZXJkb29kbGUgQ29va2llJztcbmNvbnN0IGRlc2NyaXB0aW9uNSA9ICdUaGlzIGNsYXNzaWMgc25pY2tlcmRvb2RsZSBjb29raWUgaXMgYSBmYXZvcml0ZSBvZiBtYW55IHdpdGggaXRzIGJ1dHRlcnksIGNpbm5hbW9uLXN1Z2FyIGZsYXZvciBhbmQgc29mdCwgY2hld3kgdGV4dHVyZS4gTWFkZSB3aXRoIHJlYWwgYnV0dGVyLCBjcmVhbSBvZiB0YXJ0YXIsIGFuZCBhIHRvdWNoIG9mIGNpbm5hbW9uLCB0aGVzZSBjb29raWVzIGFyZSBzaW1wbGUgeWV0IG9oLXNvLXNhdGlzZnlpbmcuIFdoZXRoZXIgZW5qb3llZCB3aXRoIGEgaG90IGN1cCBvZiB0ZWEgb3Igb24gdGhlaXIgb3duLCB0aGVzZSBjb29raWVzIGFyZSBzdXJlIHRvIHdhcm0geW91ciBoZWFydCBhbmQgeW91ciB0YXN0ZSBidWRzLic7XG5cbmNvbnN0IHRpdGxlNiA9ICdXaGl0ZSBDaG9jb2xhdGUgTWFjYWRhbWlhIE51dCBDb29raWUnO1xuY29uc3QgZGVzY3JpcHRpb242ID0gJ1RoaXMgZGVsaWNpb3VzIHdoaXRlIGNob2NvbGF0ZSBtYWNhZGFtaWEgbnV0IGNvb2tpZSBpcyBhIGNyb3dkLXBsZWFzZXIgd2l0aCBpdHMgc3dlZXQsIG51dHR5IGZsYXZvciBhbmQgc2F0aXNmeWluZ2x5IGNoZXd5IHRleHR1cmUuIE1hZGUgd2l0aCByZWFsIGJ1dHRlciwgaGlnaC1xdWFsaXR5IHdoaXRlIGNob2NvbGF0ZSBjaGlwcywgYW5kIGNydW5jaHkgbWFjYWRhbWlhIG51dHMsIHRoZXNlIGNvb2tpZXMgYXJlIHBlcmZlY3QgZm9yIGFueW9uZSBsb29raW5nIGZvciBhIHRyZWF0IHRoYXRcXCdzIGEgbGl0dGxlIGJpdCBkaWZmZXJlbnQuIFRyeSBwYWlyaW5nIHRoZW0gd2l0aCBhIGhvdCBjdXAgb2YgY29mZmVlIG9yIHRlYSBmb3IgYSBzcGVjaWFsIHRyZWF0IHRoYXRcXCdzIHBlcmZlY3QgZm9yIGFueSB0aW1lIG9mIGRheS4nO1xuXG5cblxuZnVuY3Rpb24gbWVudShjb250YWluZXIpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBjYXJkVGl0bGVzID0gW3RpdGxlMSwgdGl0bGUyLCB0aXRsZTMsIHRpdGxlNCwgdGl0bGU1LCB0aXRsZTZdO1xuXG4gICAgY29uc3QgY2FyZERlc2NyaXB0aW9ucyA9IFtkZXNjcmlwdGlvbjEsIGRlc2NyaXB0aW9uMiwgZGVzY3JpcHRpb24zLCBkZXNjcmlwdGlvbjQsIGRlc2NyaXB0aW9uNSwgZGVzY3JpcHRpb242XTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2OyArK2kpe1xuICAgICAgICBsZXQgY2FyZCA9IGdlbmVyYXRlQ2FyZChjYXJkVGl0bGVzW2ldLCBjYXJkRGVzY3JpcHRpb25zW2ldKTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNhcmQodGl0bGUsIGRlc2NyaXB0aW9uKXtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgICAgICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICBcbiAgICAgICAgY29uc3QgY2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNhcmRUZXh0LmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgICAgICBjYXJkVGV4dC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUZXh0KTtcbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7aGVhZGluZywgY292ZXJUZXh0fSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHttZW51fSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHsgY29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmNvbnNvbGUubG9nKCdlbmdhZ2VkJyk7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuaGVhZGluZyhib2R5KTtcbi8vIGNvdmVyVGV4dChib2R5KTtcblxuLy8gbWVudShib2R5KTtcblxuY29udGFjdChib2R5KTtcbi8vIGlmIHlvdSBjbGljayBtZW51IG9yIGNvbnRhY3QgLT4gcm1lb3ZlIGNvdmVyIHRleHQsIGFkZCB3aGF0ZXZlciBuZXcgZWxlbWVudHNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==