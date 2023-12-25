// FAQs 
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {
        
        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
        
    })
})


// Sign in
function signIn() {
    // Perform authentication logic here
    // For simplicity, let's assume a successful login for any credentials
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You should perform actual authentication here (e.g., send credentials to a server)
    // For now, let's assume a successful login for any credentials
    const isAuthenticated = true;

    if (isAuthenticated) {
        // Redirect to the home screen or any desired page
        window.location.href = 'FAOUO.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}


// contact 
function submitForm(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Optionally, you can perform actions with the form data (e.g., send to server)

    // Redirect the user to the thank you page after submission
    window.location.href = `thank.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
}


// thank
document.addEventListener('DOMContentLoaded', function () {
    // Extract parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || '';

    // Display the name in the thank you message
    document.getElementById('thankYouName').textContent = name;
});
