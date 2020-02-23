import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"

class Main {
    constructor(){
        this.producto1 = new Producto("Tortaogada estilo colimote", new Precio(49))
    }

    probarPrecio(){
        console.log("---------Precio----------")
        let precio1 = new Precio(443)
        console.log(precio1.getPrecio())
    }

    probarProducto(){
        console.log("---------Producto----------")
        //let producto1 = new Producto("Tortaogada estilo colimote", new Precio(49))
        console.log(this.producto1.getDescripcion())
    }

    probarElementoPedido(){
        console.log("----------Elemento Pedido----------")
        let pedido1 = new ElementoPedido(this.producto1, 4)
        console.log(pedido1.getDescripcion())
    }
}

let app = new Main
app.probarPrecio()
app.probarProducto()
app.probarElementoPedido()