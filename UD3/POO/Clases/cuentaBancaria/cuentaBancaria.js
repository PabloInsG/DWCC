class CuentaBancaria{
    constructor(propietario, saldo){
        this.propietario = propietario;
        this.saldo = saldo;
    }
    
    sacarDinero(aRetirar){
        if(this.saldo > aRetirar && (this.saldo-aRetirar) > 0){
            this.saldo -= aRetirar;
            console.log("Saldo Actual despues de Retirar: ", this.saldo);
        } else{
            console.log("Saldo Insuficiente para retirar la cantidad indicada")
        }
    }
    
    ingresarDinero(ingreso){
        if(!isNaN(ingreso)){
            this.saldo += ingreso;
            console.log("Saldo Actualizado: ", this.saldo)
        } else{
            console.log("Error, la cantidad debe ser un valor numerico")
        }
    }

    verDatos(){
        console.log("Propietario: ", this.propietario);
        console.log("Saldo: ", this.saldo);
    }
}

var cuenta = new CuentaBancaria("Pablo", 1000);

cuenta.sacarDinero(800)
cuenta.ingresarDinero(200)
cuenta.verDatos()