import { ContenedorArchivos } from "../../contenedor/contenedorArchivos.js";

class ProductosDaoArchivos extends ContenedorArchivos{
    constructor(filename){
        super(filename)
    }
}

export {ProductosDaoArchivos}