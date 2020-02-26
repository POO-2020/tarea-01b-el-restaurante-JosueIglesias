export default class Restaurante {
    constructor (nombre, telefono, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
        this.productos = new Array
        this.pedidos = new Array
    }
    
    registrarProductos(producto) {
        this.productos.push(producto)
    }

    listarProductos(){
        this.productos.forEach((producto, i) => {
            console.log(`${i + 1} ${producto.nombre}`)
        }
        )
    }
}