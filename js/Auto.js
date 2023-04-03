class Auto{
    constructor(marca, id, modelo, tipo, precio, cilindrada, transmision){
        this.marca = marca
        this.id = id
        this.modelo = modelo
        this.tipo = tipo
        this.precio = precio
        this.cilindrada = cilindrada
        this.transmision = transmision
    }
    marca(){
        return this.marca
    }

    marcaModeloPrecio(){
        return this.marca + " " + this.modelo + " " + this.precio
    }
}