const form = document.getElementById("registration-form");
const username = document.getElementById("name");
const email = document.getElementById("Email");
const password = document.getElementById("password");
const submitButton = document.getElementById('submit-button');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Check if username is valid
    if (!isValidUsername(username.value)) {
        alert("Invalid username. Please enter a valid username contain more than 4 letters.");
        return;
    }

    // Check if email is valid
    if (!isValidEmail(email.value)) {
        alert("please enter email");
        return;
    }

    // Check if password is valid
    if (!isValidPassword(password.value)) {
        alert("password should be at least 8 characters long, containing at least one special symbol, one number, and one capital letter.");
        return;
    }

    // Submit the form if all fields are valid
    form.submit();
});

function isValidUsername(username) {
    // Check if the username is at least 4 characters long
    return username.length >= 4;
}

function isValidEmail(email) {
    // Check if the email address contains '@' and '.'
    return email.includes("@") && email.includes(".");
}

function isValidPassword(password) {
    // Check if the password is at least 8 characters long and contains at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}







function validateLoginForm() {
    const usernameInput = document.getElementById("loginname");
    const passwordInput = document.getElementById("loginpassword");
    
    if (usernameInput.value.trim() === '') {
      alert('Please enter a username.');
      return false;
    }
    
    if (passwordInput.value.trim() === '') {
      alert('Please enter a password.');
      return false;
    }

    const password = passwordInput.value;
    if (password !== 'admin') {
      alert('Incorrect password. Please try again.');
    }
    
    return true;
  }


