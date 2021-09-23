var randomNumber1=Math.floor(Math.random() * 6) +1;
var randomimage="dice"+randomNumber1+".png";
var randomimage1="Images/"+randomimage;

document.querySelectorAll("img")[0].setAttribute("src",randomimage1);

var randomNumber2=Math.floor(Math.random() * 6) +1;
var randomimage="dice"+randomNumber2+".png";
var randomimage2="Images/"+randomimage;

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);


if(randomimage2>randomimage1){
    document.querySelector("h1").innerHTML="Player 2 is winner🤩🥳";
}
else if(randomimage1>randomimage2){
 document.querySelector("h1").innerHTML="Player 1 is winner🤩🥳";
}
else{
    document.querySelector("h1").innerHTML="Draw🙁";
}