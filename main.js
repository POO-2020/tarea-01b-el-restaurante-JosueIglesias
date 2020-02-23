import Precio from "./precio.js"

class Main {
    constructor(){

    }

    probarPrecio(){
        console.log("---------Precio----------")
        let precio1 = new Precio(443)
        console.log(precio1.getPrecio())
    }
}

let app = new Main
app.probarPrecio()
