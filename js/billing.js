import { is_number } from "../js/functions.js";
import { is_string } from "../js/functions.js";
import { check_lenght } from "../js/functions.js";
import { check_validateion_list } from "../js/functions.js";
/* billing info */
const form = document.querySelector(".billing-form");
const fullName = document.querySelector("#name");
const adress = document.querySelector("#adress");
const zip = document.querySelector(".zip");
const city = document.querySelector(".city");

/* card info */
const cardNum = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const cvv = document.querySelector(".cvv");
const cardDate = document.querySelector(".date");

/* labeles */
const fullNameLabel = document.querySelector(".name-label");
const adressLabel = document.querySelector(".adress-label");
const zipLabel = document.querySelector(".zip-label");
const cityLabel = document.querySelector(".city-label");
const cardNumLabel = document.querySelector(".card-number-label");
const cardNameLabel = document.querySelector(".card-name-label");
const cardDateLabel = document.querySelector(".date-label");
const cvvLabel = document.querySelector(".cvv-label");

const cardInfo = document.querySelector(".card-info");
const errorMsg = document.querySelector(".error-msg");
const billingSuccsess = document.querySelector(".billing-succsess");


function validate() {
    event.preventDefault()
    const validateionList = [false, false, false, false, false, false, false, false]
    /* checking card_numer */
    if(check_lenght(cardNum.value, 16, 16)) {
        if(is_number(cardNum.value)) {
            correct(cardNumLabel)
            validateionList[0] = true
        }
        else {
            display_error(cardNumLabel)
            validateionList[0] = false
        }
    }
    else  {
        display_error(cardNumLabel)
        validateionList[0] = false
    }
    /**************************************/
    /* checking fullname */
    if(check_lenght(fullName.value, 2)) {
        if(is_string(fullName.value)) {
            correct(fullNameLabel)
            validateionList[1] = true
        }
        else {
            display_error(fullNameLabel)
            validateionList[1] = false
        }
    }
    else{
        display_error(fullNameLabel)
        validateionList[1] = false
    }
    /**************************************/
    /* checking adress */
    if(check_lenght(adress.value, 5)) {
        correct(adressLabel)
        validateionList[2] = true

    }
    else{
        display_error(adressLabel)
        validateionList[2] = false
    }
    /**************************************/
    /* checking zip code */
    if(check_lenght(zip.value, 4, 4)) {
        if(is_number(zip.value)) {
            correct(zipLabel)
            validateionList[3] = true
        }
        else {
            display_error(zipLabel)
            validateionList[3] = false
        }
    }
    else  {
        display_error(zipLabel)
        validateionList[3] = false
    }
    /**************************************/
    /* checking city */
    if(check_lenght(city.value, 2)) {
        if(is_string(city.value)) {
            correct(cityLabel)
            validateionList[4] = true
        }
        else {
            display_error(cityLabel)
            validateionList[4] = false
        }
    }
    else{
        display_error(cityLabel)
        validateionList[4] = false
    }
    /**************************************/
    /* checking cardname */
    if(check_lenght(cardName.value, 2)) {
        if(is_string(cardName.value)) {
            correct(cardNameLabel)
            validateionList[5] = true
        }
        else {
            display_error(cardNameLabel)
            validateionList[5] = false
        }
    }
    else{
        display_error(cardNameLabel)
        validateionList[5] = false
    }
    /**************************************/
    /* checking cvv code */
    if(check_lenght(cvv.value, 3, 3)) {
        if(is_number(cvv.value)) {
            correct(cvvLabel)
            validateionList[6] = true
        }
        else {
            display_error(cvvLabel)
            validateionList[6] = false
        }
    }
    else  {
        display_error(cvvLabel)
        validateionList[6] = false
    }
    /**************************************/
    /* checking date */
    if(cardDate.value) {
        correct(cardDateLabel)
        validateionList[7] = true
    }
    else {
        display_error(cardDateLabel)
        validateionList[7] = false
    }
    /**************************************/
    if(check_validateion_list(validateionList)) {
        form.style.display = "none"
        billingSuccsess.style.display = "flex"

    }
}

function display_error(label) {
    label.style.color = "red"
    cardInfo.style.marginBottom  = "130px"
    errorMsg.style.display = "flex"
}

function correct(label) {
    label.style.color = "#113340"
}

form.addEventListener("submit", validate)

