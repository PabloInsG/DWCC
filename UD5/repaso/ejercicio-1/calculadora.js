function suma(a, b){
    let p = document.createElement('p');
    var suma = parseInt(a) + parseInt(b);
    p.textContent = "Suma: " + suma;
    return p;
}
function resta(a, b){
    let p = document.createElement('p');
    var resta = a - b;
    p.textContent = "Resta: " + resta;
    return p;
}
function multiplicacion(a, b){
    let p = document.createElement('p');
    var multiplicacion = a * b;
    p.textContent = "Multiplicacion: " + multiplicacion;
    return p;
}

function division(a, b){
    let p = document.createElement('p');
    var division = a / b;
    p.textContent = "Division: " + division;
    return p;
}

export{
        suma,
        resta,
        multiplicacion,
        division
}