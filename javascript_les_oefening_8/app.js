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


const gradeOne = document.getElementById('course1').innerText;
console.log(gradeOne[gradeOne.length-1]);