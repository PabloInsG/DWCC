document.querySelector('#boton').onclick = () =>{
    function comprobarNumero(n){
        if(n < 1 || n > 10){
            throw new RangeError("El numero no esta entre el 1 y el 10");
        } else{
            console.log(n)
        }
    }

    try{
        var numero = document.querySelector('#numero').value;
        comprobarNumero(numero);
    } catch(error){
        console.log(error.name + ": " + error.message);
    }
};
