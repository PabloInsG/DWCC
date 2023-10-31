var salir = 0;
var media = 0;
var totalSuministro = 0;
var totalComida = 0;
var totalVarios = 0;
var totalVehiculos = 0;
var contador = 0;

while(salir != 6){
    let usuario = parseInt(prompt(`Introduzca una opcion de las siguientes:
1. Gastos de suministros
2. Gastos de comida
3. Gastos de vehículo
4. Gastos de varios
5. Media de gastos
6. Salir
`));

    var mapa = new Map([
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
    ])

    switch(usuario){
        case 1:
            var suministros = parseInt(prompt(`Introduce los gastos en suministros:`));
            totalSuministro += suministros;
            mapa.set(1, totalSuministro);
            document.write(mapa.get(1));
            contador++;
            break;
        case 2:
            var comida = parseInt(prompt(`Introduce los gastos en comida:`));
            totalComida += comida;
            mapa.set(2, totalComida);   
            contador++;
        case 3:
            var vehiculo = parseInt(prompt(`Introduce los gastos en vehiculos:`));
            totalVehiculos += vehiculo;
            mapa.set(3, totalVehiculos);        
            contador++;
        case 4:               
            var variosGastos = prompt(`Introduce los gastos varios:`);
            totalVarios += variosGastos;
            mapa.set(4, totalVarios);    
            contador++;
        case 5:
            media = (totalSuministro + totalComida + totalVarios + totalVehiculos) / contador;      
            document.write(`La media de los gastos es: ${media}`);
        case 6:
            salir = 6;
        }
        document.write(`
            Gastos Suministro: ${totalSuministro}<br>
            Gastos Comida: ${totalComida}<br>
            Gastos Vehiculos: ${totalVehiculos}<br>
            Gastos Varios: ${totalVarios}
        `)
}
                
                