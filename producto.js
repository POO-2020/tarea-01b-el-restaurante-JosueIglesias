import Precio from "./precio.js"
export default class Producto {
    constructor(nombre, precio = new Precio){
        this.nombre = nombre
        this.precio = precio
    }

    getDescripcion(){
        return`${this.nombre} ${this.precio.getPrecio()}`
    }
}
