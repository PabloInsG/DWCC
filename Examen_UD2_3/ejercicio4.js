//Funcion que recibe las cadenas
function recibirCadenas(callback) {
    var cadenas = [];

    for(let i = 0; i < 2; i++) {
        var cadena = prompt("Introduce una cadena de texto:");
        cadenas.push(cadena.trim());
    }

    callback(cadenas);
}
//Funcion que crea el texto final
function crearTextoFinal(cadenas) {
    var textoFinal = "Texto final sin espacios: ";

    for (var i = 0; i < cadenas.length; i++) {
        textoFinal += cadenas[i];
    }

    return imprimirTextoFinal(textoFinal.trim());
}

//Funcion que imprime el texto final
function imprimirTextoFinal(textoFinal){
    document.write(textoFinal);
}

// Llamada a la funcion, pasando la funcion de crearTextoFinal como parámetro
recibirCadenas(crearTextoFinal);