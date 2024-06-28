// función tradicional
function mostrarMensaje1(nombre, pais) {
    console.log("Bienvenid@ " + nombre + " gracias por sumarte desde " + pais)
}

// función utilizando ES6 arrow functions, equivalente a la anterior
const mostrarMensaje2 = (nombre, pais) => {
    console.log("Bienvenid@ " + nombre + " gracias por sumarte desde " + pais)
}

//funcion mas corta si solo es una variable se saca parentesis
const mostrarMensaje3 = nombre => {
    return "Bienvenid@ " + nombre 
}
// formas mas corta si  es solo un return y una sola linea de codigo
const mostrarMensaje4 = nombre => "Bienvenid@ " + nombre 




const mensaje = mostrarMensaje3("Lucas")
console.log(mensaje);

mostrarMensaje1("Lucas", "Argentina")
mostrarMensaje2("Lucas", "Argentina")

// Función anónima, no le doy un nombre, se llama inmediatamente luego de declararla
// agrego este ejemplo sólo de manera informativa
/*
El punto y coma (;) antes de la función anónima autoejecutable es 
necesario para evitar problemas de interpretación en JavaScript. 
Sin él, si el código anterior no termina en un punto y coma, 
el intérprete de JavaScript puede interpretar la función como un intento de invocar el valor retornado de la expresión anterior, lo cual puede causar errores.
*/
;(function (nombre, pais) {
    console.log("Bienvenid@ " + nombre + " gracias por sumarte desde " + pais);
})("Lucas", "Argentina")