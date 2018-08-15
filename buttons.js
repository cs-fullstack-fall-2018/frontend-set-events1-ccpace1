var theButton = document.getElementById("button1");
var total1 = document.getElementById("player1Score");
var buttonThe = document.getElementById("button2");
var total2 = document.getElementById("player2Score");
var resetter = document.getElementById("buttonReset");

theButton.addEventListener("click", presses);
buttonThe.addEventListener("click", player2);
resetter.addEventListener("click", reset);


function presses() {
    total1.innerText = parseInt(total1.innerText) +1;
}

function player2(){
    total2.innerText = parseInt(total2.innerText) +1;
}
function reset() {
    total1.innerText = parseInt(total1.innerText) - (parseInt(total1.innerText));
    total2.innerText = parseInt(total2.innerText) - (parseInt(total2.innerText));
}


/*

Step 1:
Complete

Step 2:
Complete

From Kenn
*/