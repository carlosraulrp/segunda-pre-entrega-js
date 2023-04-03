let autos = [
    {
        marca: "volkswagen",
        id: 150,
        modelo: "polo",
        tipo: "hatchback",
        precio: 18000,
        cilindrada: "1.6 cc",
        transmision: "manual"
        
    },
    {
        marca: "volkswagen",
        id: 151,
        modelo: "gol",
        tipo: "hatchback",
        precio: 13000,
        cilindrada: "1.6 cc",
        transmision: "manual"
        
    },
    {
        marca: "nissan",
        id: 152,
        modelo: "sentra",
        tipo: "sedan",
        precio: 21000,
        cilindrada: "Cilindrada: 2.0 cc",
        transmision: "manual"
        
    },
    {
        marca: "nissan",
        id: 153,
        modelo: "versa",
        tipo: "sedan",
        precio: 13000,
        cilindrada: "Cilindrada: 1.6 cc",
        transmision: "manual"
        
    },
    {
        marca: "peugeot",
        id: 154,
        modelo: "new 2008",
        tipo: "suv",
        precio: 22000,
        cilindrada: "Cilindrada: 1.2 cc",
        transmision: "automatica"
        
    },
    {
        marca: "ford",
        id: 155,
        modelo: "explorer",
        tipo: "suv",
        precio: 56000,
        cilindrada: "Cilindrada: 3.0 cc",
        transmision: "automatica"
        
    },
    {
        marca: "ford",
        id: 156,
        modelo: "bronco",
        tipo: "suv",
        precio: 30000,
        cilindrada: "Cilindrada: 1.5 cc",
        transmision: "automatica"
        
    }
]

let cars = autos.map(element => {
    return new Auto (element.marca, element.id, element.modelo, element.tipo, element.precio, element.cilindrada, element.transmision)
})

let usuario = ""
let menu = "1 - Todos nuestros autos\n2 - Modelos y precios\n3 - Elegir un producto para agregar\n0 - salir "
let opcion = ""
let carrito = []

let listaCars 
let idOpcion
let carBuscado


do {
    usuario = prompt("Ingrese su nombre")
  } while (usuario == "" || !isNaN(usuario))
  
  alert("Bienvenido a la segunda Pre - entrega," + " " + usuario)

  do {
    
    opcion = Number(prompt(`Ingrese el numero de la opcion que desea ejecutar:\n ${menu}`))
    if (opcion === 1) {
        alert("Ve todos nuestros autos")
        let muestraMarcas = cars.map(element => element.marca + " " + element.modelo)
        alert(muestraMarcas.join("\n"))
        let marcaRecibida = prompt("Escriba su marca para ver caracteristicas").toLowerCase()
        if (marcaRecibida == "ford") {
            let filtro = cars.filter(element=> element.marca == marcaRecibida)
            let salidaFiltro = filtro.map(element => {
                return `Modelo: ${element.modelo}\n Tipo: ${element.tipo}\n Transmision: ${element.transmision}\n ${element.cilindrada}`
            })
            alert(salidaFiltro.join("\n"))

        } else if(marcaRecibida == "volkswagen"){
            let filtro = cars.filter(element=> element.marca == marcaRecibida)
            let salidaFiltro = filtro.map(element => {
                return `Modelo: ${element.modelo}\n Tipo: ${element.tipo}\n Transmision: ${element.transmision}\n ${element.cilindrada}`
            })
            alert(salidaFiltro.join("\n"))
        }else if(marcaRecibida == "nissan"){
            let filtro = cars.filter(element=> element.marca == marcaRecibida)
            let salidaFiltro = filtro.map(element => {
                return `Modelo: ${element.modelo}\n Tipo: ${element.tipo}\n Transmision: ${element.transmision}\n ${element.cilindrada}`
            })
            alert(salidaFiltro.join("\n"))
        }else if(marcaRecibida == "peugeot"){
            let filtro = cars.filter(element=> element.marca == marcaRecibida)
            let salidaFiltro = filtro.map(element => {
                return `Modelo: ${element.modelo}\n Tipo: ${element.tipo}\n Transmision: ${element.transmision}\n ${element.cilindrada}`
            })
            alert(salidaFiltro.join("\n"))
        }
    } else if(opcion === 2){
        alert("Estos son los precios de nuestros modelos")
        let muestraModelos = cars.map(element => element.modelo + " " + element.precio + " " + "USD")
        alert(muestraModelos.join("\n"))
    }else if(opcion === 0){
        alert("Gracias por su visita")
    }else if(opcion === 3){
        listaCars = cars.map(element => element.id + " "+ element.modelo).join("\n")
        
        idOpcion = Number(prompt(`Ingrese el id del vehiculo que desea comprar:\n ${listaCars}`))
        carBuscado = cars.find(element => element.id === idOpcion)
        
        if (carBuscado) {
            
            let posicionEnCarrito = carrito.findIndex(element => element.id === carBuscado.id)
            if (posicionEnCarrito != -1) {
                carrito[posicionEnCarrito].cantidad++
                carrito[posicionEnCarrito].subtotal = carrito[posicionEnCarrito].subtotal * carrito[posicionEnCarrito].cantidad
            } else {
                
                carrito.push({
                    id: carBuscado.id,
                    modelo: carBuscado.modelo,
                    cantidad: 1,
                    precioUnidad: carBuscado.precio,
                    subtotal: carBuscado.precio
                    
                })
                
                
            }
            
            let mapCarrito = carrito.map(element =>{
                return `Tienes los siguientes vehiculos para la compra: ${element.modelo}`
            })
            alert(mapCarrito.join("\n"))
        }
        
        
    }
  } while (opcion != 0)


 
