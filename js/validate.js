

function validate() {
    const regrexNumber = /[0-9]/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const form = document.querySelector('#form-contact')
    const listInput = document.querySelectorAll('.input-contact')
    const validatePhone = (item) => {
        return !!(item.value.match(regrexNumber))
    }
    const validateEmail = (item) => {
        return !!(item.value.match(regexEmail))
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let submit = true;
        listInput.forEach(item => {

            if (!item.value) {
                document.querySelector(`.${item.name}-error`).style.display = "block";
                submit = false;
            }
            else {

                if (item.name == "phone") {
                    const display = validatePhone(item) ? "none" : "block"

                    document.querySelector(".phone-invalid-error").style.display = display
                }
                if (item.name == "email") {
                    const display = validatePhone(item) ? "none" : "block"
                    document.querySelector(".email-invalid-error").style.display = display;
                }
                document.querySelector(`.${item.name}-error`).style.display = "none";
            }
        })

        return submit

    })
}

function load() {
    validate()
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);