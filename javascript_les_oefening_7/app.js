//let me = {
//    name: "Tom",
//    age: "17",
//    previousDiploma: "Havo",
//}

//document.write(me);
//console.log(me);
//me.taal = "Nederlands";
//console.log(me);


//let brommer = {
//    naam: "brommer",
//    wielen: "2"
//}
//me.vervoersmiddel = brommer;


//me.namen = ["Leo", "Petra", "Mandy", "Opa", "Oma"]
//console.log(me);
//function informationVehicle() {
//console.log("Mijn favoriete vervoersmiddel is de", me.vervoersmiddel.naam, "en die heeft", me.vervoersmiddel.wielen, "wielen.")
//}
//numberNames = me.namen.length;
//function informationNames() {
//for(i=0 ; i<numberNames ; i++){
//   console.log(me.namen[i])
//}
//}

//meVehicle : informationVehicle();
//meNames = informationNames();
//console.log(me);
//informationVehicle();
//informationNames();


let lapRounds = {
    times: [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12],
}
console.log(lapRounds)



const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: 102,
        salaryPerHour: 200
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: 12,
        salaryPerHour: 2200
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: 40,
        salaryPerHour: 3000
    }
]

length = teachers.length;

for(i=0 ; i<length ; i++){
console.log("I have a ",teachers[i].profession," named ",teachers[i].name," and he likes to work on a ",teachers[i].brand," computer")

}

for(i=0 ; i<length ; i++){
    console.log(teachers[i].name,"makes",(teachers[i].salaryPerHour/teachers[i].hoursPerWeek).toFixed(2),"an hour")
    
    }

