function giveMeSomeNiceName(gender) {
    if (gender=="male"){
        console.log("je naam is kees");
    }
    else if (gender=="female"){
        console.log("je naam is katrien");
    }
    else {
        console.log("dat is geen geldig gender");
    }
}

giveMeSomeNiceName("male");

function numberOfPigs(number) {
    let amountOfPigs = "";
    for(let i=0; i<number; i++) {
        amountOfPigs = amountOfPigs+"🐖";
    }
console.log(amountOfPigs,"knor!");
}

numberOfPigs(50);

function facorial(num) {
    let sum = 1;
    for(num; num>1; num--){
        sum = sum*num;
    }
    console.log(sum);
}
facorial(5);

console.log("-----hier beginnen de opdrachten van de les functions-----")
console.log("-----fibonacci------:")

function fibonacci(amount){ 
    let firstNumber = 1;
    let secondNumber = 1;
    console.log(firstNumber);
    let i=0;
    while(i<amount){
        console.log(firstNumber);
        secondNumber = firstNumber + secondNumber;
        console.log(secondNumber);
        firstNumber = firstNumber + secondNumber;
        i=i+1;
    }
}
fibonacci(6);

console.log("-----countdown------:")

function countDown(startNumber){
    var fireWork = new Audio("firework.mp3");
    for (startNumber; startNumber>-1; startNumber--){
        console.log(startNumber);
        if (startNumber==0){
            console.log("Happy 2018");
            fireWork.play();
        }
    }

}
countDown(10);

console.log("-----hoisting------:")

function hoisting(){ //dit zijn 4 volgordes om iets een waarde te geven en dan te laten zien in de console alleen de eerste 2 werken, dit komt door hoisting
    a = 1;
    console.log(a);
    var a;
    var b = 2;
    console.log(b);
    console.log(c);
    var c = 3;
    var d;
    console.log(d);
    d = 4;
}
hoisting();

function sound(nameOfSound){
    actualSound = new Audio(nameOfSound+".mp3");
    actualSound.play();    
}
sound("ali");