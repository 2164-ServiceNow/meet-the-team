// Function to change the content of our bioFactDegree
function updateBioFactDegree() {
    let degreeElement = document.getElementById("bioFactDegree");
    degreeElement.textContent = "Yeah, but when did he use this last?";
}

// Form document submission
const hobbyForm = document.getElementById("hobbyForm"); 
const hobbyName = document.getElementById("hobbyName");
const hobbyLength = document.getElementById("hobbyLength");
const hobbyWhy = document.getElementById("hobbyWhy");
const hobbyConfirm = document.getElementById("hobbyConfirm");
const hobbyPass = document.getElementById("hobbyPass");
const hobbyTableBody = document.getElementById("hobbyTableBody");

hobbyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // alert("The form is submitted!");

    const hobbyNameValue = hobbyName.value
    const hobbyLengthValue = hobbyLength.value
    const hobbyWhyValue = hobbyWhy.value
    const hobbyConfirmValue = hobbyConfirm.checked// Boolean value
    const hobbyPassValue = hobbyPass.value
    const hobbyTableBody =document.getElementById("hobbyTableBody")

    // Quick console to check for value
    console.log(hobbyNameValue, hobbyLengthValue, hobbyWhyValue, hobbyConfirmValue, hobbyPassValue); 

     if (hobbyConfirmValue && hobbyPassValue === "12345"){

        let newHobby = `<tr>
        <td style="border: solid 3px;">${hobbyNameValue}</td>
        <td>${hobbyLengthValue}</td>
        <td>${hobbyWhyValue}</td>
            </tr>`
            hobbyTableBody.innerHTML += newHobby

     }
     else{
        alert("You did somethisg wrong !fix your code!")
     }

})
