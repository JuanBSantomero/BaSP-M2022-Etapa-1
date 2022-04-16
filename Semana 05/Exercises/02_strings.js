var string1 = "astonishing"
var resultString1 = string1.toUpperCase()
console.log("ex02-strings-A: ", resultString1)
var string2 = "incredible"
var resultString2 =  string2.substring(0, 5)
console.log("ex02-strings-B: ", resultString2)
var string3 = "remarkable"
var resultString3 = string3.substring(7, 10)
console.log("ex02-strings-C: ", resultString3)
var string4 = "fantastics"
var resultString4 = string4.substring(0, 1).toUpperCase() + string4.substring(1, 10).toLowerCase()
console.log("ex02-strings-D: ", resultString4)
var string5 = "Marvel rocks"
var resultString5 = string5.indexOf(" ")
console.log("ex02-strings-E: ", resultString5)
var string6 = "unbelievable conffesions"
var resultString6 = string6.substring(string6.indexOf("u"),1).toUpperCase() + 
string6.substring(1,12).toLocaleLowerCase() + string6.substring(string6.indexOf(" "),13) + 
string6.substring(string6.indexOf("c"),14).toUpperCase() + string6.substring(14,24).toLowerCase()
console.log("ex02-strings-F: ", resultString6)
