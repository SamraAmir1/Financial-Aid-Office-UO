//login page
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple email validation (contains @)
    if (!username.includes("@")) {
        alert("Invalid email address");
        return false;
    }

    // Password length validation (at least 8 characters)
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    // If validation passes, redirect to FAOUO.html
    window.location.href = 'FAOUO.html';
    return false;
    
}