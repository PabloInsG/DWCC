function contarRepeticionsPalabras(arrayPalabras) {
    var mapaRepeticions = new Map();
    // Contar repeticións das palabras
    for (var i = 0; i < arrayPalabras.length; i++) {
        var palabra = arrayPalabras[i];
        if (mapaRepeticions.has(palabra)) {
            mapaRepeticions.set(palabra, mapaRepeticions.get(palabra) + 1);
        } else {
            mapaRepeticions.set(palabra, 1);
        }
    }
    return mapaRepeticiones;
}

function leerPalabras() {
    var palabras = [];
    var continuar = true;
    while (continuar) {
        var palabra = prompt('Introduce unha palabra (ou cancela para terminar):');
        if (palabra === null) {
            continuar = false;
        } else {
            palabras.push(palabra);
        }
    }
    return palabras;
}

var arrayPalabras = leerPalabras();
var mapaRepeticions = contarRepeticionsPalabras(arrayPalabras);
console.log('Repeticións das palabras no array:');

for (var [palabra, repeticions] of mapaRepeticions) {
    console.log(palabra + ': ' + repeticions);
}