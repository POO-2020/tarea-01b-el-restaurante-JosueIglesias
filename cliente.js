import Direccion from "./direccion.js";

export default class Cliente {
    constructor(nombre, direccion = new Direccion, telefono){
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }

    getPerfil(){
        return`Nombre: ${this.nombre}, Direccion: ${this.direccion.getFormatoCorto()}, Telefono: ${this.telefono}`
    }
}