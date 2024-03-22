function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    resetErrors();

    if (username === '') {
        displayError('usernameError', 'Username is required.');
        return;
    }

    if (email === '') {
        displayError('emailError', 'Email is required.');
        return;
    }

    if (!isValidEmail(email)) {
        displayError('emailError', 'Invalid email format.');
        return;
    }

    if (password === '') {
        displayError('passwordError', 'Password is required.');
        return;
    }

    if (password.length < 6) {
        displayError('passwordError', 'Password must be at least 6 characters long.');
        return;
    }

    if (confirmPassword === '') {
        displayError('confirmPasswordError', 'Please confirm your password.');
        return;
    }

    if (password !== confirmPassword) {
        displayError('confirmPasswordError', 'Passwords do not match.');
        return;
    }

    // If all validations pass, submit the form
    document.getElementById('registrationForm').submit();
}

function resetErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}

function displayError(elementId, errorMessage) {
    document.getElementById(elementId).textContent = errorMessage;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
