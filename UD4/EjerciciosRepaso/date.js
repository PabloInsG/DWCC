Date.prototype.bisiesto = function(){
    var ano = this.getFullYear();
    if(ano % 4 == 0){
        document.write(ano + " es bisiesto<br>");
    } else{
        document.write(ano + " no es bisiesto<br>");
    }
}

Date.prototype.calcularDias = function (){
    var fechaActual = new Date()
    var calculoDias = Math.floor((fechaActual - this) / (24 * 60 * 60 * 1000)) + 1;
    document.write("Dias desde la fecha hasta hoy: " + calculoDias +  "<br>");
}

Date.prototype.diaSemana = function() {
    var dia = this.getDay();
    switch (dia){
        case 1:
            document.write("Dia de la semana: Lunes")
            break;
        case 2:
            document.write("Dia de la semana: Martes")
            break;
        case 3:
            document.write("Dia de la semana: Miercoles")
            break;
        case 4:
            document.write("Dia de la semana: Jueves")
            break;
        case 5:
            document.write("Dia de la semana: Viernes")
            break;
        case 6:
            document.write("Dia de la semana: Sabado")
            break;
        case 7:
            document.write("Dia de la semana: Domingo")
            break;
    }
}

Date.prototype.anoNacemento = function(){
    var fechaNow = new Date();
    var edad = 0;
    if(this.getMonth() + 1 <= fechaNow.getMonth() + 1){
        edad = fechaNow.getFullYear() - this.getFullYear(); 
    } else{
        edad = fechaNow.getFullYear() - this.getFullYear() - 1; 
    }
    document.write("<br>Tu edad es: " + edad);
}

var e = document.getElementById('formato');
var fecha = new Date("03/02/24");
var fechaNacemento = new Date("10/13/2003");

Date.prototype.formatoPerso = function(){
    var ano = this.getFullYear();
    var mes = this.getMonth() + 1;
    var dia = this.getDate();
    if (dia < 10) {
        dia = '0' + dia;
    }

    if (mes < 10) {
        mes = `0${mes}`;
    }
    $("#formato").change(function(){
        $("p").remove();
        if($("#formato :selected").val() == 1){
            $(".container").append("<p>Fecha formateada: " + ano + "/" + mes + "/" + dia + "</p>")
       } else if($("#formato :selected").val() == 2){
        $(".container").append("<p>Fecha formateada: " + dia + "/" + mes + "/" + ano + "</p>")
       } else if($("#formato :selected").val() == 3){
        $(".container").append("<p>Fecha formateada: " + mes + "/" + dia + "/" + ano + "</p>")
       } else if($("#formato :selected").val() == 4){
        $(".container").append("<p>Fecha formateada: " + dia + "/" + ano + "/" + mes + "</p>")
       }
    })
}

fecha.bisiesto();
fecha.calcularDias();
fecha.formatoPerso();
fecha.diaSemana();
fechaNacemento.anoNacemento();