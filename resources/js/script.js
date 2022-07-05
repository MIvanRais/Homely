const form = document.getElementById('form');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    // **to prevent the form from submitting because we want to validate our inputs
    e.preventDefault();

    // **call validateInputs() function
    validateInputs();
});

// **setError function
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// **setSuccess function
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// **isValidEmail function
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    // **to get the value of all the input fields
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    // **validation email 
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    // **validation message
    if(messageValue === '') {
        setError(message, 'Message is required');
    } else {
        setSuccess(message);
    }

};