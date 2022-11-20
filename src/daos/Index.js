import {options} from "../config/dbConfig.js"

let contenedorDaoProductos
let ContenerdorDaoCarritos

let databaseType = "archivos";

switch(databaseType){
    case "archivos":
        const {productosDaoArchivos} = await import("./productos/productoArchivo.js")
        const {carritoDaoArchivos} = await import("./carrito/carritoArchivo.js")
        contenedorDaoProductos = new productosDaoArchivos(options.fileSystem.pathProducts)
        contenerdorDaoCarritos = new carritoDaoArchivos(options.fileSystem.pathCarts) 
        break;
    case "sqlite":
        const {productosDaoSqlite} = await import("./productos/productosSql.js")
        const {carritosDaoSqlite} = await import("./carrito/carritoSql.js")
        contenedorDaoProductos = new productosDaoSqlite(options.sqliteDB, "productos")
        contenerdorDaoCarritos = new carritosDaoSqlite(options.sqliteDB, "carritos")
        break

    case "mariadb":
        const {productosDaoMariadb} = await import("./productos/productosSql.js")
        const {carritosDaoMariadb} = await import("./carrito/carritoSql.js")
        contenedorDaoProductos = new productosDaoMariadb(options.mariaDB, "products")
        contenerdorDaoCarritos = new carritosDaoMariadb(options.mariaDB, "cart")
        
    case "mongo":
        break
    case "firebase":
        break

}
export {contenedorDaoProductos,contenerdorDaoCarritos}