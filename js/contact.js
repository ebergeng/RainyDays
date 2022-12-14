import { is_number, is_string, check_lenght, check_validateion_list } from "./functions.js";

const form = document.querySelector(".contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const text = document.querySelector("#text-area");

const nameLabel = document.querySelector(".name-label");
const emailLabel = document.querySelector(".email-label");
const textLabel = document.querySelector(".text-label");


function validate() {
    event.preventDefault()
    const validateionList = [false, false, false]

    /**************************************/
    /* checking fullname */
    if(check_lenght(name.value, 2)) {
        if(is_string(name.value)) {
            correct(nameLabel)
            validateionList[0] = true
        }
        else {
            display_error(nameLabel)
            validateionList[0] = false
        }
    }
    else{
        display_error(nameLabel)
        validateionList[0] = false
    }
    /**************************************/
    /* checking email */

    /**************************************/
    /* checking text */
    if(check_lenght(text.value, 5)) {
        if(is_string(text.value)) {
            correct(textLabel)
            validateionList[2] = true
        }
        else {
            display_error(textLabel)
            validateionList[2] = false
        }
    }
    else{
        display_error(textLabel)
        validateionList[2] = false
    }
}

function display_error(label) {
    label.style.color = "red"
}

function correct(label) {
    label.style.color = "#113340"
}

form.addEventListener("submit", validate)