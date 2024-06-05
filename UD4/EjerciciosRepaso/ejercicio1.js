$("#botonEmail").click(function () {
    let regExp=/^[a-z0-9_.]+@[a-z0-9.]+\.[a-z]{2,4}$/i;
    let correo = $("#correo").val();

    if (regExp.test(correo)) {
            $("#resultado").css("background-color", "lightgreen");
            $("#resultado").css("visibility", "visible");
            $("#resultado").text("Correo electrónico válido");
        } else {
            $("#resultado").css("background-color", "lightcoral");
            $("#resultado").css("visibility", "visible");
            $("#resultado").text("Correo electrónico inválido");
        }
});