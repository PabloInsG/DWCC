var pc = {
    referencia: "referencia",
    modelo: "",
    ram: "16GB",
    discoDuro: "1TB HDD",
    procesador: "Intel I9",
    sistemaOperativo: "Windows 10"
};

//Creamos el array donde vamos a insertar nuestros objetos
let arrayPc = new Array();

//Creamos dos objetos
for(let i=0; i<2 ; i++){
    let referencia=prompt("Referencia?");
    let modelo=prompt("Modelo?");
    let ram=prompt("Ram?");
    let discoDuro=prompt("Disco Duro?");
    let procesador=prompt("Procesador?");
    let sistemaOperativo=prompt("Sistema Operativo?");

    //Creamos el objeto js
    let pcUser = Object.create(pc);
    pcUser.referencia=referencia;
    pcUser.modelo=modelo;
    pcUser.ram=ram;
    pcUser.discoDuro=discoDuro;
    pcUser.procesador=procesador;
    pcUser.sistemaOperativo=sistemaOperativo;
    //Añadimos al array
    arrayPc.push(pcUser);
}

//Guardamos en el localStorage
for(let i=0; i<2 ; i++){
    localStorage.setItem(i,JSON.stringify(arrayPc[i]));
}

//Eliminamos el segundo elemento en el array
localStorage.removeItem(1);

//Recorremos el las variables que esten almacenadas en el localStorage y sacamos por pantalla los datos
for (let i = 0; i < localStorage.length; i++) {
        let pcStorage = JSON.parse(localStorage.getItem(i));
        document.write("<h2>PC " + (i + 1) + "</h2><br>");
        document.write("<p>Referencia: " + pcStorage.referencia + "</p><br>");
        document.write("<p>Modelo: " + pcStorage.modelo + "</p><br>");
        document.write("<p>RAM: " + pcStorage.ram + "</p><br>");
        document.write("<p>Disco Duro: " + pcStorage.discoDuro + "</p><br>");
        document.write("<p>Procesador: " + pcStorage.procesador + "</p><br>");
        document.write("<p>Sistema Operativo: " + pcStorage.sistemaOperativo + "</p><br>");
}