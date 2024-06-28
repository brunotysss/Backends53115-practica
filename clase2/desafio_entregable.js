/*
Realizar una clase “ProductManager” que gestione un conjunto de productos.
Te acercamos esta ayuda 👉
Hands on lab sobre creación de clases (clase 1)

Aspectos a incluir

Debe crearse desde su constructor, sin argumentos. Tendrá un array interno products, que iniciará vacío.
Cada producto que gestione debe contar con las propiedades:
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen - URL)
code (código identificador, contiene letras y números)
stock (número de productos disponibles)

Aspectos a incluir

Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
Validar que no se repita el campo “code” y que todos los campos sean obligatorios
Al fallar las validaciones, debe mostrarse un error por consola indicando qué sucedió
Al agregarlo, debe crearse con un id autoincrementable
Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id indicado como parámetro
En caso de no coincidir ningún id, mostrar en consola un error “Not found”
Formato del entregable

Archivo de Javascript listo para ejecutarse desde node.

Proceso de testing para ver si esta bien el desafio entregable
Se creará una instancia de la clase “ProductManager”
Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25
El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

*/

class ProductManager{
    static #ultimoId = 1;
    #products

    constructor(){
        this.#products = [];
    }

    getProducts(){
        return this.#products;
    }

    #getNuevoId(){
        const id = ProductManager.#ultimoId;
        ProductManager.#ultimoId++;
        return id
    }

    addProduct(title,description,price,thumbnail,code,stock){

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return
        }

        const existingCode = this.#products.some(prod => prod.code === code);
        if (existingCode){
            console.error("Este codigo ya existe");
            return
        }

        const product={
            id: this.#getNuevoId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        this.#products.push(product);
    }

    getProductById(idProd){
        const productToFind = this.#products.find(prod=>prod.id === idProd);
        if (!productToFind){
            console.error("Not Found")
            return null
        }else{
            return(productToFind)
        }
    }
}

const manager = new ProductManager();
manager.addProduct('titulo','titulo prueba',50,'sin imagen','abc123',25);
console.log(manager.getProductById(1));
manager.addProduct('titulo','titulo prueba',50,'sin imagen','abc123',25);
console.log(manager.getProductById(5));