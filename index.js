document.getElementById('salesforceCaseForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const formData = {
        subject: document.getElementById('caseSubject').value,
        description: document.getElementById('caseDescription').value
    };

    // Call the function to send data to your server
    sendCaseDataToServer(formData);
});

function sendCaseDataToServer(formData) {
    fetch('/path/to/your/server/endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success response
        // Maybe display a success message or clear the form
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors here, such as by displaying an error message to the user
    });
}