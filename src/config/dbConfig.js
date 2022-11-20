import path from "path";

export const options = {

    fileSystem: {
        pathProducts: 'productos.json',
        pathCarts: 'carritos.json',
    },

    mariaDB:{
        client:"mysql",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:"",
            database:"desafiodb"
        }
    },
    sqliteDB:{
        client:"sqlite3",
        connection:{
            filename: path.join(__dirname, "../DB/ecommerce.sqlite")
        }
    }
}

export {options};