const form = document.getElementById('heroSignup-form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
// error message element
let fnameErrorMsg = createParaElement();
let lnameErrorMsg = createParaElement();
let emailErrorMsg = createParaElement();
let passwordErrorMsg = createParaElement();
// create para element
function createParaElement() {
  let paraElement = document.createElement('p');
  paraElement.className = 'error-message';
  return paraElement;
}

//form submit event
form.addEventListener('submit', validateForm);

//validate form
function validateForm(e) {
  e.preventDefault();
  let valid = true;

  let fnameValue = trimInputValue(fname);
  //check fname value
  if (fnameValue === null || fnameValue === '') {
    //show error and error icon
    showError(fname, fnameErrorMsg, 'First Name cannot be empty');
    valid = false;
  } else {
    //remove error and error icon
    removeError(fname, fnameErrorMsg);
  }

  let lnameValue = trimInputValue(lname);
  //check lname value
  if (lnameValue === null || lnameValue === '') {
    //show error and error icon
    showError(lname, lnameErrorMsg, 'Last Name cannot be empty');
    valid = false;
  } else {
    //remove error and error icon
    removeError(lname, lnameErrorMsg);
  }

  const emailRegExp = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
  let emailValue = trimInputValue(email);
  //check email value
  if (emailValue === null || emailValue === '') {
    //show error and error icon
    showError(email, emailErrorMsg, 'Email cannot be empty');
    valid = false;
  } else if (emailRegExp.test(emailValue) == true) {
    removeError(email, emailErrorMsg);
  } else {
    showError(email, emailErrorMsg, 'Looks like this is not an Email');
    valid = false;
  }

  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const oneNumber = /[0-9]/g;
  let passwordValue = trimInputValue(password);
  //check password value
  if (passwordValue === null || passwordValue === '') {
    //show error and error icon
    passwordErrorMsg.className = 'error-message';
    showError(password, passwordErrorMsg, 'Password cannot be empty');
    valid = false;
  } else if (!lowerCaseLetters.test(passwordValue)) {
    passwordErrorMsg.className = 'error-message';
    showError(password, passwordErrorMsg, 'Password must contain a Lowercase letter');
    valid = false;
  } else if (!upperCaseLetters.test(passwordValue)) {
    passwordErrorMsg.className = 'error-message';
    showError(password, passwordErrorMsg, 'Password must contain a Uppercase letter');
    valid = false;
  } else if (!oneNumber.test(passwordValue)) {
    passwordErrorMsg.className = 'error-message';
    showError(password, passwordErrorMsg, 'Password must contain a Number');
    valid = false;
  } else if (passwordValue.length < 4) {
    passwordErrorMsg.className = 'error-message';
    showError(password, passwordErrorMsg, 'Password should at least 4 characters');
    valid = false;
  } else {
    removeError(password, passwordErrorMsg);
  }

  if (valid) {
    form.reset();
    
  }
}

// password focus event
password.addEventListener('focus', dPasswordCondition);
function dPasswordCondition() {
  passwordErrorMsg.innerHTML = 'Password must be 4 characters long, Including Uppercase and Lowercase letter, as well as one Number.';
  passwordErrorMsg.className = 'd-pwd-conditions';
  const passwordErrorIcone = password.nextElementSibling;
  passwordErrorIcone.insertAdjacentElement('afterend',passwordErrorMsg);
}

//remove error
function removeError(field, errorElement) {
  errorElement.remove();
  field.classList.remove('invalid-input');
  field.nextElementSibling.classList.remove('d-error-icon');
}

//show error
function showError(field, errorElement, errorMsg) {
  errorElement.innerHTML = errorMsg;
  field.nextElementSibling.insertAdjacentElement('afterend', errorElement);
  field.classList.add('invalid-input');
  //display error icon
  field.nextElementSibling.classList.add('d-error-icon');
}

// trim input field value
function trimInputValue(field) {
  let fieldValue = field.value.trim();
  return fieldValue;
}
