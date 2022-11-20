import { ContenedorArchivos } from "../../contenedor/contenedorArchivos.js";

class CarritoDaoArchivos extends ContenedorArchivos{
    constructor(filename){
        super(filename)
    }
}

export {CarritoDaoArchivos}