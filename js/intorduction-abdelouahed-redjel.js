const greetingMessage = document.getElementById('greeting-message');
const hour = new Date().getHours();
if (hour < 12) {
    greetingMessage.textContent = "Good Morning!";
} else if (hour < 18) {
    greetingMessage.textContent = "Good Afternoon!";
} else {
    greetingMessage.textContent = "Good Evening!";
}

// Hobby Form Submission
const hobbyForm = document.getElementById('hobbyForm');
const hobbyTableBody = document.getElementById('hobbyTableBody');
const hobbyProgress = document.getElementById('hobby-progress');
let hobbyCount = 1; // Start with the initial hobby (Gaming)

hobbyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const hobbyName = document.getElementById('hobbyName').value;
    const hobbyLength = document.getElementById('hobbyLength').value;
    const hobbyWhy = document.getElementById('hobbyWhy').value;
    const hobbyConfirm = document.getElementById('hobbyConfirm').checked;

    if (hobbyName && hobbyLength && hobbyWhy && hobbyConfirm) {
        const newRow = `
            <tr>
                <td>${hobbyName}</td>
                <td>${hobbyLength} years</td>
                <td>${hobbyWhy}</td>
            </tr>`;
        hobbyTableBody.innerHTML += newRow;
        hobbyCount++;
        updateProgressBar();
        hobbyForm.reset();
    } else {
        alert('Please fill in all fields and confirm your entry.');
    }
});

// Update Progress Bar
function updateProgressBar() {
    const maxHobbies = 5;
    const progress = (hobbyCount / maxHobbies) * 100;
    hobbyProgress.style.width = `${progress}%`;
    hobbyProgress.textContent = `${hobbyCount}/${maxHobbies} Hobbies`;
    hobbyProgress.setAttribute('aria-valuenow', hobbyCount);
}

// Character Counter
const hobbyWhy = document.getElementById('hobbyWhy');
const charCounter = document.getElementById('char-counter');
hobbyWhy.addEventListener('input', () => {
    const charCount = hobbyWhy.value.length;
    charCounter.textContent = `${charCount}/150 characters`;
});

// Random Quote Generator
const quotes = [
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Success usually comes to those who are too busy to be looking for it."
];
const quoteElement = document.getElementById('random-quote');
document.getElementById('generate-quote').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});