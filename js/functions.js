/* check lengt of input */
export function check_lenght(value, minLenght, maxLenght = 100) {
    if(value.trim().length >= minLenght && value.trim().length <= maxLenght) {
        return true;
    }
    else {
        return false;
    }
}

/* check if hole string is str */
export function is_string(value) {
    for(let i = 0; i < value.length; i++){
        let num = parseInt(value[i])
        if(Number.isInteger(num)) {
            return false
        }
        else {
            continue
    }
    }
    return true
}

/* check if hole number is int */
export function is_number(value) {
    for(let i = 0; i < value.length; i++){
        let num = parseInt(value[i])
        if(Number.isInteger(num)) {
            continue
        }
        else {
            return false
    }
    }
    return true
}

export function check_validateion_list(list) {
    return list.every(function(index) {
        return index
    });
  }

  export function test() {
    console.log("this is a test");
  }