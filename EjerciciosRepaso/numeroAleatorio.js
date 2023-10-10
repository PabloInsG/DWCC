var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var salir = 0;
var acertar = false;
var contadorIntentos = 1;
let numeroUsuario = parseFloat(prompt(`Introduce un numero entre el 1 y el 100 (0 para salir):`));

while(!acertar && numeroUsuario != salir){
    if(numeroUsuario > 0 && numeroUsuario < 100){
        if(numeroAleatorio == numeroUsuario){
            acertar = true;
            document.write(`<h1>Muy bien acertaste</h1>`);
            document.write(`<br>Numero de intentos: ${contadorIntentos}`);
        } else if(numeroAleatorio > numeroUsuario){
            numeroUsuario = prompt(`El numero es mayor al que se introdujo, introduce otro (0 para salir):`);
            contadorIntentos++;
        } else if(numeroAleatorio < numeroUsuario){
            numeroUsuario = prompt(`El numero es menor al que se introdujo, introduce otro (0 para salir):`);
            contadorIntentos++;
        }
    } else if(numeroUsuario != Number(numeroUsuario)){
        numeroUsuario = prompt(`Debes introducir un numero, intentalo de nuevo (0 para salir):`);
        contadorIntentos++;
    } else{
        numeroUsuario = prompt(`Debes introducir un numero entre el 1 y el 100, intentalo de nuevo (0 para salir):`);
        contadorIntentos++;
    }
}