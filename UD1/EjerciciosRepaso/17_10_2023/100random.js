let usuario = parseInt(prompt(`Cuantos numeros desea introducir:`));
var array = [];
var conjunto = new Set();

for(let i = 0; i < usuario; i++){
    array.push(Math.floor(Math.random() * 100) + 1);
    conjunto.add(array[i]);
}
document.write(`Array: <br>`)
document.write(array, "<br>");

document.write(`Array sin duplicados: <br>`)
for(let elemento of conjunto){
    document.write(elemento, " | ")
}