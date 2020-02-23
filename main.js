import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"

class Main {
    constructor(){
        this.producto1 = new Producto("Tortaogada estilo colimote", new Precio(49))
        this.direccion1 = new Direccion("Av. Gordolova", 442, 2, "Las lomas", 32448, "Villa de Alvarez", "Villa de Alvarez")
        this.elementoPedido1 = new ElementoPedido(this.producto1, 4)
        this.cliente1 = new Cliente("Enrique Pantoja", this.direccion1, "772-223-449")
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
        //let pedido1 = new ElementoPedido(this.producto1, 4)
        console.log(this.elementoPedido1.getDescripcion())
    }

    probarDireccion(){
        console.log("----------Direccion----------")
        //let direccion1 = new Direccion("Av. Gordolova", 442, 2, "Las lomas", 32448, "Villa de Alvarez", "Villa de Alvarez")
        console.log(this.direccion1.getFormatoCorto())
        console.log(this.direccion1.getFormatoExtendido())
    }

    probarCliente(){
        console.log("----------Cliente----------")
        //let cliente1 = new Cliente("Enrique Pantoja", this.direccion1, "772-223-449")
        console.log(this.cliente1.getPerfil())
    }
    
    probarTiempo(){
        console.log("----------Tiempo----------")
        let hora1 = new Tiempo(4,12,"pm")
        console.log(hora1.getFormato24())
    }

    probarFecha(){
        console.log("----------Fecha----------")
        let fecha1 = new Fecha(2004, 7, 18)
        console.log(fecha1.getFecha())
        console.log(fecha1.getAños())
        console.log(fecha1.getMeses())
        console.log(fecha1.getSemanas())
        console.log(fecha1.getDias())
        console.log(fecha1.getDiaFecha())
    }

    probarPedido(){
        console.log("----------Pedido----------")
        let pedido1 = new Pedido(new Fecha(2020, 4, 24), new Tiempo(1,50,"pm"), this.elementoPedido1, this.cliente1)
        console.log(pedido1.getCostoTotal())
        console.log(pedido1.getResumen())
    }
}

let app = new Main
app.probarPrecio()
app.probarProducto()
app.probarElementoPedido()
app.probarDireccion()
app.probarCliente()
app.probarTiempo()
app.probarFecha()
app.probarPedido()