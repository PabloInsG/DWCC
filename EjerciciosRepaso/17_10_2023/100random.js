let usuario = parseInt(prompt(`Cuantos numeros desea introducir:`));
var array = [];
for(let i = 0; i < usuario; i++){
    array.push(Math.floor(Math.random() * 100) + 1);
}

document.write(array);