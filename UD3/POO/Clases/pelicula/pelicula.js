class Pelicula {
    director = "";
    fecha = 0;
    actores = "";
    titulo = "";
    presupuesto = 0.0;

    constructor(director, fecha, actores, titulo, presupuesto){
        if(fecha == undefined){
            this.director = director;
            this.fecha = "";
            this.actores = actores;
            this.titulo = titulo;
            this.presupuesto = presupuesto;
        } else if(presupuesto == undefined){
            this.director = director;
            this.fecha = fecha;
            this.actores = actores;
            this.titulo = titulo;
            this.presupuesto = "";
        } else{
            this.director = director;
            this.fecha = fecha;
            this.actores = actores;
            this.titulo = titulo;
            this.presupuesto = presupuesto;
        }
    }

    observador(){
        document.write(`<hr>`)
        document.write(`Director: ${this.director} <br>`)
        document.write(`Fecha de estreno: ${this.fecha} <br>`)
        document.write(`Actores: ${this.actores} <br>`)
        document.write(`Titulo: ${this.titulo} <br>`)
        document.write(`Presupuesto: ${this.presupuesto}`)
        document.write(`<hr>`)
    }

    edadPelicula(){
        var ano = new Date();
        var edad = ano.getFullYear() - this.fecha;
        if(this.fecha != ""){
            document.write(`Edad de la pelicula: ${edad}`); 
        } else{
            document.write(`Se desconoce la fecha de lanzamiento de la pelicula`); 
        }
    }
}
/*
class PeliculaSinPresupuesto extends Pelicula {
    constructor(director, fecha, actores, titulo){
        super(director, fecha, actores, titulo);
    }

    observador(){
        document.write(`<hr>`)
        document.write(`Director: ${this.director} <br>`)
        document.write(`Fecha de estreno: ${this.fecha} <br>`)
        document.write(`Actores: ${this.actores} <br>`)
        document.write(`Titulo: ${this.titulo} <br>`)
        document.write(`<hr>`)
    }
}

class PeliculaSinFecha extends Pelicula {
    constructor(director, actores, titulo, presupuesto){
        super(director, actores, titulo, presupuesto);
    }

    observador(){
        document.write(`<hr>`)
        document.write(`Director: ${this.director} <br>`)
        document.write(`Actores: ${this.actores} <br>`)
        document.write(`Titulo: ${this.titulo} <br>`)
        document.write(`Presupuesto: ${this.presupuesto} <br>`)
        document.write(`<hr>`)
    }

    edadPelicula(){
        document.write("Se desconoce la fecha de lanzamiento de esta pelicula");
    }
}
*/
let director = prompt(`Introduce el director`);
let fecha = parseInt(prompt(`Introduce la fecha de estreno`));
let actores = prompt(`Introduce los actores`);
let titulo = prompt(`Introduce el titulo`);
let presupuesto = parseFloat(prompt(`Introduce el presupuesto`));

var movie = new Pelicula(director,  fecha, actores, titulo, presupuesto);
/*var movie2 = new PeliculaSinPresupuesto(prompt(`Introduce el director`), prompt(`Introduce la fecha de estreno`), prompt(`Introduce los actores`), prompt(`Introduce el titulo`));
var movie3 = new PeliculaSinFecha(prompt(`Introduce el director`), prompt(`Introduce los actores`), prompt(`Introduce el titulo`), prompt(`Introduce el presupuesto`));
*/

let indice = Object.getOwnPropertyNames(movie);
/* Opcion 2:
    let atributos = []
    let i = 0;
    for(elemento in movie){
        atributos[i] = elemento;
        i++;
    }
*/

let valor = Object.values(movie);

for(let i = 0; i < indice.length; i++){
    console.log(`${indice[i]}: ${valor[i]}`);
}



movie.observador()
movie.edadPelicula();
/*
movie2.observador()
movie2.edadPelicula();

movie3.observador()
movie3.edadPelicula();
*/