var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");
var emailError = document.getElementById("error-email");
var requiredEmail = document.getElementById("email-required");
var passwordError = document.getElementById("error-password");
var requiredPassword = document.getElementById("password-required")
var login = document.getElementById("input-login")
var emailval = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
var passwordLetters = ["a", "b", "C", "d", "e",
"f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","U",
"V","W","X","Y","Z"]
var passwordNumbers = ["0","1","2","3","4","5","6","7","8","9"]
var numbers = 0;
var characters = 0;
form.addEventListener("subtmit", (e) =>{
    e.preventDefault();
})
email.addEventListener( "blur", validateEmail)
function validateEmail(e){
    if(email.value === ""){
        requiredEmail.style.display = "flex";
        requiredEmail.style.justifyContent = "center"
        email.style.border = "solid 2px red"
    }
    else{
        if(!emailval.test(email.value)){
            emailError.style.display = "flex"
            emailError.style.justifyContent = "center"
            email.style.border = "solid 2px red"
        }
    }
}
email.addEventListener("focus", writingEmail)
function writingEmail(e){
    requiredEmail.style.display = "none";
    emailError.style.display ="none";
    email.style.border = "solid 2px black"
}

password.addEventListener("blur",validatePassword)
function validatePassword(e){
    for(i=0;i<password.value.length;i++) {
        if(passwordLetters.includes(password[i])){
            numbers++;
        }
        else if(passwordNumbers.includes(password[i])){
            characters++;
        }
    }
    if(password.value === ""){
        requiredPassword.style.display = "flex"
        requiredPassword.style.justifyContent = "center"
        password.style.border = "solid 2px red"
    }
    else if(numbers<1){
        passwordError.style.display = "flex"
        passwordError.style.justifyContent = "center"
        password.style.border = "solid 2px red"
        return false
    }
    else if(characters<1){
        passwordError.style.display = "flex"
        passwordError.style.justifyContent = "center"
        password.style.border = "solid 2px red"
        return false
    }
    else if(password.value.length<8){
        passwordError.style.display = "flex"
        passwordError.style.justifyContent = "center"
        password.style.border = "solid 2px red"
        return false
    }
}
password.addEventListener("focus", writingPassword)
function writingPassword(e){
    requiredPassword.style.display = "none";
    passwordError.style.display ="none";
    password.style.border = "solid 2px black"
}
