/*
Manejo de archivos
Consigna

Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. Éste debe poder agregar, consultar, modificar 
y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).
Aspectos a incluir

La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.
Debe guardar objetos con el siguiente formato:
id (se debe incrementar automáticamente, no enviarse desde ningún parámetro)
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)


Aspectos a incluir

Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y 
guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo también).
Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.
Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto
Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
Formato del entregable

Archivo de javascript con el nombre ProductManager.js


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
Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.
Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.

*/

// Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual.
// Posteriormente leer el archivo y mostrar el contenido por consola. 
// Utilizar el módulo fs y sus operaciones de tipo callback.

const fs = require('fs');

class ProductManager {
    static #ultimoId = 1;
    #products;
    #path;

    constructor(path) {
        this.#path = path;
        this.#products = [];
        this.#loadProductsFromFile();
    }

    #loadProductsFromFile() {
        try {
            if (fs.existsSync(this.#path)) {
                const data = fs.readFileSync(this.#path, 'utf-8');
                this.#products = JSON.parse(data);
                if (this.#products.length > 0) {
                    ProductManager.#ultimoId = Math.max(...this.#products.map(prod => prod.id)) + 1;
                }
            } else {
                this.#saveProductsToFile();
            }
        } catch (error) {
            console.error("No se pudo leer el archivo o el archivo está vacío.");
        }
    }

    #saveProductsToFile() {
        fs.writeFileSync(this.#path, JSON.stringify(this.#products, null, 2));
    }

    getProducts() {
        return this.#products;
    }

    #getNuevoId() {
        const id = ProductManager.#ultimoId;
        ProductManager.#ultimoId++;
        return id;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        const existingCode = this.#products.some(prod => prod.code === code);
        if (existingCode) {
            console.error("Este código ya existe");
            return;
        }

        const product = {
            id: this.#getNuevoId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.#products.push(product);
        this.#saveProductsToFile();
    }

    getProductById(idProd) {
        const productToFind = this.#products.find(prod => prod.id === idProd);
        if (!productToFind) {
            console.error("Not Found");
            return null;
        } else {
            return productToFind;
        }
    }

    updateProduct(id, updatedFields) {
        const productIndex = this.#products.findIndex(prod => prod.id === id);
        if (productIndex === -1) {
            console.error("Not Found");
            return;
        }

        const existingProduct = this.#products[productIndex];
        const updatedProduct = { ...existingProduct, ...updatedFields, id: existingProduct.id };

        this.#products[productIndex] = updatedProduct;
        this.#saveProductsToFile();
    }

    deleteProduct(id) {
        const productIndex = this.#products.findIndex(prod => prod.id === id);
        if (productIndex === -1) {
            console.error("Not Found");
            return;
        }

        this.#products.splice(productIndex, 1);
        this.#saveProductsToFile();
    }
}

// Uso de ejemplo:
const manager = new ProductManager('products.json');

// Inicialmente debe devolver un arreglo vacío []
console.log(manager.getProducts());

// Agregar un producto
manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);

// Ahora debe devolver el producto recién agregado
console.log(manager.getProducts());

// Obtener producto por ID
console.log(manager.getProductById(1));

// Actualizar producto
manager.updateProduct(1, { price: 250, stock: 30 });
console.log(manager.getProductById(1));

// Eliminar producto
manager.deleteProduct(1);
console.log(manager.getProducts());
