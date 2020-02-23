import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"

class Main {
    constructor(){
        this.producto1 = new Producto("Tortaogada estilo colimote", new Precio(49))
        this.direccion1 = new Direccion("Av. Gordolova", 442, 2, "Las lomas", 32448, "Villa de Alvarez", "Villa de Alvarez")
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

    probarDireccion(){
        console.log("----------Direccion----------")
        //let direccion1 = new Direccion("Av. Gordolova", 442, 2, "Las lomas", 32448, "Villa de Alvarez", "Villa de Alvarez")
        console.log(this.direccion1.getFormatoCorto())
        console.log(this.direccion1.getFormatoExtendido())
    }

    probarCliente(){
        console.log("----------Cliente----------")
        let cliente1 = new Cliente("Enrique Pantoja", this.direccion1, "772-223-449")
        console.log(cliente1.getPerfil())
    }
}

let app = new Main
app.probarPrecio()
app.probarProducto()
app.probarElementoPedido()
app.probarDireccion()
app.probarCliente()