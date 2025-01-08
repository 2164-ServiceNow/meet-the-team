const imageElement = document.getElementById("timothy-sung-image")

function updateTimothySungImage() {
        let curSrc = imageElement.getAttribute("src")
        if (curSrc === "sung-images/IMG_2501 (1).jpg") {
            imageElement.setAttribute("src", "sung-images/Artfight 2024 Ally.jpg")
        } else if (curSrc === "sung-images/Artfight 2024 Ally.jpg") {
            imageElement.setAttribute("src", "sung-images/Artfight 2024 Rodge R.jpg")
        } else if (curSrc === "sung-images/Artfight 2024 Rodge R.jpg") {
            imageElement.setAttribute("src", "sung-images/Artfight 2024 TEN.gif")
        } else if (curSrc === "sung-images/Artfight 2024 TEN.gif") {
            imageElement.setAttribute("src", "sung-images/IMG_2501 (1).jpg")
        }
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        updateTimothySungImage();
    }
});

imageElement.addEventListener('click', (event) => {
    event.preventDefault();
    updateTimothySungImage();
});

imageElement.addEventListener('mouseover', (event) => {
    event.preventDefault();
    imageElement.style.opacity = 0.8;
});

imageElement.addEventListener('mouseout', (event) => {
    event.preventDefault();
    imageElement.style.opacity = 1;
});


const messageElement = document.getElementById('dynamic-message');
const currentTime = new Date();
messageElement.textContent = `The current time is: ${currentTime.toLocaleTimeString()}`;

const resumeForm = document.getElementById("resume_form")
const positionInput = document.getElementById("position_input")
const companyInput = document.getElementById("company_input")
const startDateInput = document.getElementById("start_date_input")
const endDateInput = document.getElementById("end_date_input")
const resumeCheck = document.getElementById("resume_check")
const resumePass = document.getElementById("resume_pass")
const formError = document.getElementById("form-error")
const resumeTableBody = document.getElementById("resume_table_body")

function addStoredTableEntry(position, company, start, end) {
    let newExperience = `<tr>
                            <td><marquee>${position}</marquee></td>
                            <td><marquee>${company}</marquee></td>
                            <td><marquee>${start}</marquee></td>
                            <td><marquee>${end}</marquee></td>
                        </tr>`// make new table entry
    resumeTableBody.innerHTML += newExperience
}

if (!localStorage.getItem("tableEntries")) {
    localStorage.setItem("tableEntries", JSON.stringify([]));
}
else {
    storedEntries = JSON.parse(localStorage.getItem("tableEntries"));
    for (const entry of storedEntries) {
        addStoredTableEntry(entry[0], entry[1], entry[2], entry[3])
    }
}

let tableEntries = JSON.parse(localStorage.getItem("tableEntries"));

resumeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    /*
        Step 1: Determine values in each input
        Step 2: We need to check conditions for the resumeCheck is checked and the resumePass matches the password (which is hardcoded)
        Step 3: Update the table to contain the new record
    */
    const positionInputValue = positionInput.value
    const companyInputValue = companyInput.value
    const startDateInputValue = startDateInput.value
    const endDateInputValue = endDateInput.value
    const resumeCheckValue = resumeCheck.checked 
    const resumePassValue = resumePass.value

    if (resumeCheckValue && resumePassValue === "1234") {
        // Utilize String literal ${} to substitute variables in a string
        addStoredTableEntry(positionInputValue, companyInputValue, startDateInputValue, endDateInputValue)
        formError.style.display = 'none'
        tableEntries.push([positionInputValue, companyInputValue, startDateInputValue, endDateInputValue]); // Add new entry to the array
        localStorage.setItem("tableEntries", JSON.stringify(tableEntries));
    } else {
        formError.style.display = 'flex'
    }
});

function resetTable() {
    localStorage.clear(); // Clear all data from localStorage
    location.reload(); // Refresh the page
}
