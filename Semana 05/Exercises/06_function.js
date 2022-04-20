function suma(number1, number2){
    return number1 + number2 
}
var result = suma(15, 18)
console.log ("ex06-functions-A", result)
function validateB(number1, number2){
    if (isNaN(number1) || isNaN(number2)){
        console.log("ex06-functions-B", "Error")
        return NaN
    }
    else{
        return number1 + number2
    }
}
var result = validateB(15, 18)
console.log("ex06-functions-B", result)
function validateInteger(number3){
    return Number.isInteger(number3)
}
var result = validateInteger (5)
console.log("ex06-functions-C", result)
function validateD(number1, number2){
    if(typeof(number1) === "number" && typeof(number2) === "number"){
        if(Number.isInteger(number1) && Number.isInteger(number2)){
            return number1 + number2
        }
        else{
           if(!Number.isInteger(number1) && !Number.isInteger(number2)){
                return Math.round(number1) + Math.round(number2);
            }
            if(!Number.isInteger(number1)){
                return Math.round(number1) + number2
            }
            if(!Number.isInteger(number2)){
                return Math.round(number2) + number1;
            }
        }
    }
    else{
        console.log("Not a number")
        return NaN
    }
}
var result = validateD(25, 26.5)
console.log("ex06-functions-D", result)
function sumaE(number1,number2){
    return validateD(number1, number2);
}
console.log("ex06-functions-E",sumaE(2,38.2))
