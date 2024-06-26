/*Facer un programa que conteña unha funcion que contemple como válido 
        ou non válido un salario que pasamos por parametro e no caso de que sexa
        válido farase unha tabla de incrementos para os vindeiros 5 anos do 1,05.
        O salario non vai ser superior a 1600 ao mes.*/

        let salario = Number(prompt("Cual es tu salario?"));

        function esValido(salario) {
            if (salario < 1600) {
                return true;
            } else {
                return false;
            }
        }

        function tablaIncrementos(salario, callback) {
            if (callback(salario)) {
                document.write("<table border=1><tr><th>Año</th><th>Salario</th></tr>");

                for (let i = 1; i <= 5; i++) {
                    salario = salario * 1.05;

                    document.write("<tr><td>" + i + "</td><td>" + salario.toFixed(2) + "€</td></tr>");
                }
                document.write("<table>");
            } else {
                document.write("El salario debe ser menor a 1600€.");
            }
        }

        tablaIncrementos(salario, esValido);