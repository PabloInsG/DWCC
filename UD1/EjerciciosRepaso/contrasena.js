let usuario = prompt(`Introduce una contraseña`);

var longitud = false;
var caracterEspecial = false;
var mayus = false;

var compararUsuario = usuario.toLowerCase();

for(let i = 0; i < usuario.length; i++){
    if(usuario.length > 8){
        longitud = true;
    }
    if(usuario != compararUsuario){
        mayus = true;
    }
    if(usuario[i].indexOf("-") != -1 || usuario[i].indexOf(":") != -1 || usuario[i].indexOf(";") != -1 || usuario[i].indexOf("_") != -1 || usuario[i].indexOf(",") != -1    ){
        caracterEspecial = true;
    }
}

if(longitud && mayus && caracterEspecial){
    document.write(`Contraseña introducida correctamente`);
}else{
    if(!longitud){
        document.write(`La contraseña tiene que tener mas de 8 caracteres`);
    } else if(!mayus){
        document.write(`La contraseña tiene que tener una letra mayuscula por lo menos`);
    } else if(!caracterEspecial){
        document.write(`La contraseña tiene que tener un caracter especial "-;,_" por lo menos`);
    }
}