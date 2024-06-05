class Poblacion{
    nombre = "";
    cp = "";
    constructor(nombre, cp){
        this.nombre = nombre;
        this.cp = cp;
    }
}

let nombre = "";
let cp = "";

var array = new Array();

for(let i = 0; i < 2; i++){
    nombre = prompt("Introduce el nombre de la poblacion")
    cp = prompt("Introduce el cp de la poblacion")
    var pueblo = new Poblacion(nombre, cp);
    array.push(pueblo);
}

var atributos = [];
var c = 0;
var valores = [];

for(let j = 0; j < array.length; j++){
    for(elemento in array[j]){
        atributos[c] = elemento;
        c++
    }
    valores = Object.values(array[j]);
    for(let k = 0; k < atributos.length; k++){
        document.write(`${atributos[k]}: ${valores[k]}</br>`)
    }
}