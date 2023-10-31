let usuario = prompt(`Introduczca un correo electronico:`);
var tieneArroba = false;
var regex = /[\s,;:!"?()+*\$%<>{}\[\]]/g;
var tieneCaracterEspecial = false;

for(let i = 0; i < usuario.length; i++){
    if(!usuario[i].indexOf("@")){
        tieneArroba = true;
    }
    if(usuario[i].match(regex)){
        tieneCaracterEspecial = true;
    }
}

if(tieneArroba && !tieneCaracterEspecial){
    document.write("Correo introducido correcto")
} else{
    document.write("Correo introducido incorrecto")
}