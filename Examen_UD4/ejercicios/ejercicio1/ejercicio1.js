//Cogemos el elemento P que contiene el texto
var texto = document.querySelector("#texto");

//Creamos la funcion
function cambiar(){
    //Cambiamos el color de fondo y el color de la letra del elemento
    this.style.background = "red";
    this.style.color = "white";
    //Creamos un intervalo de 10 segundos que lo que realiza es poner por defecto el fondo y el color del texto
    setInterval(function(){
        texto.style.background = "white";
        texto.style.color = "black";
    }, 10000)
}

//Añadimos un evento para que cuando clicke encima del elemento realize la funcion
texto.addEventListener("click", cambiar)