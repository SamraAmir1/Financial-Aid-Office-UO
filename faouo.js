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

//login page
function validateForm() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return false;
    }

    // Assume authentication is successful for demonstration purposes
    // In a real-world scenario, you would perform authentication on the server
    // and redirect based on the result    
    // Redirect to the home page
    window.location.href = 'FAOUO.html';

    return false; // Prevents the form from submitting (we're manually redirecting)
}
