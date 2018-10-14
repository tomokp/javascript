        const button = document.getElementById("submit");
        button.addEventListener("click", clickEventHandler); //hier zeg ik dat als je op de knop drukt dat je de functie clickeventhandler start
        i = 0                                                  //hier geef ik definieer ik i omdat ik die later nog wil gebruiken


function clickEventHandler(event){                         //dit is mijn functie clickeventhandler
        i= i+1;
        console.log(i);
        document.getElementById("text").innerHTML = i;     //elke keer als je op de knop drukt wordt i met 1 verhoogd en wordt het in het html bestand geschreven
        if(i==10){                                      //als i bij 10 is geeft hij er een nieuwe class aan die zorgt dat de knop kleiner wordt
            var element = document.getElementById("submit");
            element.classList.remove("submitStyleOne");
            element.classList.add("submitStyleTwo");
        }
        else if(i==20){                                 //als i bij de 20 is geeft hij er weer een andere class aan zodat het knopje nog kleiner wordt
            var element = document.getElementById("submit");
            element.classList.remove("submitStyleTwo");
            element.classList.add("submitStyleThree");
        }
    }



    

    const submitButton = document.getElementById("submit-btn");
     submitButton.addEventListener("click", clickEventHandlerTwo);   //als je op de button met id submit-btn klikt wordt de functie clickevenhandlertwo gestart
     var priceTotal = 0;                                            //ik definieer hier pricetotal zodat ik die later kan gebruiken
    
     function clickEventHandlerTwo(event){                  //dit is mijn functie clickeventhandlertwo die voegt de ingevoerde waardes toe aan de html pagina en voegt er een knop aan toe om de waardes weer te verwijderen, 
         event.preventDefault();                            //ook telt hij alle prijzen van de producten bij elkaar op en laat dit zien op de html pagina, als je op de knop verwijder klikt wordt dit ook weer van het totaal afgehaald
         var nameInput = document.getElementById("nameInput").value;
         console.log(nameInput);
         
         var priceInput = document.getElementById("priceInput").value;
         console.log(priceInput);

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
        var t = document.createTextNode("Remove product");
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
        
         
     }