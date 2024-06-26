class Telefono {
    constructor(numero){
        if(numero == undefined){
            this.numero = "";
        } else{
            this.numero = numero;
        }
    }

    verDatos(){
        console.log(`Numero: ${this.numero}`)
    }
}

class Fijo extends Telefono {
    constructor(numero, prefijo, cable){
        super(numero);
        if(prefijo == undefined){
            this.prefijo = "";
            this.cable = cable;
        } else if(cable == undefined){
            this.prefijo = prefijo;
            this.cable = cable;
        } else{
            this.prefijo = prefijo;
            this.cable = cable;
        }
    }
    
    verDatos(){
        console.log("-----------------------------------")
        console.log("Telefono Fijo:")
        console.log(`Numero Completo: ${this.prefijo} ${this.numero}`);
        console.log(`Prefijo: ${this.prefijo}`);
        console.log(`Cable: ${this.cable}`);
    }
}

class Movil extends Telefono {
    constructor(numero, marca, sOperativo, almacenamiento){
        super(numero);
        if(marca == undefined){
            this.marca = "";
            this.sOperativo = sOperativo;
            this.almacenamiento = almacenamiento;
        } else if(sOperativo == undefined){
            this.marca = marca;
            this.sOperativo = "";
            this.almacenamiento = almacenamiento;
        } else if(almacenamiento == undefined){
            this.marca = marca;
            this.sOperativo = sOperativo;
            this.almacenamiento = "";
        } else{
            this.marca = marca;
            this.sOperativo = sOperativo;
            this.almacenamiento = almacenamiento;
        }
        
    }

    verDatos(){
        console.log("-----------------------------------")
        console.log("Telefono movil:")
        console.log(`Numero: ${this.numero}`)
        console.log(`Marca: ${this.marca}`)
        console.log(`Sistema Operativo: ${this.sOperativo}`)
        console.log(`Almacenamiento: ${this.almacenamiento}`)
    }
}


var fijo = new Fijo("627 715", "910", "Si");
var movil = new Movil("698 13 68 17", "Apple", "IOS", "128GB");

var arr = [];

for(let j = 0; j < 2; j++){
    var telefono = new Movil(prompt("Introduce el numero de telefono"), prompt("Introduce la marca del telefono"), prompt("Introduce el sistema opertaivo del telefono"), prompt("Introduce la capacidad del telefono"))
    arr.push(telefono)
}

for(let i = 0; i < arr.length; i++){
    arr[i].verDatos();
}