var usuario = prompt("Introduce un CP para saber la provincia:");

        function comprobarCP(usuario){
            var regex = /\d{5}/gm;
            if(usuario.length == 5 && usuario.match(regex)){
                let España = new Map([
                    [0o1, "Alava"],
                    [0o2, "Albacete"],
                    [0o3, "Alicante"],
                    [0o4, "Almeria"],
                    [0o5, "Avila"],
                    [0o6, "Badajoz"],
                    [0o7, "Baleares"],
                    [08, "Barcelona"],
                    [09, "Burgos"],
                    [10, "Cáceres"],
                    [11, "Cádiz"],
                    [12, "Castellón"],
                    [13, "Ciudad Real"],
                    [14, "Cordoba"],
                    [15, "La Coruña"],
                    [16, "Cuenca"],
                    [17, "Gerona"],
                    [18, "Granada"],
                    [19, "Guadalajara"],
                    [20, "Guipúzcua"],
                    [21, "Huelva"],
                    [22, "Huesca"],
                    [23, "Jaén"],
                    [24, "León"],
                    [25, "Lérida"],
                    [26, "La Rioja"],
                    [27, "Lugo"],
                    [28, "Madrid"],
                    [29, "Málaga"],
                    [30, "Murcia"],
                    [31, "Navarra"],
                    [32, "Orense"],
                    [33, "Asturias"],
                    [34, "Palencia"],
                    [35, "Las Palmas"],
                    [36, "Pontevedra"],
                    [37, "Salamanca"],
                    [38, "Santa Cruz de Tenerife"],
                    [39, "Cantabria"],
                    [40, "Segovia"],
                    [40, "Sevilla"],
                    [42, "Soria"],
                    [43, "Tarragona"],
                    [44, "Teruel"],
                    [45, "Toledo"],
                    [46, "Valencia"],
                    [47, "Valladolid"],
                    [48, "Vizcaya"],
                    [49, "Zamora"],
                    [50, "Zaragoza"],
                    [51, "Ceuta"],
                    [52, "Melilla"]
                ]);
            var dosPrimeros = usuario.substring(0,2)
            for(var [cp, ciudad] of España){
                if(dosPrimeros == cp){
                    return ciudad;
                }
            }
        } else{
            return "Error en el CP, debe tener una longitud de 5 caracteres y deben de ser los 5 numericos";
        }
    }

    function provincia(usuario){
        return comprobarCP(usuario);
    }

    console.log(provincia(usuario))