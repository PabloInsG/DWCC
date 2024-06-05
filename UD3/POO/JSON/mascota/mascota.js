class Mascota{
    nome = "";
    direccion = "";
    nim = 0;
    edad = 0;
    constructor (nome, direccion, nim, edad){
        this.nome = nome;
        this.direccion = direccion;
        this.nim = nim;
        this.edad = edad;
    }
}

var perro = new Mascota("Kuma", "Zas", 1243, 3);

console.log(JSON.stringify(perro));