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


const backBtn = document.querySelectorAll("#back");
const continueBtn = document.querySelectorAll("#continue"); 
const singInBtn = document.querySelector("#sign-in");

const stage1 = document.querySelector(".stage1");
const stage2 = document.querySelector(".stage2");
const stage3 = document.querySelector(".stage3");
const stage4 = document.querySelector(".stage4");



let count = 0;

if(count === 0) {
    stage1.style.display = "flex"
}
else if(count === 1) {
    stage2.style.display = "flex"
}
else if(count === 2) {
    stage3.style.display = "flex"
}

backBtn.forEach(function(btn) {
    btn.addEventListener("click",function() {
        event.preventDefault()
        if(count === 1) {
            count -= 1;
            stage2.style.display = "none"
            stage1.style.display = "flex"
        }
        else if(count === 2){
            count -= 1;
            stage3.style.display = "none"
            stage2.style.display = "flex"
        }
    })
})

continueBtn.forEach(function(btn) {
    btn.addEventListener("click",function() {
        event.preventDefault()
        if(count === 0) {
            count += 1;
            stage1.style.display = "none"
            stage2.style.display = "flex"
        }
        else if(count === 1){  
            if(vlaidate_billing_info()) {
                count += 1;
                stage1.style.display = "none"
                stage2.style.display = "none"
                stage3.style.display = "flex"
            }
        }
        else if(count === 2){  
            if(vlaidate_card_info()) {
                stage1.style.display = "none"
                stage2.style.display = "none"
                stage3.style.display = "none"
                stage4.style.display = "flex"
            }
        }
    })
})

singInBtn.addEventListener("click", function() {
    event.preventDefault()
    stage1.style.display = "none"
    stage2.style.display = "none"
    stage3.style.display = "flex"
    count = 2
})

function vlaidate_billing_info() {
    const validateionList = [false, false, false, false]
    /* checking fullname */
    if(check_lenght(fullName.value, 2)) {
        if(is_string(fullName.value)) {
            correct(fullNameLabel)
            validateionList[0] = true
        }
        else {
            display_error(fullNameLabel)
            validateionList[0] = false
        }
    }
    else{
        display_error(fullNameLabel)
        validateionList[0] = false
    }
    /**************************************/
    /* checking adress */
    if(check_lenght(adress.value, 5)) {
        correct(adressLabel)
        validateionList[1] = true
    }
    else{
        display_error(adressLabel)
        validateionList[1] = false
    }
    /**************************************/
    /* checking zip code */
    if(check_lenght(zip.value, 4, 4)) {
        if(is_number(zip.value)) {
            correct(zipLabel)
            validateionList[2] = true
        }
        else {
            display_error(zipLabel)
            validateionList[2] = false
        }
    }
    else  {
        display_error(zipLabel)
        validateionList[2] = false
    }
    /**************************************/
    /* checking city */
    if(check_lenght(city.value, 2)) {
        if(is_string(city.value)) {
            correct(cityLabel)
            validateionList[3] = true
        }
        else {
            display_error(cityLabel)
            validateionList[3] = false
        }
    }
    else{
        display_error(cityLabel)
        validateionList[3] = false
    }

    if(check_validateion_list(validateionList)) {
        return true
    }
    else {
        return false
    }
}

function vlaidate_card_info() {
    const validateionList = [false, false, false, false]
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
    /* checking cardname */
    if(check_lenght(cardName.value, 2)) {
        if(is_string(cardName.value)) {
            correct(cardNameLabel)
            validateionList[1] = true
        }
        else {
            display_error(cardNameLabel)
            validateionList[1] = false
        }
    }
    else{
        display_error(cardNameLabel)
        validateionList[1] = false
    }
    /**************************************/
    /* checking cvv code */
    if(check_lenght(cvv.value, 3, 3)) {
        if(is_number(cvv.value)) {
            correct(cvvLabel)
            validateionList[2] = true
        }
        else {
            display_error(cvvLabel)
            validateionList[2] = false
        }
    }
    else  {
        display_error(cvvLabel)
        validateionList[2] = false
    }
    /**************************************/
    /* checking date */
    if(cardDate.value) {
        correct(cardDateLabel)
        validateionList[3] = true
    }
    else {
        display_error(cardDateLabel)
        validateionList[3] = false
    }
    /**************************************/
    if(check_validateion_list(validateionList)) {
        return true
    }
    else {
        return false
    }
}

function display_error(label) {
    label.style.color = "red"
    cardInfo.style.marginBottom  = "130px"
}

function correct(label) {
    label.style.color = "#113340"
}


