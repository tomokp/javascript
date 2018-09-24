divide = "";
for(let x=0;x<=25;x++){
    if(x==0){
        divide = "of 0 deelbaar is door 4 valt over te discussiëren"
    }
    else if(x%4==0){
        divide = "is deelbaar door 4";
    }
    
    else{
        divide = "is niet deelbaar door 4"
    }
    console.log(x,divide);
}

var firstNumber = 1;
var secondNumber = 1;
console.log(firstNumber);
let i=0;
while(i<10){
    console.log(firstNumber);
    secondNumber = firstNumber + secondNumber;
    console.log(secondNumber);
    firstNumber = firstNumber + secondNumber;
    i=i+1;
}
var basenumber = 0;
var numbers = [2, 4, 8, 9, 12, 13];
var numberLength = numbers.length;
for (let i=0; i<numberLength; i++){
    basenumber = basenumber+numbers[i];
}
console.log(basenumber);