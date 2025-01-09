// dynamic message
const messageElement = document.getElementById('dynamic-message');
const currentTime = new Date();
messageElement.textContent = `Welcome to my Page! The current time is: ${currentTime.toLocaleTimeString()} PST`;

// image manipulation
const image = document.getElementById('myImage');
image.addEventListener('mouseover', () => {
    image.width = "700";
});
image.addEventListener('mouseout', () => {
    image.width = "200";
});

const image2 = document.getElementById('myImage2');
image2.addEventListener('mouseover', () => {
    image2.width = "700";
});
image2.addEventListener('mouseout', () => {
    image2.width = "200";
});

// form document submission

const exerciseForm = document.getElementById("exerciseForm")
const exerciseName = document.getElementById("exerciseName")
const exerciseRating = document.getElementById("exerciseRating")
const exerciseTarget = document.getElementById("exerciseTarget")
const exerciseConfirm = document.getElementById("exerciseConfirm")
const exercisePassword = document.getElementById("exercisePassword")
const exerciseTableBody = document.getElementById("exerciseTableBody")

exerciseForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    
    const exerciseNameValue = exerciseName.value
    const exerciseRatingValue = exerciseRating.value
    const exerciseTargetValue = exerciseTarget.value
    const exerciseConfirmValue = exerciseConfirm.checked
    const exercisePasswordValue = exercisePassword.value

    console.log(exerciseNameValue, exerciseRatingValue, exerciseTargetValue, exerciseConfirmValue, exercisePasswordValue)

    if (exerciseConfirmValue && exercisePasswordValue === "123" ){ //&& !exerciseNameValue === ""){
        let newExercise = `<tr>
                                <td style="table table-striped table-success">${exerciseNameValue}</td>
                                <td>${exerciseRatingValue}</td>
                                <td>${exerciseTargetValue}</td>
                           </tr>`
        exerciseTableBody.innerHTML += newExercise
    } else {
        alert("Password is wrong")
    }
})