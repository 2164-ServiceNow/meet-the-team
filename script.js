//Dynamic Text Start
document.getElementById("changableMessage").innerText = "This message HAS been changed by javascript.";
//Dynamic Text End

//Form Handler Start
let formMessageElement = document.getElementById("burgerFormContainer").getElementsByTagName("span")[0];
let nameInput = document.getElementById("orderName");
document.getElementById("burgerForm").addEventListener("submit", (event) => {
    if(nameInput.value === "")
    {
        event.preventDefault();
        formMessageElement .innerText = "Missing name";
    }
    else if (!cheeseInput.checkValidity())
    {
        formMessageElement .innerText = cheeseInput.validationMessage;
    }
});
//Form Handler End

//Randomize Menu Start
function randomizeMenu()
{
    let menuBody = document.getElementById("menuBody");
    let temp = menuBody.getElementsByTagName("tr")[0].outerHTML;
    let randint = Math.floor(Math.random() * menuBody.getElementsByTagName("tr").length);
    menuBody.getElementsByTagName("tr")[0].outerHTML = menuBody.getElementsByTagName("tr")[randint].outerHTML;
    menuBody.getElementsByTagName("tr")[randint].outerHTML = temp;
}

Array.from(document.getElementsByTagName("td")).forEach(tableCell => {
    tableCell.addEventListener("mouseover", () => {
        tableCell.style.borderColor = "yellow";
    });
    tableCell.addEventListener("mouseout", () => {
        tableCell.style.borderColor = "sienna";
    });
});
//Randomize Menu End

//Local Storage Start
function refreshLabel()
{
    document.getElementById("colorLabel").innerText = localStorage.getItem("color");
}

function setBlue()
{
    localStorage.setItem("color", "Blue");
    refreshLabel();
}

function setGreen()
{
    localStorage.setItem("color", "Green");
    refreshLabel();
}

refreshLabel();
//Local Storage End