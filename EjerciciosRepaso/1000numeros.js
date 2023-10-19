var array = [];
let contador = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;
let contador7 = 0;
let contador8 = 0;
let contador9 = 0;
let contador10 = 0;
for(let i = 0; i < 1000; i++){
    array[i] = Math.floor(Math.random() * 10) + 1;
    if(array[i] == 1){
        contador++;
    } else if(array[i] == 2){
        contador2++;
    } else if(array[i] == 3){
        contador3++;
    } else if(array[i] == 4){
        contador4++;
    } else if(array[i] == 5){
        contador5++;
    } else if(array[i] == 6){
        contador6++;
    } else if(array[i] == 7){
        contador7++;
    } else if(array[i] == 8){
        contador8++;
    } else if(array[i] == 9){
        contador9++;
    } else if(array[i] == 10){
        contador10++;
    }
}
document.write(`El numero 1 aparece ${contador}<br>`);
document.write(`El numero 2 aparece ${contador2}<br>`);
document.write(`El numero 3 aparece ${contador3}<br>`);
document.write(`El numero 4 aparece ${contador4}<br>`);
document.write(`El numero 5 aparece ${contador5}<br>`);
document.write(`El numero 6 aparece ${contador6}<br>`);
document.write(`El numero 7 aparece ${contador7}<br>`);
document.write(`El numero 8 aparece ${contador8}<br>`);
document.write(`El numero 9 aparece ${contador9}<br>`);
document.write(`El numero 10 aparece ${contador10}`);