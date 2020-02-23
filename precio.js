export default class Precio {
    constructor(valor){
        this.valor = valor
    }

    getPrecio(){
        //let precio = this.valor.toFixed(2)
        return`$${this.valor.toFixed(2)}`
    }
}