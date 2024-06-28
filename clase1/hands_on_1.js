/*
¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.
Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
Invocar la función con los casos de prueba.
*/


const mostrarLista = lista =>{

        //la propiedad "lenght" de los arrays me permite saber el nro de ítems  que tiene
        const longitudLista = lista.lenght

        // devolver mensaje si la lista está vacía
        if(longitudLista === 0) {
            console.log("La lista está vacía");
        // early return, como no tenemos que hacer más nada en este caso,
        // podemos finalizar la función aquí. De esta manera no tenemos que escribir un "else"
        // en este caso no estamos devolviendo nada desde la función, por eso no va nada a la derecha del "return"
        return
        }
        // iterar por cada elemento y mostrarlo
        for (const item of lista) {
            console.log(item)
        }
        // también podemos hacer lista.forEach(item => console.log(item))
        // también podemos hacer for (let i=0; i < lista.length; i++) { console.log(lista[i]); }
        // devolver longitud de la lista
        console.log(`La lista contiene ${longitudLista} ítems`)

        mostrarLista([])
        mostrarLista(["Benjamín", "Soledad", "Emilia"])















}