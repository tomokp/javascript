console.log(document.getElementById("random-img"));
var random1 = "assets/images/bat.jpg";
var random2 = "assets/images/bug.jpg";
var random3 = "assets/images/cat.jpg";
var random4 = "assets/images/dog.jpg";
var random5 = "assets/images/fly.jpg";
var random6 = "assets/images/frog.jpg";
var random7 = "assets/images/monkey.jpg";
var random8 = "assets/images/mouse.jpg";
var random9 = "assets/images/spider.jpg";
var chosenPic;
var randomNumber
function chooseNumber() {
    randomNumber = Math.floor((Math.random() * 9) + 1);
    switch (randomNumber) {

        case 1:
            chosenPic = random1;
            break;
        case 2:
            chosenPic = random2;
            break;
        case 3:
            chosenPic = random3;
            break;
        case 4:
            chosenPic = random4;
            break;
        case 5:
            chosenPic = random5;
            break;
        case 6:
            chosenPic = random6;
            break;
        case 7:
            chosenPic = random7;
            break;
        case 8:
            chosenPic = random8;
            break;
        case 9:
            chosenPic = random9;
            break;
    }

}
chooseNumber();
var numbers = [];
document.getElementById("random-img").src = chosenPic;
var topPic = chosenPic;
console.log(chosenPic);
var v = 0;
function reload() {
    location.reload();
}
for (i = 1; i <= 9; i++) {
    chooseNumber();
    while (numbers.includes(chosenPic)) {
        chooseNumber();
    }

    numbers.push(chosenPic);
    console.log(numbers);
    console.log(chosenPic);
    var img = document.createElement("img");
    document.getElementById("img-grid").src = chosenPic;
    img.src = chosenPic;
    var src = document.getElementById("img-grid");
    src.appendChild(img);
    var element = document.getElementById("img-grid");
    console.log(element);
    console.log(img);
    console.log(topPic, chosenPic);
    if (chosenPic == topPic) {
        img.setAttribute("id", "good");
        document.getElementById("good").onclick = function () {
            document.getElementById("message").innerHTML = "goed geraden!";
            setTimeout(reload, 1500);

        };
    }
    else {
        v = v + 1
        img.setAttribute("id", "bad" + v);

        document.getElementById("bad" + v).onclick = function () {
            document.getElementById("message").innerHTML = "nee dat is fout";

        }
    }


};





