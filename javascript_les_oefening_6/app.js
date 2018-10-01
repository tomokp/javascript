const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
var min=0; 
    var max=lapRounds.length;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
    console.log(lapRounds[random]); 


const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
    ];

var zero=allMyRecords.length;
var one=allMyRecords[0].length;
var two=allMyRecords[1].length;
var number=0;

for(i=0 ; i<zero ; i++) {
    if(number==0) {
        for(a=0 ; a<one ; a++){
            console.log(allMyRecords[i][a]);
        }
    number=1;
    }
    else if(number==1) {
        for(a=0 ; a<two ; a++){
            console.log(allMyRecords[i][a]);
        }

    }
}



var newArray = [];
for (let i = 0; i < lapRounds.length; i++) {

    if (lapRounds[i] < 4) {
        newArray.push(lapRounds[i]);
    }
}
console.log(newArray)



let result = lapRounds.filter(function(value){  //Dit is minder code en het is geen array daardoor heeft het minder laadtijd nodig
    return value  < 4; 
});
console.log(result);
 

 

 