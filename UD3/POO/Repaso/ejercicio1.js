var mapa = new Map();

mapa.set("1", "La Caza");
mapa.set("2", "La Pesca");

if(mapa instanceof Map){
    for(let [codigo, titulo] of mapa){
        document.write(`${codigo} - ${titulo}<br>`)
    }
}

var obj2 = new Array();


class Persona {
    dni = "";
    nombre = "";
    apellido = "";
    constructor(dni, nombre, apellido){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido= apellido;
    }

    devolverDatos(){
        return `${this.dni} ${this.nombre} ${this.apellido}`
    }
}


var persona1 = new Persona("43231673E", "Pablo", "Insua Gerpe");
var persona2 = new Persona("43231673Z", "Carlos", "Aldariz Toja");

obj2.push(persona1.devolverDatos(), persona2.devolverDatos());

if(obj2 instanceof Array){
    for(let i = 0; i < obj2.length; i++){
        document.write(`${obj2[i]}</br>`);
    }
}

var casa = new Object();

casa.numero = 3;
casa.poblacion = "A Guidiña"
casa.verInfo = function(){
    document.write("Número: ", this.numero, "<br>")
    document.write("Población: ", this.poblacion)
}


if(casa instanceof Object){
    casa.verInfo()
}


console.log(mapa instanceof Map);
console.log(obj2 instanceof Array);
console.log(casa instanceof Object);