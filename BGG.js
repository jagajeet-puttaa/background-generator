var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


//Displaying the default color//
body.style.background = "linear-gradient(to bottom,#ff0000,#ffff00)";
css.textContent = body.style.background + ";";

//To change the background color based on the two inputs given//
function setGradient(){
    body.style.background = "linear-gradient(to bottom," + color1.value + ","+ color2.value + ")";
    css.textContent = body.style.background + ";";
};


color1.addEventListener("input" , setGradient);

color2.addEventListener("input" , setGradient);





var button = document.querySelector("button");


//To generate a random background color//
function randomcolor (){
    var color1 = hexcolorgenerator();
    var color2 = hexcolorgenerator();
    body.style.background = "linear-gradient(to bottom," + color1 + ","+ color2 + ")";
    css.textContent = body.style.background + ";";
  
};


//To generate a random hex number using for loop//
function hexcolorgenerator(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


button.addEventListener("click", randomcolor);
