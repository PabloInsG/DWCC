var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 3, 4];
var comprobar = [];


if(array1.length == array2.length){
    for(let i = 0; i < array1.length; i++){
        if(array1[i] == array2[i]){
            comprobar.push(1);
        } else{
            comprobar.push(0);
        }
    }
    if(comprobar.includes(0)){
        document.write("Los arrays son distintos");
    } else{
        document.write("Los arrays son iguales");
    }
} else{
    document.write("Los arrays son distintos");
}
