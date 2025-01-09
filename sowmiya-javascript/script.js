// Dynamic Welcome Message
const messageElement = document.getElementById('dynamic-message');
const currentTime = new Date();
messageElement.textContent = `Welcome to Happy Paws! The current time is: ${currentTime.toLocaleTimeString()}`;

// Form Validation
const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (event) => {
    if (!emailInput.checkValidity()) {
        event.preventDefault(); // Prevent form submission
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

// Dog Image Interactivity
const dogImage = document.getElementById('dog-image');
dogImage.addEventListener('mouseover', () => {
    dogImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQL4qUljErDISKZoJ4uexd5-lwfA0FTUXmA&s"; // Replace with path to a different dog image
});
dogImage.addEventListener('mouseout', () => {
    dogImage.src = "https://i.pinimg.com/236x/80/29/d6/8029d60e70a401d539c2b946dba68516.jpg"; // Replace with path to original dog image
});

// Button Click for Dog Facts
const alertButton = document.getElementById('alert-button');
alertButton.addEventListener('click', () => {
    alert("Dogs have unique nose prints, just like human fingerprints!");
    document.getElementById('button-message').textContent = "Did you know? Dogs’ noses are one of a kind!";
});

// Hover Box
const hoverBox = document.getElementById('hover-box');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.textContent = "🐶 Woof!";
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.textContent = "Hover Over Me!";
});
