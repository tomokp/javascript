// window.addEventListener("load", init);

// function init(){
//     const button = document.getElementById("submit");
//     button.addEventListener("click", clickEventHandler);
// }


// // const button = document.getElementById("submit");
// // button.addEventListener("click", clickEventHandler);

// // function clickEventHandler(event){
// //     console.log(event);
// // }
// //var buttonId

// // const container = document.getElementById("container");
// // container.addEventListener("click", clickEventHandler);

// // function clickEventHandler(event){
// //     if (event.target.nodeName == "IMG") {
// //         console.log(event.target.nodeName);
// //     }
// // }


// const submitButton = document.getElementById("submit-btn");
// submitButton.addEventListener("click", clickEventHandler);

// function clickEventHandler(event){
//     event.preventDefault();
//     const inputText = document.getElementById("textInput").value;
//     if(inputText == ""){
//         document.getElementById("text").innerHTML = "je hebt niet echt wat nuttigs ingevuld";
//     }
//     else {
//         document.getElementById("text").innerHTML = inputText;
//     }
// }






        const button = document.getElementById("submit");
        button.addEventListener("click", clickEventHandler);
        i = 0


function clickEventHandler(event){
        i= i+1;
        console.log(i);
        document.getElementById("text").innerHTML = i;
        if(i==10){
            var element = document.getElementById("submit");
            element.classList.remove("submitStyleOne");
            element.classList.add("submitStyleTwo");
        }
        else if(i==20){
            var element = document.getElementById("submit");
            element.classList.remove("submitStyleTwo");
            element.classList.add("submitStyleThree");
        }
    }



    

    const submitButton = document.getElementById("submit-btn");
     submitButton.addEventListener("click", clickEventHandlerTwo);
     var priceTotal = 0;
    
     function clickEventHandlerTwo(event){
         event.preventDefault();
         var nameInput = document.getElementById("nameInput").value;
         console.log(nameInput);
         //document.getElementById("productJs").innerHTML = nameInput;
         var priceInput = document.getElementById("priceInput").value;
         console.log(priceInput);
         //document.getElementById("productJs").innerHTML = priceInput;

         let table = document.getElementById("completeList");
        let row = table.insertRow(4);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = nameInput;
        
        

        cell2.innerHTML = priceInput;
        priceInput = parseFloat(priceInput);
        priceTotal = parseFloat(priceTotal+priceInput);
        console.log(priceTotal);
        document.getElementById("priceTotalHtml").innerHTML = "Total price = " + " " + priceTotal;



        let cell3 = row.insertCell(2);
        cell3.id = "idTest"
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("CLICK ME");
        btn.appendChild(t);
        document.getElementById("idTest").appendChild(btn);

        document.getElementById("idTest").addEventListener("click", removeFunction);

        function removeFunction(event){

            console.log(priceInput);
            console.log(priceTotal);
            priceTotal = parseFloat(priceTotal-priceInput);
            document.getElementById("priceTotalHtml").innerHTML = "Total price = " + " " + priceTotal;

            for(i=0 ; i<=3 ; i++){
            console.log("JA MAN");
            let table = document.getElementById("completeList");
            let cell1 = row.deleteCell(0);
            
            }
           
            
        }
        //priceTotalHtml
         
     }