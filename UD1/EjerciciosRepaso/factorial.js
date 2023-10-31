let usuario = parseInt(prompt(`Numero que desea hacer su factorial`));
let suma = 1;
for(let i = 1; i <= usuario; i++){
    suma *=  i; 
}
document.write(`El factorial de ${usuario} es: ${suma}<br>`)
