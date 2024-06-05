var div = document.querySelector('#div');
var boton = document.querySelector('#genera');
var contador = 1;
boton.addEventListener("click", generar )

function generar(){
    var p = document.createElement('p');
    if(contador % 2 == 0){
        p.style.color = "red";
        p.textContent = `Parrafo ${contador}`;
    } else{
        p.style.color = "green";
        p.textContent = `Parrafo ${contador}`;
    }
    div.appendChild(p);
    contador++;
}