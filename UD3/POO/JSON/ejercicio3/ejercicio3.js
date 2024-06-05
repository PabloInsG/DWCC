var libro = {
    nombre: "Harry Potter y la Piedra Filosofal",
    autor: "JK Rowling",
    anoPublicacion: 1997
}
var libro2 = {
    nombre: "Harry Potter y la Camara de los Secretos",
    autor: "JK Rowling",
    anoPublicacion: 1998
}
var libro3 = {
    nombre: "Harry Potter y el Prisionero de Azkaban",
    autor: "JK Rowling",
    anoPublicacion: 1999
}

var arr = [libro, libro2, libro3]

for(let i = 0; i < arr.length; i++){
    console.log(arr[i].nombre);
}

console.log(libro);