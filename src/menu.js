export {menu};


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