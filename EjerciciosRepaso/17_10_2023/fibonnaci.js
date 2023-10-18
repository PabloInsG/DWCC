let usuario = parseInt(prompt(`Introduce un numero:`));

var fibonnaci = [0, 1];

for (let i = 2; i < usuario; i++) {
    fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2];
}

document.write(`Fibonnaci del numero introducido: ${fibonnaci}`);