var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomDice = "dice"+randomnumber1+".png";
var randomImages = "images/"+randomDice;
image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImages);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "dice"+randomnumber2+".png";
var randomImages2 = "images/"+randomDice2;
image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImages2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player1 Won the Game";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player2 Won the Game";
}
else{
    document.querySelector("h1").innerHTML = "It's a Tie";
}