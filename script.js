document.getElementById("friendform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get form values
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("email").value.trim();
    const hobby = document.getElementById("favhobby").value.trim();
    const movies = document.getElementById("yesorno").checked;

    // Get error and success message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const hobbyError = document.getElementById("hobbyError");
    const moviesError = document.getElementById("moviesError");
    const successMessage = document.getElementById("successMessage");

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    hobbyError.textContent = "";
    moviesError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Validate Name
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Validate Email
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Hobby
    if (hobby === "") {
        hobbyError.textContent = "Hobby is required.";
        isValid = false;
    }

    // Validate Movies Checkbox
    if (!movies) {
        moviesError.textContent = "You must check this box to be my friend.";
        isValid = false;
    }

    // If all validations pass, display success message
    if (isValid) {
        successMessage.textContent = "Thank you for filling out the form! We are now friends!";
        successMessage.style.color = "green";

        // Optionally, reset the form
        document.getElementById("friendform").reset();
    }
});
if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully! Thank you for being my friend!";
}
function submitform(){

   alert("added successfully");
}