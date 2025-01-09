const messageElement = document.getElementById("dynamic-message")
const currentTime = new Date()
const gameForm = document.getElementById("gameForm")
const gameName = document.getElementById("gameName")
const gamePlayers = document.getElementById("gamePlayers")
const gameTime = document.getElementById("gameTime")
const gameImage = document.getElementById("gameImage")
const gameAlt = document.getElementById("gameAlt")

const gameTableBody = document.getElementById("gameTableBody")
const gameImageBody = document.getElementById("gameImages")
const listGroup = document.getElementById("listGroup")

messageElement.textContent = `Welcome! The current time is: ${currentTime.toLocaleTimeString()}`

listGroup.addEventListener('mouseover', ()=>{
    listGroup.style.border = 'solid'
})
listGroup.addEventListener('mouseout', ()=>{
    listGroup.style.border = ''
})

function buttonClicked(){
    const topButton = document.getElementById("topButton")
    if(topButton.innerText==="Click me"){
        topButton.innerText = "Why did you click this button???? Hurry click it again and change it back!!!!!"
    } else {
        topButton.innerText = "Click me"
    }
}

gameForm.addEventListener("submit", event=>{
    event.preventDefault()
    let newTableRow = `<tr>
                            <td>${gameName.value}</td>
                            <td>${gamePlayers.value}</td>
                            <td>${gameTime.value}</td>
                        </tr>`
    let newImage = `<img class="img-fluid" src=${gameImage.value} alt=${gameAlt.value}/>`

    gameTableBody.innerHTML += newTableRow
    gameImageBody.innerHTML += newImage
    localStorage.setItem(`${gameName.value}`, `{gameName: ${gameName.value}, gamePlayers: ${gamePlayers.value}, gameTime: ${gameTime.value}, gameImage: ${gameImage.value}, gameAlt: ${gameAlt.value}`)
})