function suma(number1, number2){
    return number1 + number2 
}
var result = suma(15, 18)
console.log ("ex06-functions-A", result)
function validate(number1, number2){
    if (isNaN(number1) || isNaN(number2)){
        console.log("ex06-functions-B", "Error")
        return NaN
    }
    else{
        return number1 + number2
    }
}
var result = validate(15, 18)
console.log("ex06-functions-B", result)
function validateInteger(number3){
    return Number.isInteger(number3)
}
var solution = validateInteger(5)
console.log("ex06-functions-C", solution)
function validate(number1, number2){
    if(typeof(number1) === "number" && typeof(number2) === "number"){
        if(Number.isInteger(number1) && Number.isInteger(number2)){
            return number1 + number2
        }
        else{
            alert("Non-integer number")
            if(!Number.isInteger(number1)){
                return Math.round(number1)
            }
            else{
            return Math.round(number2)
            }
        }
    }
    else{
        alert("Not a number")
        return NaN
    }
}
var result = validate (25, 31.7)
console.log("ex06-functions-D", result)
function validate(number1, number2){
    if(typeof(number1) === "number" && typeof(number2) === "number"){
        if(validateInteger(number1, number2)){
            return number1 + number2
        }
        else{
            alert("Non-integer number")
            if(!Number.isInteger(number1)){
                return Math.round(number1)
            }
            else{
            return Math.round(number2)
            }
        }
    }
    else{
        alert("Not a number")
        return NaN
    }
}
function validateInteger(number1, number2){
    if(Number.isInteger(number1) && Number.isInteger(number2)){
        return true;
    }
    else{
        return false;
    }
}
var finalsolution = validate(25, 31.7);
console.log("ex06-functions-E",finalsolution)