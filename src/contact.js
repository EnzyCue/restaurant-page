import img from './papa.jpg';

export {contact};

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
    papaImg.src = img;
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