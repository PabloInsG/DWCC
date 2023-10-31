var cadena = "ana";
var palindromo = "";
for(let i = cadena.length - 1; i >= 0; i--){
    palindromo += cadena[i];
}
if(palindromo == cadena){
    document.write(`Es palindromo<br>`)
} else{
    document.write(`No es palindromo<br>`)
}
document.write(palindromo);