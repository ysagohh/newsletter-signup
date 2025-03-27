const formCard = document.getElementById('form-container');
const subscribeForm = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');
const emailErrorMessage = document.getElementById('email-error');

const successCard = document.getElementById('success-container');
const dismissBtn = document.getElementById('btn-dismiss');

function subscribeHandler(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    validateEmail(data.email);
}

function validateEmail(email) {
    const isValidEmail = /^\S+@\S+$/g;
    
    if (!email || !isValidEmail.test(email)) {
        emailInput.classList.add('error');
        emailErrorMessage.innerText = 'Valid email required';
    } else {
        submitForm(email);
    }
}

function submitForm(data) {
    console.log(data)
    successCard.classList.remove('hidden');
    formCard.classList.add('hidden');
}

function dismissBtnHandler() {
    subscribeForm.reset();
    emailInput.classList.remove('error');
    emailErrorMessage.innerText = '';
    formCard.classList.remove('hidden');
    successCard.classList.add('hidden');
}

subscribeForm.addEventListener('submit', subscribeHandler);
dismissBtn.addEventListener('click', dismissBtnHandler);