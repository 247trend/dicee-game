let rand1 = Math.ceil(Math.random()*6);
let rand2 = Math.ceil(Math.random()*6);
let imageSrc1 = "./images/dice" + rand1 + ".png";
let imageSrc2 = "./images/dice" + rand2 + ".png";
document.querySelector(".img1").setAttribute("src",imageSrc1);
document.querySelector(".img2").setAttribute("src",imageSrc2);

if (rand1 > rand2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (rand1 < rand2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else{
    document.querySelector("h1").innerHTML = "Draw !";
}