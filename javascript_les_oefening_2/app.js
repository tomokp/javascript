function myFunction1() {
    let variable = document.getElementById("myText").value;
    
        if (isNaN(variable)!== true) {
        document.getElementById("demo").innerHTML = ""+variable+"x"+variable+"="+variable*variable+"";
        }

        else if (variable == "true") {
        document.getElementById("demo").innerHTML = "dit is een boolean met de waarde true";
        }   

        else if (variable == "false") {
        document.getElementById("demo").innerHTML = "dit is een boolean met de waarde false";
        }   


        else if (typeof variable === "string") {
        variable = variable.toUpperCase();
        console.log(variable);
        document.getElementById("demo").innerHTML = variable
        }
    }

    function myFunction2() {
        let length = document.getElementById("bmiLength").value;
        let weight = document.getElementById("bmiWeight").value;
        sumLength = length/100;
        actualLength = sumLength*sumLength;
        actualBmi = Math.round(weight/actualLength);
        document.getElementById("bmi").innerHTML = actualBmi
        if (actualBmi<18.5) {
        document.getElementById("bmi").innerHTML = "je BMI is"+actualBmi+" en je hebt daarmee ondergewicht"
        }
        else if (actualBmi < 24.9 && actualBmi > 18.5) {
        document.getElementById("bmi").innerHTML = "je BMI is"+actualBmi+" en je hebt daarmee een normaal gewicht"
        }
        else if (actualBmi > 25 && actualBmi < 29.9) {
        document.getElementById("bmi").innerHTML = "je BMI is"+actualBmi+" en je hebt daarmee overgewicht"
        }
        else if (actualBmi > 25.1) {
        document.getElementById("bmi").innerHTML = "je BMI is"+actualBmi+" en je hebt daarmee obesitas"
        }
    }