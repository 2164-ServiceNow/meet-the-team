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

    console.log(exerciseNameValue, exerciseRatingValue, exerciseTargetValue, exerciseConfirmValue, )

    if (exerciseConfirmValue && exercisePasswordValue === "123" && !exerciseNameValue ===""){
        let newExercise = `<tr>
                                <td style="border: solid 3px">${exerciseNameValue}</td>
                                <td>${exerciseRatingValue}</td>
                                <td>${exerciseTargetValue}</td>
                           </tr>`
        exerciseTableBody.innerHTML += newExercise
    } else {
        alert("broken code")
    }
})