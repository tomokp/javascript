window.addEventListener("load", init);

function init(){
    const button = document.getElementById("submit");
    button.addEventListener("click", clickEventHandler);
}


const button = document.getElementById("submit");
button.addEventListener("click", clickEventHandler);

function clickEventHandler(event){
    console.log(event);
}
