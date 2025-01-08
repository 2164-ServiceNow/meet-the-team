//Step 1
const timeUponLoadingMessageElement = document.getElementById('timeUponLoading');
const currentTime = new Date();
timeUponLoadingMessageElement.textContent = `Welcome to this page by the way! When the page loaded, time time was ${currentTime.getHours()}:${currentTime.getMinutes()}. This was done without onload.`

//Step 2 and 5 
const form = document.getElementById('complaintForm');
const emailInput = document.getElementById('emailBox');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (event) => {
    if (!emailInput.checkValidity()) {
      event.preventDefault(); // Prevent form submission
      emailError.style.display = 'block';
    } else {
        event.preventDefault();
        emailError.style.display = 'none';
        alert("You fool, now I have your email. I will now sign you up for a bunch of junk mail spam")

        const complaintElement = document.getElementById('complaintBox');
        const complaintElementValue = complaintElement.value;

        localStorage.setItem("Complaint", complaintElementValue)
        const localStorageElement = localStorage.getItem("Complaint");
        document.getElementById("mostRecentComplaint").innerHTML = `Most Recent Complaint was "${localStorage.getItem("Complaint")}"`;
    }
  });

//Step 3 (kinda) and 5 
const favoriteGamesElement = document.getElementById('favoriteGames');
favoriteGamesElement.addEventListener('mouseover' , ()=>{
    favoriteGamesElement.style.width = "1000px";
    favoriteGamesElement.style.height = "700px";
});

favoriteGamesElement.addEventListener('mouseout' , ()=>{
    favoriteGamesElement.style.width = "100px";
    favoriteGamesElement.style.height = "70px";
});

//Step 4
function timezoneClick() {
    const currentTimeMessageElement = document.getElementById('currentTimeMessage');
    const currentTime = new Date();
    currentTimeMessageElement.textContent = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}

//Step 5
document.getElementById("mostRecentComplaint").innerHTML = `Most Recent Complaint was "${localStorage.getItem("Complaint")}"`;
