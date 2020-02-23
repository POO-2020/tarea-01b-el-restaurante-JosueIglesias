import Producto from "./producto.js"

export default class ElementoPedido {
    constructor(producto = new Producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
        this.costo = (this.producto.precio.valor * this.cantidad).toFixed(2)
    }

    getDescripcion(){
        return`${this.cantidad} x ${this.producto.nombre} $${this.costo}`
    }
}