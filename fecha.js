export default class Fecha{
    constructor(año, mes, dia){
        this.fecha = new Date(año, mes-1, dia)
        this.nombreMes = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ]
        this.nombreDia = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado"
        ]
        this.fechaActual = new Date(Date.now())
    }

    getFecha(){
        return`${this.fecha.getDate()}/${this.nombreMes[this.fecha.getMonth()]}/${this.fecha.getFullYear()}`
    }
    
    getAños(){
        return`Han pasado ${(this.fechaActual.getFullYear()-this.fecha.getFullYear())} años desde ${this.fecha.getFullYear()}`
    }

    getMeses(){
        return`Han pasado ${(this.fechaActual.getFullYear()-this.fecha.getFullYear())* 12} meses desde ${this.fecha.getFullYear()}`
    }
    getSemanas(){
        return`Han pasado ${(this.fechaActual.getFullYear()-this.fecha.getFullYear()) * 52} semanas desde ${this.fecha.getFullYear()}`}

    getDias(){
        return`Han pasado ${(this.fechaActual.getFullYear()-this.fecha.getFullYear())* 365} dias desde ${this.fecha.getFullYear()}`
    }

    getDiaFecha(){
        return`${this.nombreDia[this.fecha.getDay()]}`
    }

}