
let usernameInput = document.querySelector('#username').addEventListener('input', function(){
    if(/^\s/.test(this.value)){
        this.value = '';
    }
});

let emailInput = document.querySelector('#email').addEventListener('input', function(){
    this.value = this.value.replace(/\s/g,'');
})

let passwordInput = document.querySelector('#password').addEventListener('input', function(){
    this.value = this.value.replace(/\s/g,'');
})


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    let isValid = true;

    // Validate Username
    const usernameInput = document.getElementById('username');
    const usernameValue = usernameInput.value.trim();
  
    if (usernameValue === "" || usernameInput.value.startsWith(" ")) {
        usernameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        usernameInput.classList.remove('is-invalid');
    }

    // Validate Email
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue) || emailInput.value.startsWith(" ")) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        emailInput.classList.remove('is-invalid');
    }

    // Validate Password
    const passwordInput = document.getElementById('password');
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(passwordInput.value.trim())) {
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else {
        passwordInput.classList.remove('is-invalid');
    }

    // Validate Confirm Password
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        confirmPasswordInput.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPasswordInput.classList.remove('is-invalid');
    }


    // If form is valid, show success alert
    if (isValid) {
        alert("Registration successful!");
        // Clear the input fields
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
        
    }
});