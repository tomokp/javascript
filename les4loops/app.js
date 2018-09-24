for(let i = 1; i<=10; i++){
	console.log(i);		
}

message = "Het is maandag!";

let messageLength = message.length;
let a = 0
while(a<=messageLength){
    console.log(message.charAt(a));	
    a++;
		
}

word = "Geweldig";

let n = word.length;
let length = word.length;
let variable = [];
let flipped = "";
while(n>=0){
	n--;
    variable[n] = word.charAt(n);	
    flipped += variable[n];
}
console.log(flipped);

let zin = "Het is maandag!"
let zinLength = zin.length;
for(let d=0;d<=zinLength;d++){
    console.log(zin.charAt(d));
}

divide = "";
for(let x=1;x<=25;x++){
    if(x==0){
        divide = "of 0 deelbaar is door 3 valt over te discussiëren"
    }
    else if(x%3==0){
        divide = "is deelbaar door 3";
    }
    
    else{
        divide = "is niet deelbaar door 3"
    }
    console.log(x,divide);
}

