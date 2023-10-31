document.write(`Numeros impares no multiplos de 3 y 7 del 1 al 100: `)
/*Version con for
for(let i = 0; i < 100; i++){
    if(i % 2 != 0){
        if(i % 3 != 0 && i % 7 != 0){
            document.write(`${i} <br>`);
        }
    }
}
*/
var contador = 0;
/*Version con while
while(contador < 100){
    contador++;
    if(contador % 2 != 0){
        if(contador % 3 != 0 && contador % 7 != 0){
            document.write(`${contador} <br>`);
        }
    }
}
*/
//Version do while
do{
    contador++;
    if(contador % 2 != 0){
        if(contador % 3 != 0 && contador % 7 != 0){
            document.write(`| ${contador} `);
        }
    }
} while(contador < 100)
