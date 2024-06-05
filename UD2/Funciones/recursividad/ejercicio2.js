var usuario = parseInt(prompt("Introduce un numero entero"));

var array = []
function decreciente(){
    if(usuario >= 1){
        array.push(usuario);
        usuario -= 1;
        decreciente();
    }
}

decreciente();
document.write(array);  