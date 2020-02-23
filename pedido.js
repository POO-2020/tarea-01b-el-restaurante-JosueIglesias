import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import ElementoPedido from "./elemento-pedido.js";
import Cliente from "./cliente.js";

export default class Pedido {
    constructor(fecha = new Fecha, hora = new Tiempo, elementoPedido = new ElementoPedido, cliente = new Cliente){
        this.fecha = fecha
        this.hora = hora
        this.elementoPedido = elementoPedido
        this.cliente = cliente
    }

    getResumen() {
       return`${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.elementoPedido.cantidad} productos - Total: $${(this.elementoPedido.producto.precio.valor * this.elementoPedido.cantidad).toFixed(2)}` 
    }
    getCostoTotal(){
        return`El costo total es: $${(this.elementoPedido.producto.precio.valor * this.elementoPedido.cantidad).toFixed(2)}`
    }

}