/*
¿Cómo lo hacemos? Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.

Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.

*/

class Contador {

    constructor(responsable) {
        this.responsable = responsable;
        this.conteo = 0;
    }

    // inicializar la propiedad estática con el valor 0
    static conteoGlobal = 0;

    getResponsable() {
        return this.responsable;
    }

    getCuentaIndividual() {
        return this.conteo;
    }

    contar() {
        this.conteo += 1;

        // cada vez que incremento una cuenta, también sumo a la cuenta global
        // recordad que la variable estática es compartida por todas las instancias
        Contador.conteoGlobal += 1;
    }

    getCuentaGlobal() {
        return Contador.conteoGlobal
    }
}

const c1 = new Contador("Gonzalo")
const c2 = new Contador("Pedro")

c1.contar()
c1.contar()
c1.contar()

c2.contar()

console.log(`Cuenta de ${c1.getResponsable()}: ${c1.getCuentaIndividual()}`)
console.log(`Cuenta de ${c2.getResponsable()}: ${c2.getCuentaIndividual()}`)

console.log(`Cuenta global: ${c1.getCuentaGlobal()}`)
console.log(`Cuenta global: ${c2.getCuentaGlobal()}`)