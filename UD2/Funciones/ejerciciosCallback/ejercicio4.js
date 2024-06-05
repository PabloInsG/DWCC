usuario = ""

function cadena(usuario){
    var texto = "";
    do{
        usuario = prompt("Introduce una cadena");
        texto =  texto + usuario + " ";
    } while(usuario != "")
    return texto;
}

function cadenaFinal(texto, callback){
    texto = callback();
    return texto;
}

document.write(cadenaFinal(usuario, cadena));