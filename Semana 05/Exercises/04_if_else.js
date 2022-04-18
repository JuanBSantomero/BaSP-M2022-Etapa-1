var number = Math.random();
if (number >= 0.5){
    console.log("ex04-if else-A: ", number, "Greater than 0.5");
}
else{
    console.log("ex04-if else-A: ", number, "Lower than 0.5");
}
var age = Math.floor(Math.random()*100)
if (age < 2){
    console.log("ex04-if else-B: ", age, "Bebe")
}
else if (age >= 2 && age <= 12){
    console.log("ex04-if else-B: ", age, "Niño")
}
else if (age >= 13 && age <= 19){
    console.log("ex04-if else-B: ", age, "Adolescente")
}
else if (age >= 20 && age <=30){
    console.log("ex04-if else-B: ", age, "Joven")
}
else if (age >=31 && age <=60){
    console.log("ex04-if else-B: ", age, "Adulto")
}
else if (age >=61 && age <=75){
    console.log("ex04-if else-B: ", age, "Adulto mayor")
}
else if (age >75){
    console.log("ex04-if else-B: ", age, "Anciano")
}
