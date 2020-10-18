var input = !null;
var num = 0;

var maxValue = prompt("Введи максмально число");

var number = Math.floor(Math.random() * maxValue);
console.log(number);

if(maxValue !== null){

while( input !== null){
    input = prompt("Введите число");
    num = parseInt(input);

    if(num > number){
        alert("Многовато");
    } else if(num < number){
        alert("Слишком мало");
    } else if ( num == number){
        alert("Done! Это было число - " + number);
        break;
    }
}
}