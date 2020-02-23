import Producto from "./producto.js"

export default class ElementoPedido {
    constructor(producto = new Producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }

    getDescripcion(){
        return`${this.cantidad} x ${this.producto.nombre} $${(this.producto.precio.valor * this.cantidad).toFixed(2)}`
    }
}