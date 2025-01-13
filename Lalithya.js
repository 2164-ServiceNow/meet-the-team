document.addEventListener("DOMContentLoaded", () => {
    const joinForm = document.querySelector("form[action*='Join Me for Cooking']");
    joinForm.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!name || !email) {
            alert("Please fill out all fields before submitting.");
            event.preventDefault(); 
        } else {
            alert(`Thank you, ${name}, for joining!`);
        }
    });
    const recipeForm = document.querySelector("form[action*='Recipe Suggestion']");
    recipeForm.addEventListener("submit", (event) => {
        const recipeName = document.getElementById("recipe").value.trim();
        const dishType = document.getElementById("type").value;
        const ingredients = document.getElementById("ingredients").value.trim();

        if (!recipeName || !dishType || !ingredients) {
            alert("Please complete all required fields before submitting.");
            event.preventDefault(); 
        } else {
            alert(`Thank you for suggesting the recipe: ${recipeName}!`);
        }
    });
});
