var palabra = prompt("Introduce una palabra");
var array = [];
var array2;
array.push(palabra.split(''));
function esPalindromo(){
    if(palabra.length == 1){
        document.write(`Es palindromo<br>`)
    } else if(array == array2){
        document.write('Es palindromo')
    } else{
        document.write(`No es palindromo<br>`)
    }
}
array2 = array.toReversed();

esPalindromo();
document.write("<br>" , array, "<br>" );
document.write(array2, "<br>");