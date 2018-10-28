window.addEventListener('load', init);

function init() {
    console.log('DOM is loaded');
}

const answerInput = document.getElementById("submit");
answerInput.addEventListener("click", answerClick);
var answer;
var i = 0;
var outcome = document.getElementById("outcome");
var question = document.getElementById("question")
outcome.classList.add("bg-green");
var doubleN = "";                   //dit zit er puur in voor de loop :)
for (a = 0; a < 2; a++) {
    doubleN = doubleN + "n";
}

var asked = ["01010111 01100101 01101100 01101011 01101111 01101101", "01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011",
    "01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011"];
console.log(asked[1]);

var answers = ["Hello", "Welkom", "Tot ziens", "Groetjes"]


function answerClick() {              //hier maak ik mijn click functie aan oftewel dit gebeurt er als je op submit drukt


    if (i == 0) {                       //als i == 0 oftewel je bent bij de eerste vraag dan kijkt die of je het antwoord goed of fout hebt
        event.preventDefault();
        answer = document.getElementById("inputAnswer").value;
        if (answer == answers[i]) {
            document.getElementById("questionText").innerHTML = asked[i];
            good();                                     //is het antwoord goed dan voert die de functie good uit en veranderd hij de vraag naar de volgende door middel van de array asked aan te roepen
        }
        else {          //als het antwoord niet goed is voert hij de functie bad uit en gaat hij uiteraard niet door naar de volgende vraag
            bad();

        }
    }
                 //al deze comments zijn ook van toepassing op alle andere vragen sinds die ongeveer hetzelfde zijn
else if (i == 1) {
        event.preventDefault();
        answer = document.getElementById("inputAnswer").value;
        if (answer == answers[i]) {
            document.getElementById("questionText").innerHTML = asked[i];
            good();
        }
        else {
            bad();
        }

    }

    else if (i == 2) {
    event.preventDefault();
    answer = document.getElementById("inputAnswer").value;
    if (answer == answers[i]) {
        document.getElementById("questionText").innerHTML = asked[i];
        good();
    }
    else {
        bad();
    }
}
    else if (i == 3) {
        event.preventDefault();
        answer = document.getElementById("inputAnswer").value;
        if (answer == answers[i]) {
            good();
            document.getElementById("questionText").innerHTML = "Gefeliciteerd je hebt gewo" + doubleN + "en!";
        }
        else {
            bad();
        }
    }
}

function good() {    //dit is de functie good, die hoogt i met 1 op die stelt het getal voor zodat je kan zien bij welke vraag je bent ook zorgt deze functie ervoor dat alles groen wordt en het zinnetje; Het antwoord dat jij gegeven hebt is goed namelijk "je antwoord"
    i = i + 1;
    outcome.classList.remove("bg-red");
    outcome.classList.add("bg-green");
    document.getElementById("answerText1").innerHTML = "Je antwoord ";
    document.getElementById("outcome").innerHTML = answer;
    document.getElementById("answerText2").innerHTML = " is helemaal goed";
    question.classList.remove("bg-red");
    question.classList.add("bg-green");
}

function bad() {  //dit is de functie bad deze verandert alles rood wordt dat rood moet worden en er komt het zinnetje; Het antwoord dat jij gegeven hebt is fout namelijk: "je antwoord" op het scherm
    console.log("fout");
    outcome.classList.remove("bg-green");
    outcome.classList.add("bg-red");
    document.getElementById("answerText1").innerHTML = "Helaas ";
    document.getElementById("outcome").innerHTML = answer;
    document.getElementById("answerText2").innerHTML = " is niet juist, probeer het nog eens";
    question.classList.remove("bg-green");
    question.classList.add("bg-red");
}

