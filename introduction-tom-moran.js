
function timeChange(){
    const getTheMessage = document.getElementById('timeChange')
    const currentTime = new Date()
    getTheMessage.textContent = `The current time is ${currentTime.toLocaleTimeString()}`
}

const formHobby = document.getElementById('hobbyForm')
const hobbyName = document.getElementById('nameOfHobby')
const hobbyLength = document.getElementById('lengthOfTime')
const hobbyWhy = document.getElementById('reasonForHobby')
const hobbyConfirm = document.getElementById('checkboxConfirm')
const hobbyPass = document.getElementById('hobbyPassword')
const hobbyTable = document.getElementById('hobbyTable')

const hoverBox= document.getElementById('hoverBox')
console.log(hoverBox)


formHobby.addEventListener('submit', (event)=>{
    event.preventDefault()

    
    const hobbyNameValue = hobbyName.value
    const hobbyLengthValue = hobbyLength.value
    const hobbyWhyValue = hobbyLength.value
    const hobbyConfirmValue = hobbyConfirm.checked
    const hobbyPassValue = hobbyPass.value
    console.log(hobbyConfirmValue)

    if(hobbyConfirmValue && hobbyPassValue === "11111"){
        let newHobby = `<tr>
                            <td>${hobbyNameValue}</td>
                            <td>${hobbyLengthValue}</td>
                            <td>${hobbyWhyValue}</td>
                        </tr>`
        hobbyTable.innerHTML += newHobby
        
    }
    else {
        alert("whoops!!! you did something wrong")
    }




})
hoverBox.addEventListener('mouseover', () =>{
    hoverBox.style.backgroundColor = 'lightgreen'
})