import { ContenedorMysql } from "../../contenedor/contenedorSql.js";

class CarritosDaoSql extends ContenedorMysql{
    constructor(options,tableName){
        super(options,tableName)
    }
}

export {CarritosDaoSql}