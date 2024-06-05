let usuario = parseInt(prompt("Introduce un numero entre el 2 y el 10"));

function comprobarNumero(n){
    if(n < 2 || n > 10 || isNaN(n)){
        throw new RangeError("El numero no esta entre el 2 y el 10");
    } else{
        let array = [];
        for(let i = 0; i < n ; i++){
            array[i] = i;
        }
        //array.length = n
        console.log(array.length);
    }
}

try{
    comprobarNumero(usuario);
} catch(error){
    if(error instanceof RangeError){
        console.log(error.name + ": " + error.message);
    }
}