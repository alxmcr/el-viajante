// FORM
const formNewCity = document.getElementById("form-new-city");
// INPUT
const ciudadInput = document.getElementById("ciudad-input");
const emailInput = document.getElementById("email-input");
// HELPS
const ciudadHelp = document.getElementById("ciudad-help");
const emailHelp = document.getElementById("email-help");

console.log(formNewCity);

// Event
formNewCity.addEventListener("submit", (event) => {
    // Cancel the default behavior :)
    event.preventDefault();

    // Values
    const ciudadValue = ciudadInput.value;
    const emailValue = emailInput.value;
    if (ciudadValue === "" || ciudadValue === undefined || ciudadValue === null) {
        ciudadHelp.classList.remove("d-none");
    } else {
        ciudadHelp.classList.add("d-none");
    }
    if (emailValue === "" || emailValue === undefined || emailValue === null) {
        emailHelp.classList.remove("d-none");
    } else {
        emailHelp.classList.add("d-none");
    }

    alert("Datos registrados!, gracias.");
});



ciudadHelp.addEventListener("keyup", (event) => {
    console.log("ciudadHelp", ciudadHelp);
    ciudadHelp.classList.add("d-none");
})

emailHelp.addEventListener("keyup", (event) => {
    emailHelp.classList.add("d-none");
})



// if (emailValue === "" || emailValue === undefined || emailValue === null) {
//     emailHelp.classList.remove("d-none");
// }

// console.log(ciudadValue);
// console.log(emailValue);

// JQuery
$('.collapse').collapse();