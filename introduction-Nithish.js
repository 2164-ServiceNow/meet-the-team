// JavaScript for Contact Form Validation and Submission

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the input values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Validate the form inputs
      if (!name) {
        alert("Please enter your name.");
        return;
      }
  
      if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (!message) {
        alert("Please enter your message.");
        return;
      }
  
      // If all validations pass, log the data or send it to a server
      const formData = {
        name,
        email,
        message,
      };
  
      console.log("Form submitted successfully:", formData);
  
      // Simulate successful submission with an alert
      alert("Thank you for contacting me! I will get back to you soon.");
  
      // Optionally, clear the form inputs
      form.reset();
    });
  
    // Function to validate email address
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  