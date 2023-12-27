// thank msg 
document.addEventListener('DOMContentLoaded', function () {
    // Extract parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || '';

    // Display the name in the thank you message
    document.getElementById('thankYouName').textContent = name;
});