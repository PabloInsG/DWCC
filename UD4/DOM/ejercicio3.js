var contador = 1;
function add(){
    var li = document.createElement('li');
    li.textContent = contador;
    contador++;
    lista.append(li);
}

function eliminar(){
    lista.lastChild.remove();
}

var lista = document.querySelector("#lista");
var boton = document.querySelector("#boton");
var boton2 = document.querySelector("#boton2");

boton.addEventListener("click", add)
boton2.addEventListener("click", eliminar)