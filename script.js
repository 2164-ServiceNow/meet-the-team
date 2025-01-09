const hobbyForm = document.getElementById("hobbyForm");
const hobbyName = document.getElementById("hobbyName");
const hobbyLength = document.getElementById("hobbyLength");
const hobbyWhy = document.getElementById("hobbyWhy");
const hobbyConfirm = document.getElementById("hobbyConfirm");
const hobbyPass = document.getElementById("hobbyPass");
const hobbyTableBody = document.getElementById("hobbyTableBody");

hobbyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const hobbyNameValue = hobbyName.value.trim();
    const hobbyLengthValue = hobbyLength.value.trim();
    const hobbyWhyValue = hobbyWhy.value.trim();
    const hobbyConfirmValue = hobbyConfirm.checked;
    const hobbyPassValue = hobbyPass.value.trim();

    if (!hobbyNameValue || !hobbyLengthValue || !hobbyWhyValue) {
        alert("Please fill in all fields.");
        return;
    }

    if (!hobbyConfirmValue) {
        alert("Please confirm you want to add this hobby.");
        return;
    }

    if (hobbyPassValue !== "amruth") {
        alert("Incorrect password. Please try again.");
        return;
    }

    // Add new hobby to the table
    const newHobby = `
        <tr>
            <td>${hobbyNameValue}</td>
            <td>${hobbyLengthValue}</td>
            <td>${hobbyWhyValue}</td>
        </tr>
    `;

    hobbyTableBody.innerHTML += newHobby;

    // Clear form fields
    hobbyForm.reset();
    alert("Hobby added successfully!");
});
