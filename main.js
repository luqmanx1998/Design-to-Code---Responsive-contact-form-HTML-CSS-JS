const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const firstNameInvalid = document.querySelector("#first-name + .invalid-input");
const lastNameInvalid = document.querySelector("#last-name + .invalid-input");
const emailInvalid = document.querySelector("#email + .invalid-input");
const queryTypeInvalid = document.querySelector(".radio-options + .invalid-input");
const messageInvalid = document.querySelector("#message + .invalid-input");
const checkboxInvalid = document.querySelector(".checkbox-container + .invalid-input");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const queryTypeValue = document.querySelector("input[type='radio']:checked");
    const messageValue = message.value;
    const checkboxChecked = checkbox.checked;  

    let formSuccess = true;

    // First Name Validation
    if (!firstNameValue) {
        formSuccess = false;
        firstNameInvalid.classList.add("show-error");
        firstName.classList.add("invalid-highlight");
    } else {
        firstNameInvalid.classList.remove("show-error");
        firstName.classList.remove("invalid-highlight");
    }

    // Last Name Validation
    if (!lastNameValue) {
        formSuccess = false;
        lastNameInvalid.classList.add("show-error");
        lastName.classList.add("invalid-highlight");
    } else {
        lastNameInvalid.classList.remove("show-error");
        lastName.classList.remove("invalid-highlight");
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue || !emailRegex.test(emailValue)) {
        formSuccess = false;
        emailInvalid.classList.add("show-error");
        email.classList.add("invalid-highlight");
    } else {
        emailInvalid.classList.remove("show-error");
        email.classList.remove("invalid-highlight");
    }

    // Query Type Validation
    if (!queryTypeValue) {
        formSuccess = false;
        queryTypeInvalid.classList.add("show-error");
    } else {
        queryTypeInvalid.classList.remove("show-error");
    }

    // Message Validation
    if (!messageValue) {
        formSuccess = false;
        messageInvalid.classList.add("show-error");
        message.classList.add("invalid-highlight");
    } else {
        messageInvalid.classList.remove("show-error");
        message.classList.remove("invalid-highlight");
    }

    // Checkbox Validation
    if (!checkboxChecked) {
        formSuccess = false;
        checkboxInvalid.classList.add("show-error");
    } else {
        checkboxInvalid.classList.remove("show-error");
    }

    // Success Handling
    if (formSuccess) {
        successMessage.classList.add("show-success-message");
        
        // Clear the form fields (optional)
        form.reset();

        // Set a timeout to remove the success message after 3 seconds
        setTimeout(() => {
            successMessage.classList.remove("show-success-message");
        }, 3000); // Adjust time as needed
    }
});

