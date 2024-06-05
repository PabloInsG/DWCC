function salarioValido(salario){
    if(salario <= 1600){
        return true;
    } else{
        return false;
    }
}

function tablaIncrementos(salarioValid){
    if(salarioValido(salarioValid) == true){
        document.write(`<table border="1"><tr><th>Año</th><th>Salario</th></tr>`);
        for(let i = 1; i < 6; i++){
            salarioValid = salarioValid * 1.05; 
            document.write(`<tr><td>${i}</td><td>${salarioValid}</td></tr>`)
        }
    } else{
        return "El salario no puede ser mayor a 1600€"
    }
}

console.log(tablaIncrementos(1600));