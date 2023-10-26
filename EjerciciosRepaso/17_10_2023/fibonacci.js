let usuario = parseInt(prompt(`Introduce un numero:`));

var fibonacci = [0, 1];

for (let i = 2; i < usuario; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

document.write(`Fibonacci del numero introducido: ${fibonacci}`);