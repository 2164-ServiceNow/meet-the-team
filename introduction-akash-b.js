document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('All fields are required. Please fill out the form completely.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Thank you, ${name}, for reaching out! We will get back to you at ${email} soon.`);

        form.reset(); 
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
