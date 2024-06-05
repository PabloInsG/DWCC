function procesarFrase(frase) {
    var vectorPalabras = frase.split(" ");
    var mapaLonxitudes = new Map();
    for (var i = 0; i < vectorPalabras.length; i++) {
      var palabra = vectorPalabras[i];
      mapaLonxitudes.set(palabra, palabra.length);
    }
    console.log("SAÍDA:");
    for (var [palabra, lonxitude] of mapaLonxitudes) {
      console.log(palabra + "----" + lonxitude);
    }
  }

  var frase = prompt("Introduce unha frase:");

  var vectorPalabras = frase.split(" ");
  var vectorString = "[" + vectorPalabras.join(", ") + "]";
  console.log("Vector=" + vectorString);
  procesarFrase(frase);