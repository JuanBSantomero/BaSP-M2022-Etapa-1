var form = document.getElementById("form");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var DNI = document.getElementById("DNI");
var birthDate = document.getElementById("birth-date");
var phone = document.getElementById("phone");
var adress = document.getElementById("adress");
var city = document.getElementById("city");
var postCode = document.getElementById("post-code");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repPassword = document.getElementById("repeat-password");
var fNameRequired = document.getElementById("fname-required");
var fNameInvalid = document.getElementById("invalid-fname");
var lNameRequired = document.getElementById("lname-required");
var lNameInvalid = document.getElementById("invalid-lname");
var DNIrequired = document.getElementById("DNI-required");
var DNIinvalid = document.getElementById("DNI-invalid");
var bDateRequired = document.getElementById("BDate-required");
var bDateInvalid = document.getElementById("BDate-invalid");
var phoneRequired = document.getElementById("Phone-required");
var phoneInvalid = document.getElementById("Phone-invalid");
var adressRequired = document.getElementById("Adress-required");
var adressInvalid = document.getElementById("Adress-invalid");
var cityRequired = document.getElementById("City-required");
var cityInvalid = document.getElementById("City-invalid");
var pCodeRequired = document.getElementById("PCode-required");
var pCodeInvalid = document.getElementById("PCode-invalid");
var requiredEmail = document.getElementById("error-required");
var emailError = document.getElementById("error-email");
var requiredPassword = document.getElementById("password-required");
var passwordError = document.getElementById("error-password");
var passwordConRequired = document.getElementById("passwordcon-required");
var passwordNotMatch = document.getElementById("password-doesnt-match")
var signUp = document.getElementById("input-signup");
var reset = document.getElementById("input-reset");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
})

firstName.addEventListener("blur", validateFName)
function validateFName(e){
    var Letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", " "];
    var FNCh = 0;
    var FNSm = 0;
    for(i=0;i<firstName.value.length;i++){
        if(!Letters.includes(firstName.value[i])){
            FNSm++
        }
        if(Letters.includes(firstName.value[i])){
            FNCh++
        }
    }
    if (firstName.value ===""){
        fNameRequired.style.display = "block";
        firstName.style.border = "solid 2px red";
        return false;
    }
    else if(firstName.value.length<3 || FNCh<1 || FNSm>0){
        fNameInvalid.style.display ="block";
        firstName.style.border = "solid 2px red";
        return false;
    }
    else{
        return true;
    }   
}
firstName.addEventListener("focus", writtingName)
function writtingName(e){
    fNameInvalid.style.display = "none";
    fNameRequired.style.display = "none";
    firstName.style.border = "solid 2px black";
}

lastName.addEventListener("blur", validateLName)
function validateLName(e){
    var Letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z"," "];
    var LNCh = 0;
    var LNSm = 0;
    for(i=0;i<lastName.value.length;i++){
        if(!Letters.includes(lastName.value[i])){
            LNSm++
        }
        if(Letters.includes(lastName.value[i])){
            LNCh++
        }
    }
    if (lastName.value ===""){
        lNameRequired.style.display = "block";
        lastName.style.border ="solid 2px red";
        return false;
    }
    else if (lastName.value.length<3 || LNCh<1 || LNSm>0){
        lNameInvalid.style.display = "block";
        lastName.style.border ="solid 2px red";
        return false;
    }
    else{
        return true;
    }
}
lastName.addEventListener("focus", writtingLName)
function writtingLName(e){
    lNameRequired.style.display = "none";
    lNameInvalid.style.display = "none";
    lastName.style.border = "solid 2px black";
}

DNI.addEventListener("blur", validateDNI)
function validateDNI(e){
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var DNINum = 0;
    var DNISm = 0;
    for(i=0;i<DNI.value.length;i++){
        if(!Numbers.includes(DNI.value[i])){
            DNISm++
        }
        if(Numbers.includes(DNI.value[i])){
            DNINum++
        }
    }
    if(DNI.value === ""){
        DNIrequired.style.display = "block";
        DNI.style.border = "solid 2px red";
    }
    else if(DNI.value.length<7 || DNINum<1 || DNISm>0){
        DNIinvalid.style.display = "block";
        DNI.style.border = "solid 2px red";
    }
}
DNI.addEventListener("focus", writtingDNI)
function writtingDNI(e){
    DNIrequired.style.display = "none";
    DNIinvalid.style.display = "none";
    DNI.style.border = "solid 2px black";
}

phone.addEventListener("blur", validatePhone)
function validatePhone(e){
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var PhNum = 0;
    var PhSm = 0;
    for(i=0;i<phone.value.length;i++){
        if(!Numbers.includes(phone.value[i])){
            PhSm++
        }
        if(Numbers.includes(phone.value[i])){
            PhNum++
        }
    }
    if (phone.value === ""){
        phoneRequired.style.display = "block";
        phone.style.border = "solid 2px red";
        return false;
    }
    else if (phone.value.length<10 || PhNum<1 || PhSm> 0){
        phoneInvalid.style.display = "block";
        phone.style.border = "solid 2px red";
        return false;
    }
    else{
        return true;
    }
}
phone.addEventListener("focus", writtingPhone)
function writtingPhone(e){
    phoneRequired.style.display = "none";
    phoneInvalid.style.display = "none";
    phone.style.border = "solid 2px black"
}
adress.addEventListener("blur", validateAdress)
function validateAdress(e){
    var Letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", " "];
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var AdCh = 0;
    var AdNum = 0;
    var AdSm = 0;
    for(i=0;i<adress.value.length;i++){
        if(!Letters.includes(adress.value[i]) && !Numbers.includes(adress.value[i])){
            AdSm++
        }
        if(Letters.includes(adress.value[i])){
            AdCh++
        }
        if(Numbers.includes(adress.value[i])){
            AdNum++
        }
    }
    if(adress.value ===""){
        adressRequired.style.display = "block";
        adress.style.border = "solid 2px red";
        return false;
    }
    else if(adress.value.length<5 || AdCh<1 || AdNum<1 || AdSm>0){
        adressInvalid.style.display = "block";
        adress.style.border = "solid 2px red";
        return false;
    }
    else{
        return true;
    }   
}
adress.addEventListener("focus", writtingAdress)
function writtingAdress(e){
    adressRequired.style.display = "none";
    adressInvalid.style.display = "none";
    adress.style.border = "solid 2px black";
}
