/*
Manager de usuarios
¿Cómo lo hacemos? Se creará una clase que permita gestionar usuarios usando fs.promises, éste deberá contar sólo con dos métodos: Crear un usuario y consultar los usuarios guardados.

El Manager debe vivir en una clase en un archivo externo llamado ManagerUsuarios.js
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Edad
Curso
El método debe guardar un usuario en un archivo “Usuarios.json”, deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios

El método “ConsultarUsuarios” debe poder leer un archivo Usuarios.json y devolver el arreglo correspondiente a esos usuarios

*/


const fs = require('fs')

const filename = './Usuarios.json'

class UserManager {
    #users

    async initialize() {
        this.#users = await this.readUsersFromFile()
    }

    async createUser(name, lastname, username, age, course) {
        const user = {
            username,
            name,
            lastname,
            age,
            course
        }

        this.#users.push(user)

        await this.#updateFile()    
    }

    async updateUser(updatedUser) {
        const existingUserIdx = this.#users.findIndex(u => u.username === updatedUser.username)

        if (existingUserIdx < 0) {
            throw 'Invalid username!'
        }

        // actualizar los datos de ese user en el array!
        const userData = { ...this.#users[existingUserIdx], ...updatedUser }
        this.#users[ existingUserIdx ] = userData

        await this.#updateFile()
    }

    async #updateFile() {
        await fs.promises.writeFile(filename, JSON.stringify(this.#users, null, '\t'))
    }

    async readUsersFromFile() {
        try {
            const usersFileContent = await fs.promises.readFile(filename, 'utf-8')
            return JSON.parse(usersFileContent)
        }
        catch (err) {
            return []
        }
    }
}


// testing
const main = async () => {
    const manager = new UserManager()
    await manager.initialize() // load users from file into manager
    console.log(await manager.readUsersFromFile())

    await manager.createUser('Peter', 'Parker', 30, 'Backend Node')
    await manager.createUser('John', 'Travolta', 40, 'Java')

    console.log(await manager.readUsersFromFile())
}

main()