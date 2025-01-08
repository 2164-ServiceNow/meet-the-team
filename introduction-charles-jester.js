
// Create a function to change the content of our bioFactDegree
function updateBioFactDegree(){
    // keyword document === DOM
    let degreeElement = document.getElementById("bioFactDegree")
    degreeElement.textContent = "Yea, but when did he even use it last?!"
}

// form document submission
const hobbyForm = document.getElementById("hobbyForm")
const hobbyName = document.getElementById("hobbyName")
const hobbyLength = document.getElementById("hobbyLength")
const hobbyWhy = document.getElementById("hobbyWhy")
const hobbyConfirm = document.getElementById("hobbyConfirm")
const hobbyPass = document.getElementById("hobbyPass")
const hobbyTableBody = document.getElementById("hobbyTableBody")

// form submit input doesn't have the onclick action we'd like to see, so we create an Event Listener
hobbyForm.addEventListener('submit', (event)=>{
    event.preventDefault() // stops the form submission from refreshing the page
    // alert("Hi mom!") // generally speaking we don't use as it's not super user friendly

    /*
        Step1: Determine the values inside of each input
        Step2: We need to check Conditions for hobbyConfirm is checked and the hobbyPass matches the password (which we will hardcode in JS)
        Step3: Update our table to contain the new record
    */

    // Step 1
    const hobbyNameValue = hobbyName.value
    const hobbyLengthValue = hobbyLength.value
    const hobbyWhyValue = hobbyWhy.value
    const hobbyConfirmValue = hobbyConfirm.checked // boolean (true/false)
    const hobbyPassValue = hobbyPass.value

    // Quick console check for values
    console.log(hobbyNameValue, hobbyLengthValue, hobbyWhyValue, hobbyConfirmValue, hobbyPassValue)

    // Step 2
    if (hobbyConfirmValue && hobbyPassValue === "12345" && !hobbyNameValue === ""){
        // Utilize a String Literal to substitute variables into a String
        let newHobby = `<tr>
                            <td style="border: solid 3px;">${hobbyNameValue}</td>
                            <td>${hobbyLengthValue}</td>
                            <td>${hobbyWhyValue}</td>
                        </tr>`
        hobbyTableBody.innerHTML += newHobby
    } else {
        alert("You did something bad!!! Shame on you fix your code!")
    }

    // when this is refreshed you'll lose all of your data you added to your hobbies
    // you could potentially circumvent this by using localStorage
})
