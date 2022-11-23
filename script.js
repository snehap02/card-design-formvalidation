const form = document.getElementById("form");
const pass1El = document.getElementById("pass1");
const pass2El = document.getElementById("pass2");
const message = document.getElementById("message");
const messageContainer = document.querySelector(".message-container");

let isValid = false;
let passMatch = false;

function validateForm(){
    //gives us the boolean value for validity
    isValid = form.checkValidity();

    //style a message for an error
    if(!isValid){
        message.textContent = 'Please fill out all the fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        messageContainer.style.backgroundColor = '#facdcd';
        return;
    }

    //check if the password match
    if(pass1El.value === pass2El.value){
        passMatch = true;
        pass1El.style.borderColor = 'green';
        pass2El.style.borderColor = 'green';
    }
    else{
        passMatch = false;
        message.textContent = 'Passwords do not match. Please try again';
        message.style.fontSize = '12px';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        messageContainer.style.backgroundColor = '#facdcd';
        return
    }

    //if form is valid and both the pass matches
    if(isValid && passMatch){
        message.textContent = 'Successfully Registered ✅';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
        messageContainer.style.backgroundColor = '#b1fabc';
    }
}

function storeData(){
    const userData = {
        name: form.name.value,
        phone: form.phone.value,
        mail: form.email.value,
        pass: form.password.value
    };
    console.log(userData);
}

function processData(e){
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.(Clicking on a "Submit" button, prevent it from submitting a form)
    e.preventDefault();

    validateForm();

    //Submit data if valid
    if(isValid && passMatch){
        storeData();
    }
}

form.addEventListener("submit", processData);