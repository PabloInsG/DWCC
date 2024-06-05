function validarNumero(numero) {
    return numero > 0;
}
function imprimirFigura(n) {
if (!validarNumero(n)) {
    console.log("Número no válido. Introduce un número:");
    return;
}
for (var i = 1; i <= n; i++) {
    var fila = "";
    for (var j = 1; j <= i; j++) {
    fila += i + " ";
    }
    console.log(fila.trim());
}
}
var numero = prompt("Introduce un número (>0):");
numero = parseInt(numero);
imprimirFigura(numero);