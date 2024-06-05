var usuario = Number(prompt("Introduce tu edad:"));
        
function validarNumero(usuario){
        if(usuario >= 0 && usuario <= 120){
            return true;
        } else{
            return false;
        }
}

function estadoPersona(validar){
    if(validarNumero(usuario) == true){
        if(validar >= 0 && validar <= 3){
            return "Bebe";
        } else if(validar >= 3 && validar <= 11){
            return "Neno";
        } else if(validar >= 12 && validar <= 18){
            return "Adolescente";
        } else if(validar >= 19 && validar <= 99){
            return "Adulto";
        }
    } else{
        return "Edad introducida incorrecta";
    }
}

console.log(estadoPersona(usuario));