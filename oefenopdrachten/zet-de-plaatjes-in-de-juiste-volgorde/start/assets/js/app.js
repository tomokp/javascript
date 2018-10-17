// All global variables
const imageFolder = "./assets/images/";
const imagez = [{
    position: 1,
    name: 'transformers',
    source: './assets/images/transformers-1.png'
},
{
    position: 2,
    name: 'transformers',
    source: './assets/images/transformers-2.png'
},
{
    position: 3,
    name: 'transformers',
    source: './assets/images/transformers-3.png'
},
{
    position: 4,
    name: 'transformers',
    source: './assets/images/transformers-4.png'

}
];
var i;
var numbers = [];
var k = 0;
var tries = 5;
document.getElementById("score").innerHTML = "<h2>Pogingen over:"+ tries+"</h2>";

function reload() {
    location.reload();
}

function random() {
    i = Math.floor((Math.random() * 4) + 0);
}
for (v = 0; v < 4; v++) {
    random();
    console.log(i);
    console.log(numbers);
    while (numbers.includes(i)) {
        console.log("hallo");
        random();
    }
    numbers.push(i);
    sourcePic = imagez[i].source;
    //console.log(i);
    var img = document.createElement("img");
    document.getElementById("images").appendChild(img);
    img.src = sourcePic;
    img.setAttribute("id", i);

}
console.log(imagez);

document.getElementById(0).onclick = function () {
    if (k == 0) {
        var img0 = document.getElementById(0);
        img0.classList.add("border-green");
        k = k + 1
    }
    else {
        console.log("fout");
    }
    tries = tries - 1;
    console.log(tries);
    checkTries();
}

document.getElementById(1).onclick = function () {
    if (k == 1) {
        var img1 = document.getElementById(1);
        img1.classList.add("border-green");
        k = k + 1
    }
    else {
        console.log("fout");
    }
    tries = tries - 1;
    console.log(tries);
    checkTries();
}

document.getElementById(2).onclick = function () {
    if (k == 3) {
        var img2 = document.getElementById(2);
        img2.classList.add("border-green");
        k = k + 1
        tries = tries - 1;
        checkTries();
        document.getElementById("score").innerHTML = "<h2>gefelicteerd! je hebt gewonnen</h2>";
        setTimeout(reload, 1500);
    }
    else {
        console.log("fout");
        tries = tries - 1;
        checkTries();
    }
    
    console.log(tries);
    
}

document.getElementById(3).onclick = function () {
    if (k == 2) {
        var img3 = document.getElementById(3);
        img3.classList.add("border-green");
        k = k + 1
    }
    else {
        console.log("fout");
    }
    tries = tries - 1;
    console.log(tries);
    checkTries();
}

function checkTries(){
    if(tries==0){
        document.getElementById("score").innerHTML = "<h2>Je hebt verloren, helaas.</h2>";
        setTimeout(reload, 500);

    }
    else {
        document.getElementById("score").innerHTML = "<h2>Pogingen over:"+ tries+"</h2>";
        console.log(tries);
    }
}

