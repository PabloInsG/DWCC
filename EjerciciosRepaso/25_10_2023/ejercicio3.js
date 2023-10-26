var array1 = [1, 2, 4];
var array2 = [3, 5, 6];

var arrayOrdenado = [];

for(let i = 0; i < array1.length; i++){
    arrayOrdenado.push(array1[i]);
    arrayOrdenado.push(array2[i]);
}

document.write("Primer array: ", array1, "<br>");
document.write("Segundo array: ", array2, "<br>");
document.write("Array ordenado: ", arrayOrdenado.sort());

