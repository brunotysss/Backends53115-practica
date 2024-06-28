/*
Calculadora positiva con promesas
¿Cómo lo hacemos? Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO  donde podremos ponerlas a prueba
Definir función suma:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos
Definir función resta:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”


Definir una función multiplicación:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
Si el producto es negativo, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos
Definir la misma función división utilizada en esta clase.
Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch


*/

const suma = (a, b) => new Promise((resolve, reject) => {
    if (a * b === 0) {
        reject('Operación innecesaria')
        return
    }

    const result = a+b
    if (result <= 0) {
        reject('La calculadora sólo debe devolver valores positivos')
        return
    }

    resolve(result)
})

const resta = (a, b) => new Promise((resolve, reject) => {
    if (a * b === 0) {
        reject('Operación inválida')
        return
    }

    const result = a-b
    if (result <= 0) {
        reject('La calculadora sólo debe devolver valores positivos')
        return
    }

    resolve(result)
})

const multiplicar = (a, b) => new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
        reject('Operación inválida')
        return
    }

    const result = a * b
    if (result <= 0) {
        reject('La calculadora sólo debe devolver valores positivos')
        return
    }

    resolve(result)
})

const dividir = (a, b) => new Promise((resolve, reject) => {
    if (a < 0 || b <= 0) {
        reject('Operación inválida')
        return
    }

    const result = a / b
    if (result <= 0) {
        reject('La calculadora sólo debe devolver valores positivos')
        return
    }

    resolve(result)
})

const calculos = async () => {
    try {
        console.log(await suma(4, 5))
        console.log(await resta(40, 5))
        console.log(await multiplicar(10, 5))
        console.log(await dividir(10, -5))
    }
    catch(err) {
        console.log(err)
    }
}

calculos()