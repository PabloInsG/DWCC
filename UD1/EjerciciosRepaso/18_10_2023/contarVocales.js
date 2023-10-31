var cadena = "Hola soy Pepe";
var cadenaMinus = cadena.toLowerCase();
var contadorA = 0;
var contadorE = 0;
var contadorI = 0;
var contadorO = 0;
var contadorU = 0;

for(let i = 0; i < cadenaMinus.length; i++){
    if(cadenaMinus[i] == "a"){
        contadorA++;
    } else if(cadenaMinus[i] == "e"){
        contadorE++;
    } else if(cadenaMinus[i] == "i"){
        contadorI++;
    }else if(cadenaMinus[i] == "o"){
        contadorO++;
    }else if(cadenaMinus[i] == "u"){
        contadorU++;
    }
}

document.write(`Contador de vocales de la cadena "${cadena}": `);
document.write(`a: ${contadorA}, e: ${contadorE}, i: ${contadorI}, o: ${contadorO}, u: ${contadorU}`);
