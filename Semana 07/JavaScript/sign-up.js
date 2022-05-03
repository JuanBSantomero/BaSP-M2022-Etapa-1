var form = document.getElementById("form");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var dNI = document.getElementById("DNI");
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
var requiredEmail = document.getElementById("email-required");
var emailError = document.getElementById("error-email");
var requiredPassword = document.getElementById("password-required");
var passwordError = document.getElementById("error-password");
var passwordConRequired = document.getElementById("passwordcon-required");
var passwordNotMatch = document.getElementById("password-doesnt-match")
var signUp = document.getElementById("input-signup");
var reset = document.getElementById("input-reset");
var signUpComplete = document.getElementById("sign-up Complete");

function saveData(){
    localStorage.setItem("First Name:", firstName.value);
    localStorage.setItem("Last Name:", lastName.value);
    localStorage.setItem("DNI:", dNI.value);
    localStorage.setItem("Birth Date:", birthDate.value);
    localStorage.setItem("Phone:", phone.value);
    localStorage.setItem("Adress:",adress.value);
    localStorage.setItem("City:",city.value);
    localStorage.setItem("Post Code:",postCode.value);
    localStorage.setItem("Email:",email.value);
    localStorage.setItem("Password:",password.value);
}

window.onload=storage
function storage(){
            firstName.value = localStorage.getItem("First Name:");
            lastName.value = localStorage.getItem("Last Name:");
            dNI.value = localStorage.getItem("DNI:");
            birthDate.value = localStorage.getItem("Birth Date:");
            phone.value = localStorage.getItem("Phone:");
            adress.value = localStorage.getItem ("Adress:");
            city.value = localStorage.getItem ("City:");
            postCode.value = localStorage.getItem("Post Code:");
            email.value = localStorage.getItem("Email:");
            password.value = localStorage.getItem("Password:");
}


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    var correctFormat = "";
    var formatDate = birthDate.value.split('-');
    correctFormat= formatDate.slice(1, 2)+ '/'+ formatDate.slice(2)+ '/'+ formatDate.slice(0,1)
    if(validateFName() && validateLName() && validateDNI() && validateDate(e) && validatePhone() &&
    validateAdress() && validateCity() && validatePostCode() && validateEmail() && validatePassword() &&
    repeatPassword()){
       signUpComplete.classList.add("signUpComplete");
       signUpComplete.innerHTML = "Sign-Up Complete"+"<p></p>"
       +"First Name: "+firstName.value+"<p></p>"
       +"Last Name: "+lastName.value+"<p></p>"
       +"DNI: "+dNI.value+"<p></p>"
       +"Birth date: "+birthDate.value+"<p></p>"
       +"Phone: "+phone.value+"<p></p>"
       +"Adress: "+adress.value+"<p></p>"
       +"City: "+city.value+"<p></p>"
       +"Post-Code: "+postCode.value+"<p></p>"
       +"Email: "+email.value+"<p></p>"
       +"Password: "+password.value+"<p></p>"
       +"Repeat Password: "+repPassword.value+"</p>"
       var url = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${firstName.value}&lastName=${lastName.value}&dni=${dNI.value}&dob=${correctFormat}&phone=${phone.value}&address=${adress.value}&city=${city.value}&zip=${postCode.value}&email=${email.value}&password=${password.value}`
       fetch(url)
       .then(response => response.json())
       .then(data => {
            document.getElementById("modal").style.display = "block";
            document.getElementById("close").onclick = function () {
            document.getElementById("modal").style.display = 'none';
            }
            success.classList.add("success")
            success.innerHTML = "<p>" + data.msg + "</p>"
           saveData()
           storage()}) 
       .catch(error =>{
           console.log(error)
       })
    }
    if(validateFName() !==true){
        alert("First name invalid")
    }
    if(validateLName() !==true){
        alert("Last name invalid")
    }
    if(validateDNI() !==true){
        alert("DNI invalid")
    }
    if(validateDate(e) !==true){
        alert("Birth date invalid")
    }
    if(validatePhone() !==true){
        alert("Phone invalid")
    }
    if(validateAdress() !==true){
        alert("Adress invalid")
    }
    if(validateCity() !==true){
        alert("City invalid")
    }
    if(validatePostCode() !==true){
        alert("Post Code invalid")
    }
    if(validateEmail() !==true){
        alert("Email invalid")
    }
    if(validatePassword() !==true){
        alert("Password invalid")
    }
    if(repeatPassword() !==true){
        alert("Second password incorrect")
    }
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
        fNameRequired.style.display = "flex";
        fNameRequired.style.justifyContent = "center";
        firstName.style.border = "solid 2px red";
        return false;
    }
    else if(firstName.value.length<3 || FNCh<1 || FNSm>0){
        fNameInvalid.style.display ="flex";
        fNameInvalid.style.justifyContent = "center";
        firstName.style.border = "solid 2px red";
        return false;
    }
    else{
        firstName.style.border = "solid 2px green"
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
        lNameRequired.style.display = "flex";
        lNameRequired.style.justifyContent = "center"
        lastName.style.border ="solid 2px red";
        return false;
    }
    else if (lastName.value.length<3 || LNCh<1 || LNSm>0){
        lNameInvalid.style.display = "flex";
        lNameInvalid.style.justifyContent = "center";
        lastName.style.border ="solid 2px red";
        return false;
    }
    else{
        lastName.style.border = "solid 2px green"
        return true;
    }
}
lastName.addEventListener("focus", writtingLName)
function writtingLName(e){
    lNameRequired.style.display = "none";
    lNameInvalid.style.display = "none";
    lastName.style.border = "solid 2px black";
}

dNI.addEventListener("blur", validateDNI)
function validateDNI(e){
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var DNINum = 0;
    var DNISm = 0;
    for(i=0;i<dNI.value.length;i++){
        if(!Numbers.includes(dNI.value[i])){
            DNISm++
        }
        if(Numbers.includes(dNI.value[i])){
            DNINum++
        }
    }
    if(dNI.value === ""){
        DNIrequired.style.display = "flex";
        DNIrequired.style.justifyContent = "center";
        DNI.style.border = "solid 2px red";
        return false;
    }
    else if(DNI.value.length<7 || DNINum<1 || DNISm>0){
        DNIinvalid.style.display = "flex";
        DNIinvalid.style.justifyContent = "center";
        dNI.style.border = "solid 2px red";
        return false;
    }
    else{
        dNI.style.border = "solid 2px green";
        return true;
    }
}
dNI.addEventListener("focus", writtingDNI)
function writtingDNI(e){
    DNIrequired.style.display = "none";
    DNIinvalid.style.display = "none";
    dNI.style.border = "solid 2px black";
}

function getAge(date){
    var today = new Date();
    var birthDt = new Date(date);
    var age = today.getFullYear() - birthDt.getFullYear();
    return age;
}
birthDate.addEventListener("blur", validateDate)
function validateDate(e){
    age = e.target.value
    if(birthDate.value === ""){
        bDateRequired.style.display = "flex";
        bDateRequired.style.justifyContent = "center";
        birthDate.style.border = "solid 2px red";
        return false;
    }
    else if(getAge(birthDate.value) <18){
        bDateInvalid.style.display = "flex";
        bDateInvalid.style.justifyContent = "center";
        birthDate.style.border = "solid 2px red";
        return false;
    }
    else{

            birthDate.style.border = "solid 2px green";
            return true;
        }
    }
birthDate.addEventListener("focus",selectDate)
function selectDate(e){
    bDateRequired.style.display = "none";
    bDateInvalid.style.display = "none";
    birthDate.style.border = "solid 2px black";
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
        phoneRequired.style.display = "flex";
        phoneRequired.style.justifyContent = "center";
        phone.style.border = "solid 2px red";
        return false;
    }
    else if (phone.value.length<10 || PhNum<1 || PhSm> 0){
        phoneInvalid.style.display = "flex";
        phoneInvalid.style.justifyContent = "center";
        phone.style.border = "solid 2px red";
        return false;
    }
    else{
        phone.style.border = "solid 2px green"
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
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
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
        adressRequired.style.display = "flex";
        adressRequired.style.justifyContent = "center";
        adress.style.border = "solid 2px red";
        return false;
    }
    else if(adress.value.length<5 || AdCh<1 || AdNum<1 || AdSm>1){
        adressInvalid.style.display = "flex";
        adressInvalid.style.justifyContent = "center";
        adress.style.border = "solid 2px red";
        return false;
    }
    else{
        adress.style.border = "solid 2px green"
        return true;
    }   
}
adress.addEventListener("focus", writtingAdress)
function writtingAdress(e){
    adressRequired.style.display = "none";
    adressInvalid.style.display = "none";
    adress.style.border = "solid 2px black";
}

city.addEventListener("blur", validateCity)
function validateCity(e){
    var LetNum = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var CityCh =0;
    var CitySm =0;
    for(i=0; i<city.value.length;i++){
        if(!LetNum.includes(city.value[i])){
            CitySm++
        }
        if(LetNum.includes(city.value[i])){
            CityCh++
        }
    }
    if(city.value === ""){
        cityRequired.style.display = "flex";
        cityRequired.style.justifyContent = "center";
        city.style.border = "solid 2px red";
        return false;
    }
    else if(city.value.length<3 || CityCh<1 || CitySm>0){
        cityInvalid.style.display = "flex";
        cityInvalid.style.justifyContent = "center";
        city.style.border = "solid 2px red";
        return false;
    }
    else{
        city.style.border = "solid 2px green";
        return true;
    }
}
city.addEventListener("focus", writtingCity)
function writtingCity(e){
    cityRequired.style.display = "none";
    cityInvalid.style.display = "none";
    city.style.border = "solid 2px black";
}

postCode.addEventListener("blur", validatePostCode)
function validatePostCode(e){
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var PCNum =0;
    var PCSm =0;
    for(i=0;i<postCode.value.length;i++){
        if(!Numbers.includes(postCode.value[i])){
            PCSm++
        }
        if(Numbers.includes(postCode.value[i])){
            PCNum++
        }
    }
    if (postCode.value === ""){
        pCodeRequired.style.display = "flex";
        pCodeRequired.style.justifyContent = "center";
        postCode.style.border = "solid 2px red";
        return false;
    }
    else if (postCode.value.length<4 || postCode.value.length>5 || PCNum<1 || PCSm>0){
        pCodeInvalid.style.display = "flex";
        pCodeInvalid.style.justifyContent = "center";
        postCode.style.border = "solid 2px red";
        return false;
    }
    else{
        postCode.style.border = "solid 2px green";
        return true;
    }
}
postCode.addEventListener("focus", writtingPostCode)
function writtingPostCode(e){
    pCodeRequired.style.display = "none";
    pCodeInvalid.style.display = "none";
    postCode.style.border = "solid 2px black";
}

email.addEventListener( "blur", validateEmail)
function validateEmail(e){
    var emailreg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if(email.value === ""){
        requiredEmail.style.display = "flex";
        requiredEmail.style.justifyContent = "center";
        email.style.border = "solid 2px red";
        return false;
    }
    else{
        if(!emailreg.test(email.value)){
            emailError.style.display = "flex";
            emailError.style.justifyContent = "center";
            email.style.border = "solid 2px red";
            return false
        }
        else{
            email.style.border = "solid 2px green";
            return true
        }
    }
}
email.addEventListener("focus", writingEmail)
function writingEmail(e){
    requiredEmail.style.display = "none";
    emailError.style.display ="none";
    email.style.border = "solid 2px black";
}

password.addEventListener("blur", validatePassword)
function validatePassword(e){
    var Letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z", " "];
    var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var PwdLet = 0;
    var PwdNum = 0;
    var PwdSm= 0;
    for(i=0;i<password.value.length;i++){
        if(!Letters.includes(password.value[i]) && !Numbers.includes(password.value[i])){
            PwdSm++
        }
        if(Letters.includes(password.value[i])){
            PwdLet++
        }
        if(Numbers.includes(password.value[i])){
            PwdNum++
        }
    }
    if (password.value === ""){
        requiredPassword.style.display = "flex";
        requiredPassword.style.justifyContent = "center";
        password.style.border = "solid 2px red";
        return false
    }
    else if(password.value.length<8 || PwdLet<1 || PwdNum<1 || PwdSm>0){
        passwordError.style.display = "flex";
        passwordError.style.justifyContent = "center";
        password.style.border = "solid 2px red";
        return false;
    }
    else{
        password.style.border = "solid 2px green";
        return true;
    }
}
password.addEventListener ("focus", writtingPassword)
function writtingPassword(e){
    requiredPassword.style.display = "none";
    passwordError.style.display = "none";
    password.style.border = "solid 2px black";
}

repPassword.addEventListener("blur",repeatPassword)
function repeatPassword(e){
    if(repPassword.value === ""){
        passwordConRequired.style.display = "flex";
        passwordConRequired.style.justifyContent = "center";
        repPassword.style.border = "solid 2px red";
        return false;
    }
    else if (repPassword.value !== password.value){
        passwordNotMatch.style.display = "flex";
        passwordNotMatch.style.justifyContent = "center";
        repPassword.style.border = "solid 2px red";
        return false;
    }
    else{
        repPassword.style.border = "solid 2px green";
        return true;
    }
}
repPassword.addEventListener("focus", repeatingPassword)
function repeatingPassword(e){
    passwordConRequired.style.display = "none";
    passwordNotMatch.style.display = "none";
    repPassword.style.border = "solid 2px black"
}
