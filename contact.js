// contact us 
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        let isValid = true;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const contactInput = document.getElementById('contact');
        const programmeSelect = document.getElementById('programme');
        const messageTextarea = document.getElementById('message');
        const errorContainer = document.getElementById('errorContainer');

        // Reset error messages
        errorContainer.innerHTML = '';

        // Validation for name (no numbers)
        if (!isValidName(nameInput.value)) {
            displayError('Please enter a valid name without numbers.');
            isValid = false;
        }
        // Validation for email
        if (!isValidEmail(emailInput.value)) {
            displayError('Please enter a valid email address.');
            isValid = false;
        }

        // Validation for contact number (only digits and Pakistani format)
        if (!isValidContact(contactInput.value)) {
            displayError('Please enter a valid contact number.');
            isValid = false;
        }

        // Validation for programme selection
        if (programmeSelect.value === '_select') {
            displayError('Please select a programme.');
            isValid = false;
        }

        // Validation for message (non-empty)
        if (messageTextarea.value.trim() === '') {
            displayError('Please enter a message.');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function isValidName(name) {
        const namePattern = /^[^0-9]+$/;
        return namePattern.test(name);
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isValidContact(contact) {
        // Check if it's a valid Pakistani number (11 digits starting with 03)
        const contactPattern = /^03\d{9}$/;
        return contactPattern.test(contact);
    }

    function displayError(message) {
        const errorElement = document.createElement('p');
        errorElement.textContent = message;
        errorContainer.appendChild(errorElement);
    }
});

function submitForm(event) {
    event.preventDefault();

    // Optionally, you can perform actions with the form data (e.g., send to server)

    // Redirect the user to the thank you page after submission
    window.location.href = `thank.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
}