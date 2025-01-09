console.log("hello");

// Select form and related elements
const form = document.getElementById('movieForm');
const movieNameInput = document.getElementById('MovieName');
const movieLengthInput = document.getElementById('MovieLength');
const movieWhyInput = document.getElementById('MovieWhy');
const movieConfirmInput = document.getElementById('MovieConfirm');
const moviePassInput = document.getElementById('MoviePass');
const tableBody = document.getElementById('movieTableBody');

// Predefined password for adding a record
const PASSWORD = "123";

// Handle form submission
form.addEventListener('submit', function (event) {
    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const movieName = movieNameInput.value.trim();
    const movieLength = movieLengthInput.value.trim();
    const movieWhy = movieWhyInput.value.trim();
    const movieConfirm = movieConfirmInput.checked;
    const moviePass = moviePassInput.value;

    // Validate inputs
    if (!movieName || !movieLength || !movieWhy) {
        alert("Please fill out all fields.");
        return;
    }

    if (!movieConfirm) {
        alert("Please confirm you'd like to add this record.");
        return;
    }

    if (moviePass !== PASSWORD) {
        alert("Incorrect password. Please try again.");
        return;
    }

    // Add new row to the table
    const newRow = document.createElement('tr');
    newRow.style.backgroundColor = 'lightblue';
    newRow.style.color = 'black';

    const nameCell = document.createElement('td');
    nameCell.textContent = movieName;

    const lengthCell = document.createElement('td');
    lengthCell.textContent = movieLength;

    const whyCell = document.createElement('td');
    whyCell.textContent = movieWhy;

    newRow.appendChild(nameCell);
    newRow.appendChild(lengthCell);
    newRow.appendChild(whyCell);
    tableBody.appendChild(newRow);

    // Clear form inputs
    movieNameInput.value = "";
    movieLengthInput.value = "";
    movieWhyInput.value = "";
    movieConfirmInput.checked = false;
    moviePassInput.value = "";

    alert("Record added successfully!");
});
