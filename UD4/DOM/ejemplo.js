var contador = 0;
var contador1 = 10;

        function contadorClicks(){
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            var body = document.body;
            var texto = document.querySelector("#texto");
            if(contador <= 10){
                texto.textContent = contador;
                contador++;
                body.style.background = `rgb(${r},${g},${b})`;
                if(contador == 10){
                    texto.style.color = "red";
                    console.log(contador)
                }
            } 
        }

        function quitar(){
            var texto1 = document.querySelector("#texto1");
                if(contador1 >= 0){
                    texto1.textContent = contador1;
                    contador1--;
                    if(contador1 == 0){
                        texto1.style.color = "green";
                        b1.style.background = "green";
                    }
                } 
        }

        let b = document.querySelector("#boton");
        let b1 = document.querySelector("#boton1");

        b.addEventListener("click", contadorClicks);
        b1.addEventListener("click", quitar);