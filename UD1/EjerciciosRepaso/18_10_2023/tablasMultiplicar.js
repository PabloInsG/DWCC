document.write(`<div style="width: 900px; height: 600px; justify-content: space-around">`)
for(let i = 1; i <= 10; i++){
    document.write(`<table border="1" style="text-align: center; border-collapse: collapse; border-color: white; color: white;width: 300px; heigth: 200px; margin-bottom: 10px"><tr><th>Tabla</th><th>Multiplicado</th><th>Resultado</th></tr>`);
    for(let j= 1; j <= 10; j++){
        let resultado = i * j;
        document.write(`<tr><td>${i}</td><td>${j}</td><td>${resultado}</td></tr>`);
    }
}

document.write(`</table></div>`);