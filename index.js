var randomNumber1=Math.floor(Math.random() * 6) +1;
var randomimage="dice"+randomNumber1+".png";
var randomimage1="Images/"+randomimage;

document.querySelectorAll("img")[0].setAttribute("src",randomimage1);

var randomNumber2=Math.floor(Math.random() * 6) +1;
var randomimage="dice"+randomNumber2+".png";
var randomimage2="Images/"+randomimage;

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);
