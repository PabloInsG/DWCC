var array = [];
var suma = 0; 
for(let i = 0; i < 100; i++){
    array[i] = Math.floor(Math.random() * 10) + 1;
    suma += array[i];
}
if(suma > 500){
    document.write("La suma del array es mas de 500: ", suma);
} else{
    document.write("La suma del array es menos de 500: ", suma);
}
