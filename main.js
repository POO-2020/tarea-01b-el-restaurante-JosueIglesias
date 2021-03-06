import Precio from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elemento-pedido.js"
import Direccion from "./direccion.js"
import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Pedido from "./pedido.js"
import Restaurante from "./restaurante.js"

class Main {
    constructor(){
        this.producto1 = new Producto("Tortaogada estilo colimote", new Precio(49))
        this.producto2 = new Producto("Tacos de soia", new Precio(27))
        this.direccion1 = new Direccion("Av. Gordolova", 442, 2, "Las lomas", 32448, "Villa de Alvarez", "Villa de Alvarez")
        this.elementoPedido1 = new ElementoPedido(this.producto1, 4)
        this.elementoPedido2 = new ElementoPedido(this.producto2, 5)
        this.cliente1 = new Cliente("Enrique Pantoja", this.direccion1, "772-223-449")
        this.restaurante = new Restaurante("El wen sazón", "333-688-345" ,new Direccion("Av. Lasoia", 343, 2, "Lomas doradas", 425523, "Villa de Alvarez", "Villa de Alvarez"))
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
        console.log(pedido1.getProductos())
        pedido1.agregarElemento(this.elementoPedido1)
        pedido1.agregarElemento(this.elementoPedido2)
        pedido1.listarElementos()
    }

    probarRestaurante(){
        console.log("----------Restaurante----------")
        console.log(this.restaurante.nombre)
        console.log(`Telefono: ${this.restaurante.telefono}`)
        console.log(this.restaurante.direccion.getFormatoCorto())
        this.restaurante.registrarProductos(this.producto1)
        this.restaurante.registrarProductos(this.producto2)
        this.restaurante.listarProductos(this.producto1)
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
app.probarRestaurante()