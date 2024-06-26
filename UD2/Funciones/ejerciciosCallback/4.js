// Función para recibir as cadeas de texto
function recibirCadeas(callback) {
    var cadeas = [];
    var continuar = true;

    while (continuar) {
      var cadena = prompt("Introduce unha cadea de texto (ou escribe 'parar' para finalizar):");

      if (cadena.toLowerCase() === "parar") {
        continuar = false;
      } else {
        cadeas.push(cadena);
      }
    }

    callback(cadeas);
  }
  // Función que crea o texto final
  function crearTextoFinal(cadeas) {
    var textoFinal = "Texto final: ";

    for (var i = 0; i < cadeas.length; i++) {
      textoFinal += cadeas[i] + " ";
    }

    console.log(textoFinal.trim());
  }

  // Chamada a función, pasando outra función como parámetro
  recibirCadeas(crearTextoFinal);