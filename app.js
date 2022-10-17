const form = document.getElementById('form');
const holderName = document.getElementById('holderName');
const cardNumber = document.getElementById('cardNumber');
const expDate = document.getElementById('expDate');
const cvc = document.getElementById('cvc');

const nameError = document.getElementById('name-error');
const numberError = document.getElementById('number-error');
const infoError = document.getElementById('info-error');

form.addEventListener('submit', (e) => {
    let nameMessages = [];
    let numberMessages = [];
    let infoMessages = [];

    if (holderName.value === '' || holderName === null) {
        nameMessages.push('Name is required');
    }

    if (nameMessages.length > 0) {
        e.preventDefault();
        nameError.innerText = nameMessages.join(', ');
        holderName.style.borderColor = "red";
    }

    if (cardNumber.value.length <= 15 ) {
        numberMessages.push('Wrong format, min. 16 numbers');
    }

    if (numberMessages.length > 0) {
        e.preventDefault();
        numberError.innerText = numberMessages.join(', ');
        cardNumber.style.borderColor = "red";
    }

    if (expDate.value === '' || cvc.value === '') {
        infoMessages.push('Cannot be blank');
    }

    if (infoMessages.length > 0) {
        e.preventDefault();
        infoError.innerText = infoMessages.join(', ');
        expDate.style.borderColor = "red";
        cvc.style.borderColor = "red";
    }
    
})

