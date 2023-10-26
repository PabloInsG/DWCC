var array = [1, 2, 2, 5, 3, 3, 4, 5, 4, 5, 4, 5];

if (array.length === 0) {
  console.log("El array está vacío.");
} else {
  const frecuencias = {};
  let elementoMasRepetido = array[0];
  let maxFrecuencia = 1;

  for (let i = 0; i < array.length; i++) {
    const elemento = array[i];
    if (frecuencias[elemento]) {
      frecuencias[elemento]++;
    } else {
      frecuencias[elemento] = 1;
    }

    if (frecuencias[elemento] > maxFrecuencia) {
      elementoMasRepetido = elemento;
      maxFrecuencia = frecuencias[elemento];
    }
  }

    document.write(`El elemento más repetido es "${elementoMasRepetido}" y aparece ${maxFrecuencia} veces.`);
}
