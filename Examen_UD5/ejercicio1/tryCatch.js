var finca = {
    nombre: "Finca Pepe",
    extension: "1",
    suelo: "tierra",
    valorCatastral: "50000"
};

let nombre=prompt("Nombre?");
let extension=prompt("Extension?");
let suelo=prompt("Suelo?");
let valorCatastral=prompt("Valor Catastral?");

//Si algun campo de los prompt esta vacio mandaremos un alert, si no, crearemos el objeto correctamente
if(nombre != "" && extension != "" && suelo != "" && valorCatastral != ""){
    var fincaUser = Object.create(finca);
} else{
    alert("Los campos no pueden ir vacios");
}


try{
    //Ya que si hacemos consulta a fincaUser.ive nos dira que es undefined
    if(fincaUser.ive == undefined){
        //Tiraremos un error de referencia ya que en el constructor de nuestro objeto js no existe
        throw new ReferenceError("A pesares de terse intentado o acceso ao obxecto... NON FOI POSIBLE pois a propiedade non existe");
    }
} catch(error){
    //Sacaremos por pantalle el nombre del error y el mensaje
    document.write(error.name + ": " + error.message);
}