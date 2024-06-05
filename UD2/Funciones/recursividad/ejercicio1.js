var usuario = prompt("Introduce el maximo de elementos del array:");
var ar = ()=>{
    var array = []
    for(let i = 0; i < usuario; i++){
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}


var arrayRecursivo = [];
function aleatorio(){
    if(arrayRecursivo.length < usuario){
        arrayRecursivo.push(Math.floor(Math.random() * 100) + 1);
        aleatorio();
    }
}

aleatorio();
document.write(arrayRecursivo);
console.log(ar());