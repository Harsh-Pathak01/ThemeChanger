let yellow = document.getElementById("box1");
let green = document.getElementById("box2");
let red = document.getElementById("box3");
let blue = document.getElementById("box4");


yellow.addEventListener("click", () => {
        document.querySelector("body").style.backgroundColor = "yellow";
    
}) 

blue.addEventListener("click", () => {
        document.querySelector("body").style.backgroundColor = "blue";
    
}) 

red.addEventListener("click", () => {
        document.querySelector("body").style.backgroundColor = "red";
    
}) 

green.addEventListener("click", () => {
        document.querySelector("body").style.backgroundColor = "greenyellow";
    
}) 
