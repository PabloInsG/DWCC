function cambiar(){
    rojo.style.background = "lightblue";
    azul.style.background = "red";
    var foto1 = document.querySelector("#foto1")
    var foto2 = document.querySelector("#foto2")
    foto1.src = "manchester-cityc.png";
    foto2.src = "manchester-united-logo-512x512.png";
}

function reset(){
    azul.style.background = "lightblue";
    rojo.style.background = "red";
    foto1.src = "manchester-united-logo-512x512.png";
    foto2.src = "manchester-cityc.png";
}

var rojo = document.querySelector('#div2')
var azul = document.querySelector('#div1')

rojo.addEventListener("mouseover", cambiar);
rojo.addEventListener("mouseout", reset)