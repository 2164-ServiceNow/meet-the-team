

function getTime() {
    const messageElement=document.getElementById("oldTime")
    const currentTime = new Date();
    messageElement.textContent = `Thanks for clicking! The current time is: ${currentTime.toLocaleTimeString()}`;
  }

function validPass() {
  document.getElementById("passwordForm").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (password.length < 4) {
      passwordError.textContent = "Password must be at least 4 characters long.";
      event.preventDefault();
    }
    else if(password.length>8){
        passwordError.textContent = "Password must be no longer than 8 characters.";
        event.preventDefault();
    } 
  });

}

function showAlert() {
    alert("Why did you click me!? This is your fault!");
}

function hover(){
    const hoverBox = document.getElementById('hover-box');

    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = 'red';
        hoverBox.textContent = 'Nice im red now!';
    });
    hoverBox.addEventListener('mouseout', () => {
        hoverBox.textContent = 'No longer red';
    });

    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = 'lightblue';
    });
}


const favTeamInput = document.getElementById("favTeam");
favTeamInput.addEventListener("input", () => {
  localStorage.setItem("favoriteTeam", favTeamInput.value);
});
