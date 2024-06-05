/*
let vector = [1,2,3,4,5];

console.log(vector.length);
console.log(typeof(vector));
console.log(typeof(console));

console.log(vector instanceof Array);
let conjunto = new Set();
console.log(conjunto instanceof Map);
*/

let persona = new Object();
let date = new Date();

/*
persona.nombre = prompt(`Introduce tu nombre`);
persona.apellido = prompt(`Introduce tu apellido`);
persona.edad = parseInt(prompt(`Introduce tu edad`));
*/
persona.anoNacemento = date.getFullYear() - persona.edad;
persona.verPersona = () => {
    document.write("Nombre: ", persona.nombre, "<br>");
    document.write("Apellido: ", persona.apellido, "<br>");
    document.write("Edad: ", persona.edad, "<br>");
    document.write("Año nacimiento: ", persona.anoNacemento);
}

//persona.verPersona();

var viaje = {
    origen: "SCQ",
    destino: "PMI",
    dias: 7,
    precio: 130,
    mostrar: () => {
        console.log(viaje.origen);
        console.log(viaje.destino);
    }
}

//viaje.mostrar();

class Viaje{
    origen = "SCQ";
    destino = "PMI";
    dias = 7;
    precio = 140;
    constructor(or, des, di, pre){
        this.origen = or;
        this.destino = des;
        this.dias = di;
        this.precio = pre;
    }
    mostrar(){
        console.log("Origen: ", this.origen)
        console.log("Destino: ", this.destino)
        console.log("Dias: ", this.dias)
        console.log("Precio: ", this.precio)
    }
}

var miViaje = new Viaje("MAD", "ZAR", 10, 300);
miViaje.mostrar();

Viaje.prototype.costeDiario = function (){
    return this.precio / this.dias;
}
console.log(Viaje.prototype);