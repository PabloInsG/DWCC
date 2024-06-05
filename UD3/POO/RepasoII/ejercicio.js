function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imprimirPar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + ' é par');
    } else {
        console.log(numero + ' é impar');
    }
}
var numeros = [];
for (var i = 0; i < 500; i++) {
    numeros.push(generarNumeroAleatorio(1, 500));
}

for (var i = 0; i < numeros.length; i++) {
    imprimirPar(numeros[i]);
}