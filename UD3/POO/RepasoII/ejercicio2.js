function crear (x,y) {
    let arr = [];
    for (let i = 0; i < x ; i++){
        arr[i] = [];
        for (let j = 0; j < y; j++){
            arr[i][j] = 0;
        }
    }
    return arr;
}

let x = 3;
let y = 4;

var mostrar = crear(x,y);

for (let i = 0; i < x; i++){
    document.write("<br>");
    for (let j = 0; j < y; j++){
    document.write(mostrar[i][j])
    }
}