const messageElement = document.getElementById('main-heading');
const currentTime = new Date();
messageElement.textContent = `Welcome! to MCU: ${currentTime.toLocaleTimeString()}`;

const form = document.getElementById('contact-form');
const userNameInput = document.getElementById('username');
const userNameError = document.getElementById('username-error');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('email-error');
const passswordInput = document.getElementById('passwd');
const passswordError = document.getElementById('password-error');

form.addEventListener('submit', (event) => {
    if (!emailInput.checkValidity()) {
      event.preventDefault(); 
      emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
    console.log(userNameInput.value);
    console.log(emailInput.value);
    console.log(passswordInput.value);
});

const image = document.getElementById('center-image');
image.addEventListener('mouseover', () => {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8SJpx89fRDubMOGmTQZ2yiHyl3F5o6tTpxQ&s";
});
image.addEventListener('mouseout', () => {
    image.src = "https://images6.alphacoders.com/109/1097069.jpg";
});
    
function showAlert() {
    alert("Button Clicked with onClick!");
    document.getElementById("button-message").textContent = "Button was clicked";
}

const hoverBox = document.getElementById('hover-box');

hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightgreen';
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'lightblue';
});


const myInput = document.getElementById('username');

myInput.addEventListener('focus', () => {
    myInput.style.color = 'blue';
});

myInput.addEventListener('blur', () => {
    myInput.style.backgroundColor = 'black';
});

const nameInput = document.getElementById('nameInput');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const clearButton = document.getElementById('clearButton');
const output = document.getElementById('output');

saveButton.addEventListener('click', () => {
  const name = nameInput.value;
  if (name) {
    localStorage.setItem('userName', name);
    alert('Name saved to local storage!');
  } else {
    alert('Please enter a name.');
  }
});

loadButton.addEventListener('click', () => {
  const storedName = localStorage.getItem('userName');
  if (storedName) {
    output.textContent = `Stored Name: ${storedName}`;
  } else {
    output.textContent = 'No name found in local storage.';
  }
});

clearButton.addEventListener('click', () => {
  localStorage.removeItem('userName');
  alert('Local storage cleared!');
  output.textContent = '';
});