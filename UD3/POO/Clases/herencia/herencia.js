class Miembro{
    constructor(nombre, alta, estado){
        this.nombre = nombre;
        this.alta = alta;
        this.estado = estado;
    }
}

class Alumnos extends Miembro {
    constructor(nombre, alta, estado, nAsignaturas){
        super(nombre, alta, estado);
        this.nAsignaturas = nAsignaturas;
    }

    verDatos(){
        console.log(this.nombre)
        console.log(this.alta)
        console.log(this.estado)
        console.log(this.nAsignaturas)
    } 
}

var alu = new Alumnos("Pablo", "13/10/2003", "Vigente", 10);

alu.verDatos();