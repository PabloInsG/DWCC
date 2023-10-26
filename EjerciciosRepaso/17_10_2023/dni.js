var usuario = prompt(`Introduce tus numeros de dni para calcular la letra:`);

var mapaDNI = new Map([
    [0, "T"],
    [1, "R"],
    [2, "W"],
    [3, "A"],
    [4, "G"],
    [5, "M"],
    [6, "Y"],
    [7, "F"],
    [8, "P"],
    [9, "D"],
    [10, "X"],
    [11, "B"],
    [12, "N"],
    [13, "J"],
    [14, "Z"],
    [15, "S"],
    [16, "Q"],
    [17, "V"],
    [18, "H"],
    [19, "L"],
    [20, "C"],
    [21, "K"],
    [22, "E"]
]);

var modulo = usuario % 23;
if(Number(usuario.length) == 8){
    for(let [numero, letra] of mapaDNI){
        if(numero == modulo){
            document.write(`La letra de tu DNI es: ${letra}`);
        }
    }
}else if(!Number(usuario)){
    document.write(`Solo se pueden introducir numeros`);
} else{
    document.write(`No puedes introducir mas de 8 numeros`);
}

