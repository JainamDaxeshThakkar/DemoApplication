document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('formMessage').textContent = "Passwords do not match.";
        document.getElementById('formMessage').style.color = "red";
        return;
    }

    // Save user data
    const user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
    };

    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to task manager page
    window.location.href = './taskmanager.html';
});
