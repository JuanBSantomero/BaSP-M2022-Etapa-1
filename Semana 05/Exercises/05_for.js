var array = ["great", "power", "brings", "great", "responsabilities"]
for( i = 0; i < 5; i++){
    alert(array[i])
}
for( i = 0; i < 5; i++){
    array[i] = array[i].substring(0,1).toUpperCase() + array[i].substring(1,16);
    alert(array[i])
}
var sentence = ""
for( i = 0; i < 5; i++ ){
    sentence = sentence + array[i] + " ";
}
alert(sentence)
var array2 = []
for( i= 0; i <10; i++){
    array2[i] = i
}
console.log("ex05- for-D",array2)