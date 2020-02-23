import Precio from "./precio.js"
import Producto from "./producto.js"

class Main {
    constructor(){

    }

    probarPrecio(){
        console.log("---------Precio----------")
        let precio1 = new Precio(443)
        console.log(precio1.getPrecio())
    }

    probarProducto(){
        console.log("---------Producto----------")
        let producto1 = new Producto("Tortaogada estilo colimote", new Precio(49))
        console.log(producto1.getDescripcion())
    }
}

let app = new Main
app.probarPrecio()
app.probarProducto()