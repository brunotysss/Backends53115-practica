/*
¿Cómo lo hacemos? Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
nombre
lugar
precio (deberá agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)
El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.

Debe contar con un método “agregarUsuario” El cual recibirá:
id del evento (debe existir, agregar validaciones)
id del usuario
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
Debe contar con un método “ponerEventoEnGira” El cual recibirá:
id del evento
nueva localidad
nueva fecha
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos 
(Usar spread operator para el resto de las propiedades)

*/



class TicketManager {
    #eventos
    #precioBaseDeGanancia = 0.15

    static #ultimoIdEvento = 1

    constructor() {
        this.#eventos = []
    }

    getEventos() {
        return this.#eventos
    }

    #getNuevoId() {
        const id = TicketManager.#ultimoIdEvento
        TicketManager.#ultimoIdEvento++
        return id
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = null) {
        const evento = {
            id: this.#getNuevoId(),
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseDeGanancia,
            capacidad,
            fecha: fecha || new Date(),
            participantes: []
        }

        this.#eventos.push(evento)
    }

    agregarUsuario(idEvento, idUsuario) {
        // validar que el evento exista
        const evento = this.#eventos.find(evt => evt.id === idEvento)
        if (!evento) {
            return
        }

        // validar que el usuario no esté agregado
        if (evento.participantes.includes(idUsuario)) {
            return
        }
        evento.participantes.push(idUsuario)
    }

    ponerEventoEnGira(idEvento, localidad, fecha) {
        const evento = this.#eventos.find(evt => evt.id === idEvento)
        if (!evento) {
            return
        }

        const nuevoEvento = {
            ...evento,
            lugar: localidad,
            fecha,
            participantes: [],
            id: this.#getNuevoId()
        }

        this.#eventos.push(nuevoEvento)
    }
}

// Testing de la clase
const ticketManager = new TicketManager()
ticketManager.agregarEvento('Tomorrowland', 'Canadá, Ottawa', 120) // evento #1
ticketManager.agregarEvento('Rally Dakar', 'Perú, Lima', 50, 20, new Date(2024, 6, 15)) // evento #2
ticketManager.agregarEvento('Cine: La Casa de Papel', 'Argentina, Córdoba', 25.5, 200) // evento #3

ticketManager.agregarUsuario(1, 100)
ticketManager.agregarUsuario(1, 200)
ticketManager.agregarUsuario(1, 100) // ya ha sido agregado
ticketManager.agregarUsuario(10, 100) // evento inexistente

ticketManager.agregarUsuario(2, 200)

ticketManager.agregarUsuario(3, 300)

ticketManager.ponerEventoEnGira(1, 'EEUU, New York', new Date(2024, 10, 15)) //evento #4

console.log(ticketManager.getEventos())