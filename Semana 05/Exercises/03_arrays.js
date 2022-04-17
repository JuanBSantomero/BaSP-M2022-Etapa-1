var array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("ex03-arrays-A: ", array1[5],array1[11]);
var array1Order = array1.sort()
console.log("ex03-arrays-B: ", array1Order)
array1.unshift("Beggining of the year")
array1.push("End of the year")
console.log("ex03-arrays-C: ", array1)
array1.shift()
array1.pop()
console.log("ex03-arrays-D: ", array1)
var array1Reverse = array1.reverse()
console.log("ex03-arrays-E: ", array1Reverse)
var array1Join = array1.join("-")
console.log("ex03-arrays-F: ", array1Join)
var array2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("ex03-arrays-G: ", array2.slice(4,11))
