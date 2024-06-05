/*Facer un programa que valide cunha funcion o estado de desenvolvemento
        dunha persoa, segundo a súa idade:
            0-3 bebé
            3-11 neno
            12-18 adolescente
            19-99 adulto.
        Este programa debe chamar por parametro a unha funcion que, a sua vez, reciba
        unha funcion que valide a idade correcta, numero entre 0-120. */

        let edad=Number(prompt("Indica a tua edad"));

        function verificarEdad(edad){
          if(edad=>0 && edad<=120){
            return true;
          } else {
            return false;
          }
        }

        function desenvolvemento(edad,callback){
          if(callback(edad)==true){
            if(edad>=0 && edad<3){
              console.log("Eres un bebe");
            } else if (edad>=3 && edad<12){
              console.log("Eres un neno");
            }else if (edad>=12 && edad<19){
              console.log("Eres un adolescente");
            } else {
              console.log("Eres un adulto");
            }
          } else {
            console.log("A edad non é correcta, debe ser entre 0 e 120 anos")
          }
        }

        desenvolvemento(edad,verificarEdad);