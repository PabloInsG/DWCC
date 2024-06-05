class Usuario{
    usuario = "Pablo";
    passwd = "123456";
    constructor(id, contrasena){
        this.id = id;
        this.contrasena = contrasena;
    }

    verDatos(){
        console.log(this.id)
        console.log(this.contrasena)
        console.log(this.usuario)
        console.log(this.passwd)
    }

    validar(){
        if(this.id == this.usuario && this.contrasena == this.passwd){
            document.write("Bienvenido ", this.id);
        } else{
            document.write("Valores incorrectos");
        }
    }
}

var persona = new Usuario("Pablo", "123456");

persona.validar();
persona.verDatos();