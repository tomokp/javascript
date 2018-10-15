imageArray = new Array(); //Array met plaatjes
imageArray[0] = "./assets/images/bat.jpg"
imageArray[1] = "./assets/images/bug.jpg"
imageArray[2] = "./assets/images/cat.jpg"
imageArray[3] = "./assets/images/dog.jpg"
imageArray[4] = "./assets/images/fly.jpg"
imageArray[5] = "./assets/images/frog.jpg"
imageArray[6] = "./assets/images/monkey.jpg"
imageArray[7] = "./assets/images/mouse.jpg"
imageArray[8] = "./assets/images/spider.jpg"

console.log(imageArray);
var sliceOne;
var sliceTwo;
var i = 0;

var randomImage = document.getElementById("random-img"); //wordt een willekeurig plaatje aan "random-img" toegevoegd
randomImage.src = imageArray[Math.floor(Math.random() * imageArray.length)];
var arr = []

while (arr.length < 9) { //Een plaatje kan niet 2x voor komen in het img-grid

    var imageAtRandom = imageArray[Math.floor(Math.random() * imageArray.length)];
    if (arr.indexOf(imageAtRandom) > - 1) continue;
    arr[arr.length] = imageAtRandom;

    var animal = document.createElement("img");
    animal.src = imageAtRandom;

    var animalAdd = document.getElementById("img-grid");
    animalAdd.appendChild(animal);

    sliceOne = randomImage.src.slice(-10);
    sliceTwo = imageAtRandom.slice(-10);
    if (sliceOne == sliceTwo) {
        console.log("GOED");
        animal.setAttribute("id", "good");
        document.getElementById("good").onclick = function () {
        document.getElementById("message").innerHTML = "goed geraden!";
        location.reload();
    } 
}
    else {
        animal.setAttribute("id", "bad" + i)
        document.getElementById("bad" + i).onclick = function () {
        document.getElementById("message").innerHTML = "nee dat is fout";
        }
        i = i+1
    }


   
    

   
    }
    console.log(imageAtRandom.slice(-10));
    console.log(randomImage.src.slice(-10));



console.log(arr);
console.log(randomImage);
console.log(imageAtRandom);
console.log(randomImage);



