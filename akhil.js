function updateDisplay() {
    let degreeElement = document.getElementById("Display");
    degreeElement.textContent = "Hello!";
}

const sportForm = document.getElementById("sportForm");
const SPORTS = document.getElementById("SPORTS");
const FAVOURITE = document.getElementById("FAVOURITE");
const sportsConfirm = document.getElementById("sportsConfirm");
const sportsPass = document.getElementById("sportsPass");
const sportTableBody = document.getElementById("sportTableBody");

sportForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const SPORTSValue = SPORTS.value;
    const FAVOURITEValue = FAVOURITE.value;
    const sportsConfirmValue = sportsConfirm.checked;
    const sportsPassValue = sportsPass.value;

    console.log(SPORTSValue, FAVOURITEValue, sportsConfirmValue, sportsPassValue);

    // Validation
    if (sportsConfirmValue && sportsPassValue === "aaaa" && SPORTSValue !== "") {
        let newSport = `<tr>
                            <td style="border: solid 3px;">${SPORTSValue}</td>
                            <td>${FAVOURITEValue}</td>
                        </tr>`;
        sportTableBody.innerHTML += newSport;
    } else {
        alert("Incorrect details or missing input!");
    }
});
