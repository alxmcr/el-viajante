console.log("El Viajero - Bienvenido!");
// FORM
const formNewCity = document.getElementById("form-new-city");
// INPUT
const ciudadInput = document.getElementById("ciudad-input");
const emailInput = document.getElementById("email-input");
// HELPS
const ciudadHelp = document.getElementById("ciudad-help");
const emailHelp = document.getElementById("email-help");
// BUTTON
const btnRegisterCity = document.getElementById("btn-register-city");

// Event Listeners: Form
formNewCity.addEventListener("submit", sendRequestCiudad);
// Event Listeners: Inputs
ciudadInput.addEventListener("change", (event) => checkCiudad())
emailInput.addEventListener("change", (event) => checkEmail())

function sendRequestCiudad(event) {
    // Cancel the default behavior :)
    event.preventDefault();
    // Values
    const isCiudadOK = checkCiudad();
    const isEmailOK = checkEmail();

    if (isCiudadOK && isEmailOK) {
        btnRegisterCity.classList.remove("disable");
        btnRegisterCity.removeAttribute("disabled");
        alert("Datos registrados!, gracias.");
    } else {
        btnRegisterCity.classList.add("disable");
        btnRegisterCity.setAttribute("disabled", true);
    }
}

function checkCiudad() {
    let isOKCiudad = false;
    const ciudadValue = ciudadInput.value;
    const isValidCiudad = ciudadValue === "" || ciudadValue === undefined || ciudadValue === null;
    if (isValidCiudad) {
        ciudadHelp.classList.remove("d-none");
        isOKCiudad = true;
    } else {
        ciudadHelp.classList.add("d-none");
    }
    return isOKCiudad;
}

function checkEmail() {
    let isOKEmail = false;
    const emailValue = emailInput.value;
    const isValidEmail = emailValue === "" || emailValue === undefined || emailValue === null;
    if (isValidEmail) {
        emailHelp.classList.remove("d-none");
        isOKEmail = true;
    } else {
        emailHelp.classList.add("d-none");
    }
    return isOKEmail;
}

// JQuery
$('.collapse').collapse();