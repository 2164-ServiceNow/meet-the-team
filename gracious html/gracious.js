document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myform');
    const dynamicMessage = document.getElementById('dynamic-message');

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate if all required fields are filled
        const fname = document.getElementById('fname').value.trim();
        const lname = document.getElementById('lname').value.trim();
        const birthday = document.getElementById('birthday').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const phone = document.getElementById('phone').value.trim();
console.log(fname)
console.log(lname)
console.log(birthday)

console.log(phone)

        if (!fname || !lname || !birthday || !gender || !phone) {
            alert("Please fill in all the required fields.");
            return;
        }

        // If the form is valid, display a success message
        dynamicMessage.textContent = `Thank you, ${fname} ${lname}! Your registration has been successfully submitted.`;
        dynamicMessage.style.color = 'green';
        dynamicMessage.style.backgroundColor = 'white'; 
        
        // Optionally, reset the form after submission (if desired)
        form.reset();
    });
});