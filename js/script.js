console.log("El Viajero - Bienvenido!");
// FORM
const formNewCity = document.getElementById("form-new-city");
// INPUT
const ciudadInput = document.getElementById("ciudad-input");
const emailInput = document.getElementById("email-input");
// HELPS
const ciudadHelp = document.getElementById("ciudad-help");
const emailHelp = document.getElementById("email-help");
const resultHelp = document.getElementById("result-help");
// BUTTON
const btnRegisterCity = document.getElementById("btn-register-city");
const btnMoreCities = document.getElementById("btn-more-cities");

// Event Listeners: Form
formNewCity.addEventListener("submit", sendRequestCiudad);
formNewCity.addEventListener("change", checkForm);
// Event Listeners: Inputs
ciudadInput.addEventListener("change", (event) => checkCiudad())
emailInput.addEventListener("change", (event) => checkEmail())
// Event: Click
btnMoreCities.addEventListener("click", (event) => $('.collapse').collapse());

function checkForm() {
    // Values
    const isCiudadOK = checkCiudad();
    const isEmailOK = checkEmail();

    if (isCiudadOK && isEmailOK) {
        btnRegisterCity.classList.remove("disable");
        btnRegisterCity.removeAttribute("disabled");
    } else {
        btnRegisterCity.classList.add("disable");
        btnRegisterCity.setAttribute("disabled", true);
        resultHelp.classList.add("invisible");
    }
}

function sendRequestCiudad(event) {
    // Cancel the default behavior :)
    event.preventDefault();
    // Visible help
    resultHelp.classList.remove("invisible");
    // Reset
    formNewCity.reset();
    // Disabled button
    btnRegisterCity.classList.add("disable");
    btnRegisterCity.setAttribute("disabled", true);
}

function checkCiudad() {
    let isOKCiudad = false;
    const ciudadValue = ciudadInput.value;
    const isInvalidCiudad = ciudadValue === "" || ciudadValue === undefined || ciudadValue === null;
    if (isInvalidCiudad) {
        ciudadHelp.classList.remove("d-none");
    } else {
        ciudadHelp.classList.add("d-none");
        isOKCiudad = true;
    }
    return isOKCiudad;
}

function checkEmail() {
    let isOKEmail = false;
    const emailValue = emailInput.value;
    const isInvalidEmail = emailValue === "" || emailValue === undefined || emailValue === null;
    if (isInvalidEmail) {
        emailHelp.classList.remove("d-none");
    } else {
        emailHelp.classList.add("d-none");
        isOKEmail = true;
    }
    return isOKEmail;
}

