var palabra1 = "ESTANCO";
var palabra2 = "ACESTOS";
var arrayPalabra1 = [];
var arrayPalabra2 = [];

var esAnagrama = false;

if(palabra1.length == palabra2.length){
    for(let i = 0; i < palabra1.length; i++){
        arrayPalabra1.push(palabra1[i]);
    }
    for(let i = 0; i < palabra2.length; i++){
        arrayPalabra2.push(palabra2[i]);
    }
    arrayPalabra1.sort();
    arrayPalabra2.sort();
    for(let i = 0; i < arrayPalabra1.length; i++){
        if(arrayPalabra1[i] == arrayPalabra2[i]){
            esAnagrama = true;
        }
    }
    if(esAnagrama){
        document.write(`Las dos palabras son anagramas<br>`);
        document.write(`${arrayPalabra1}<br>`);
        document.write(`${arrayPalabra2}<br>`);
    }
} else{
    document.write(`Las palabras no son anagramas`)
}

