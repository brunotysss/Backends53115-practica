/*
Descripción de la actividad. 
Dados los objetos indicados en la siguiente diapositiva:
Realizar una lista nueva  (array) que contenga todos los tipos de productos (no sus cantidades) sin repetir, 
consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
*/
const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

// mostrar los distintos tipos de objetos, sin repetir
const tipos = []
objetos.forEach(x => {
    const keys = Object.keys(x)
    keys.forEach(k => {
        if (!tipos.includes(k)) {
            tipos.push(k)
        }
    })
})
console.log(tipos)

// mostrar el total de productos vendidos
let total = 0
objetos.forEach(objeto => {
    const values = Object.values(objeto)
    values.forEach(v => total += v)
})
console.log(`Total: ${total}`)