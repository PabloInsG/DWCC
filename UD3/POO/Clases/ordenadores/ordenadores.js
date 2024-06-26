class Ordenador {
    constructor(marca, modelo, ram, discoDuro, pantalla){
        if(ram == undefined){
            this.marca = marca;
            this.modelo = modelo;
            this.ram = 4;
            this.discoDuro = discoDuro;
            this.pantalla = pantalla;
        } else if(discoDuro == undefined){
            this.marca = marca; 
            this.modelo = modelo;
            this.ram = ram;
            this.discoDuro = 512;
            this.pantalla = pantalla;
        } else if(pantalla == undefined){
            this.marca = marca;
            this.modelo = modelo;
            this.ram = ram;
            this.discoDuro = discoDuro;
            this.pantalla = 17;
        } else{
            this.marca = marca;
            this.modelo = modelo;
            this.ram = ram;
            this.discoDuro = discoDuro;
            this.pantalla = pantalla;
        }
    }

    toString(){
        document.write(`<hr>`)
        document.write(`Marca: ${this.marca}<br>`)
        document.write(`Modelo: ${this.modelo}<br>`)
        document.write(`Capacidad RAM: ${this.ram}GB<br>`)
        document.write(`Capacidad disco duro: ${this.discoDuro}GB<br>`)
        document.write(`Pulgadas Pantalla: ${this.pantalla}"<br>`)
        document.write(`<hr>`)
    }
}

var marca;
var modelo;

do{
    marca = prompt("Introduce una marca de ordenadores:");
    modelo = prompt("Introduce un modelo de ordenador");
} while((marca == undefined && modelo == undefined) || (marca == ""  || modelo == ""));

if(marca != "" && modelo != ""){
    var ordena = new Ordenador(marca, modelo, 16, 1000, 24.8);
    ordena.toString();
}

