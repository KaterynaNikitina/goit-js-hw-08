import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messagelInput = document.querySelector('textarea');

const localObject = { email: '', message: '' };

feedbackForm.addEventListener("submit", onSubmitForm);

function onSubmitForm(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem('feedback-form-state');
}

feedbackForm.addEventListener('input', throttle(addLocalStorage, 500));

function addLocalStorage(evt) {
    localObject[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(localObject));
}

const dataObject = localStorage.getItem('feedback-form-state');

function insertWithLS(object) {
if (object && emailInput.name === 'email') {
    emailInput.value = JSON.parse(object).email;
}
if (object && messagelInput.name === 'message') {
    messagelInput.value = JSON.parse(object).message;
}
}
insertWithLS(dataObject);