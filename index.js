// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select the forms
    const forms = document.querySelectorAll('.survey-form');
    
    forms.forEach(form => {
        // Listen for the form submission event
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting

            // Hide the form after submission
            form.style.display = 'none';

            // Create a thank you message
            const thankYouMessage = document.createElement('div');
            thankYouMessage.textContent = "Thank you for submitting your response!";
            thankYouMessage.style.textAlign = 'center';
            thankYouMessage.style.fontSize = '1.5rem';
            thankYouMessage.style.fontWeight = 'bold';
            thankYouMessage.style.color = '#007BFF';

            // Append the thank you message to the body or anywhere you want
            document.body.appendChild(thankYouMessage);
        });
    });
});
