// Import hotel data
import { hotels } from '../data/hoteldata.js';

// Select the hamburger button and page wrapper
const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

// Add click event listener for hamburger button
hb.addEventListener('click', () => {
    // Toggle the 'moveOver' class on the page wrapper
    pw.classList.toggle('moveOver');
});

// Select the hotel cards container
const hotelCards = document.querySelector('#cards');

// Loop through the hotels array and create hotel cards
hotels.forEach(hotel => {
    const mySection = document.createElement('section');

    const theImage = document.createElement("img");
    theImage.src = `images/${hotel.photo}`;
    theImage.alt = hotel.name;

    const theName = document.createElement("h2");
    theName.textContent = hotel.name;

    const theAddress = document.createElement("address");
    theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

    // Create a p element with class 'phone'
    const thePhoneWrapper = document.createElement("p");
    thePhoneWrapper.classList.add('phone');

    // Create the a element inside the p.phone
    const thePhone = document.createElement("a");
    thePhone.textContent = hotel.phone;
    thePhone.href = `tel:${hotel.phone}`;
    thePhoneWrapper.appendChild(thePhone); // Append a to p.phone

    // Append elements to the section
    mySection.appendChild(theImage);
    mySection.appendChild(theName);
    mySection.appendChild(theAddress);
    mySection.appendChild(thePhoneWrapper); // Append p.phone

    // Append the section to the hotel cards container
    hotelCards.appendChild(mySection);
});

// Current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();
