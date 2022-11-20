import { ContenedorMysql } from "../../contenedor/contenedorSql.js";

class PruductosDaoSql extends ContenedorMysql{
    constructor(options,tableName){
        super(options,tableName)
    }
}

export {PruductosDaoSql}