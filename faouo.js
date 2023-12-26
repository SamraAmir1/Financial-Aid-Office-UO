// FAQs 
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {

        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

    })
})


// contact 
function submitForm(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Optionally, you can perform actions with the form data (e.g., send to server)

    // Redirect the user to the thank you page after submission
    window.location.href = `thankmsg.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
}


// thank msg 
document.addEventListener('DOMContentLoaded', function () {
    // Extract parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || '';

    // Display the name in the thank you message
    document.getElementById('thankYouName').textContent = name;
});


//login page
function validateForm() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return false;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters.');
        return false;
    }

    // Assume authentication is successful for demonstration purposes
    // In a real-world scenario, you would perform authentication on the server
    // and redirect based on the result    
    // Redirect to the home page
    window.location.href = 'FAOUO.html';

    return false; // Prevents the form from submitting (we're manually redirecting)
}


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
            displayError('Please enter a valid Pakistani contact number.');
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


// apply form
function validateForm() {
    // Reset error messages
    clearErrors();

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        displayError('nameError', 'Please enter your name.');
        return false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (email === '' || !isValidEmail(email)) {
        displayError('emailError', 'Please enter a valid email address.');
        return false;
    }

    // Validate Password
    const password = document.getElementById('password').value.trim();
    if (password === '' || password.length < 8) {
        displayError('passwordError', 'Password must be at least 8 characters.');
        return false;
    }

    // Validate CNIC
    const cnic = document.getElementById('cnic').value.trim();
    if (cnic === '' || !isValidCNIC(cnic)) {
        displayError('cnicError', 'Please enter a valid CNIC.');
        return false;
    }

    // Validate Enrollment Year
    const enrollmentYear = document.getElementById('enrollment').value.trim();
    if (enrollmentYear === '' || isNaN(enrollmentYear) || enrollmentYear < 0) {
        displayError('enrollmentError', 'Please enter a valid enrollment year.');
        return false;
    }

    // Validate Registration Number
    const rollNo = document.getElementById('rollNo').value.trim();
    if (rollNo === '') {
        displayError('rollNoError', 'Please enter your registration number.');
        return false;
    }

    // Validate CGPA
    const cgpa = document.getElementById('cgpa').value.trim();
    if (cgpa === '' || isNaN(cgpa) || cgpa < 0 || cgpa > 4) {
        displayError('cgpaError', 'Please enter a valid CGPA.');
        return false;
    }

    return true;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function displayError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCNIC(cnic) {
    const cnicRegex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;
    return cnicRegex.test(cnic);
}