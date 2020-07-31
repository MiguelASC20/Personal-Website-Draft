let colorDiv = document.getElementById("title");
let imgDiv = document.getElementById("pokemon");
let colorDiv2 = document.querySelectorAll("a");

function changeColor() {
    let num1 = Math.random() * 255;
    let num2 = Math.random() * 255;
    let num3 = Math.random() * 255;
    console.log(num1,num2,num3);
    colorDiv.style.color = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
    setTimeout(changeColor, 500);
 }

 changeColor();

 imgDiv.onmouseover = function() {
    imgDiv.style.opacity = "0.8";
    imgDiv.onclick = function() {
        window.location.href = 'https://www.pokemon.com/us/';
    }
}
imgDiv.onmouseout = function() {
    imgDiv.style.opacity = "1";
}

function changeColor2() {
    let num4 = Math.random() * 255;
    let num5 = Math.random() * 255;
    let num6 = Math.random() * 255;
    console.log(num4,num5,num6);
    colorDiv2[0].style.color = "rgb(" + num4 + ", " + num5 + ", " + num6 + ")";
    colorDiv2[1].style.color = "rgb(" + num4 + ", " + num5 + ", " + num6 + ")";
    colorDiv2[2].style.color = "rgb(" + num4 + ", " + num5 + ", " + num6 + ")";
    colorDiv2[3].style.color = "rgb(" + num4 + ", " + num5 + ", " + num6 + ")";
    setTimeout(changeColor2, 500);
 }
 changeColor2();