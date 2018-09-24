let grade = 10;
if (grade<6){
    console.log("je hebt een onvoldoende")
}

else if (grade>=6 && grade<7){
    console.log("je hebt een voldoende")
}

else if (grade>=7 && grade<9){
    console.log("je hebt een goed")
}

else if (grade>9){
    console.log("je hebt een uitmuntend")
}

grade = 8;
switch (true) {
    case grade<6:
    console.log("je hebt een onvoldoende");
    break;

    case grade>=6 && grade<7:
    console.log("je hebt een voldoende");
    break;

    case grade>=7 && grade<9:
    console.log("je hebt een goed");
    break;

    case grade>9:
    console.log("je hebt een uitmuntend");
    break;
}


let purchasedBook = true;
let job = "teacher";
let inTrain = false;

if(purchasedBook, job="teacher", inTrain){
    console.log("finally i can enjoy my book!")
}
   
else{
    console.log("ach vervelend, ik kan nog steeds mijn boek niet lezen :(")
}
   