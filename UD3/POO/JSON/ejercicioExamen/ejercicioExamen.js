class Persona {
    nome = "";
    apellidos = "";
    edad = 0;
    constructor(nome, apellidos, edad){
        this.nome = nome;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

var pepe = new Persona("Pepe", "Juan", 33);