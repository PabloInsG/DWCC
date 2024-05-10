//Creamos la funcion cargar que recibe 3 elementos por parametro
function cargar(a, b, c){
    //Los metemos en un array y los devolvemos
    var array = [a, b, c];
    return array;
}

//Creamos la funcion mostrar que recibe 3 elementos por parametro
function mostrar(a, b, c){
    //Los añadimos a un array
    var array = [a, b, c];
    //Recorremos el array
    for(let i = 0; i< array.length; i++){
        //Los sacamos por pantalla
        console.log(array[i]);
    }
}

//Exportamos las funciones
export {
    cargar,
    mostrar
}