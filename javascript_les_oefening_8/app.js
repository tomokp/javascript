// const listItems = document.getElementsByTagName('li');
// console.log(listItems);
// //const lastItemFromListItems = document.getElementById('groceryList').firstChild.innerText;
// const firstItemFromListItems = document.getElementById("item1");
// firstItemFromListItems.classList.add("standOut");
// console.log(firstItemFromListItems);


// let groceryList = [
//     {
//         "name": "Tandenbrostel",
//         "price": 0.99
//     },
//     {
//         "name": "Deodorant",
//         "price": 7.99
//     },
//     {
//         "name": "bakmeel",
//         "price": 0.79
//     },
//     {
//         "name": "wortel",
//         "price": 2.99
//     }
// ];

// console.log(groceryList);

// function createTable(){
//     const table = document.createElement("table");
//     let groceryLength = groceryList.length;
//     console.log(groceryLength);

//     for(i = 0 ; i<groceryLength ; i++){
//         const tr = document.createElement("tr");
//         const tdName = document.createElement("td");
//         tdName.innerText = groceryList[i].name;
//         const tdPrice = document.createElement("td");
//         tdPrice.innerText = groceryList[i].price;

//         tr.appendChild(tdName);
//         tr.appendChild(tdPrice);
//         table.appendChild(tr);

//     }   
//     const tr = document.createElement("tr");
//     const tdName = document.createElement("td");
//     tdName.innerText = "Totaalprijs";
//     const tdPrice = document.createElement("td");
//     tdPrice.innerText = groceryList[0].price+groceryList[1].price+groceryList[2].price+groceryList[3].price;
//     tr.appendChild(tdName);
//     tr.appendChild(tdPrice);
//     table.appendChild(tr);

//     const body = document.getElementById("body");
//     body.appendChild(table);
// }

// createTable();

var gradeOne 
var gradeTotal = 0;
for(i = 1 ; i <= 4 ; i++){
gradeOne = document.getElementById('course'+i).innerText;
if((gradeOne[gradeOne.length-3]==1) || (gradeOne[gradeOne.length-3]==2) || (gradeOne[gradeOne.length-3]==3) || (gradeOne[gradeOne.length-3]==4) || 
    (gradeOne[gradeOne.length-3]==5) || (gradeOne[gradeOne.length-3]==6) || (gradeOne[gradeOne.length-3]==7) || (gradeOne[gradeOne.length-3]==8) ||
    (gradeOne[gradeOne.length-3]==9)){
    numberGradeOne = (parseFloat(gradeOne[gradeOne.length-3])+ parseFloat(gradeOne[gradeOne.length-1]/10));
    
    }

    else {
        numberGradeOne = parseFloat(gradeOne[gradeOne.length-1])
    }
    gradeTotal = parseFloat(gradeTotal+numberGradeOne);
    console.log(numberGradeOne);
    console.log(gradeTotal);
}   
var gradeAverage = parseFloat(gradeTotal/4);
//document.write("het gemiddelde is", " : ",gradeAverage);

function addAverage() {
    let table = document.getElementById("grades");
    let row = table.insertRow(4);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "gemiddelde is: ";
    cell2.innerHTML = gradeAverage.toFixed(2);
}

addAverage();




const color = document.getElementById("forColors");
color.classList.add("colors");
console.log(color);





function image(src, height, width) {
    let img = document.createElement("img");
    img.src = src;
    img.height = height;
    img.width = width;
    document.body.appendChild(img);
}

image("random.gif", 150, 150);