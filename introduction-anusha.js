// JavaScript for the form handling

// Listen for form submission
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from being submitted traditionally

    // Get form input values
    const hobbyName = document.getElementById('hobbyName').value;
    const hobbyLength = document.getElementById('hobbyLength').value;
    const hobbyWhy = document.getElementById('hobbyWhy').value;
    const hobbyConfirm = document.getElementById('hobbyConfirm').checked;
    const hobbyPass = document.getElementById('hobbyPass').value;

    // Validate inputs
    if (!hobbyName || !hobbyLength || !hobbyWhy) {
        alert('Please fill out all fields.');
        return;
    }

    // Check if the user has confirmed to add the record
    if (!hobbyConfirm) {
        alert('Please confirm that you would like to add this record.');
        return;
    }

    // Password check (replace 'yourPassword' with the actual password)
    if (hobbyPass !== 'yourPassword') {
        alert('Invalid password! Record not added.');
        return;
    }

    // Add the new record to the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${hobbyName}</td>
        <td>${hobbyLength}</td>
        <td>${hobbyWhy}</td>
    `;
    
    // Append the new row to the table body
    document.querySelector('table tbody').appendChild(newRow);

    // Show success message
    alert('New hobby record added successfully!');

    // Clear the form fields
    document.querySelector('form').reset();
});
