// scholarship apply form
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

    window.location.href = 'thxform.html';
    return false;

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


function validateForm() {

    // Redirect to the thanksform.html page after successful form submission
    window.location.href = 'thxform.html';

    return false; // Prevents the form from submitting (we're manually redirecting)
}