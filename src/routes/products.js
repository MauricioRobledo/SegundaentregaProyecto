import express from "express";
import {ContenedorArchivos} from "../contenedor/contenedorArchivos.js"
import { options } from "../config/dbConfig.js";
import { ContenedorMysql } from "../contenedor/contenedorSql.js";
import {contenedorDaoProductos} from "../daos/index.js";

const productsRouter = express.Router();
const listaDeProductos = contenedorDaoProductos;

//ADMINISTRADOR

const admin = true

const verificarRol = (req, res, next)=>{
    if (admin){
        next()
    } else{
        res.send({
            error: -1,
            descripcion: `ruta ${req.path} metodo ${req.method} no autorizado`
        })
    }

}


productsRouter.get("/",async(req,res)=>{
    try {
        const products = await listaDeProductos.getAll()
        if (products){
            res.send(products)
        } else{
            res.json({
                message:"No hay productos"
            })
        }
        
    } catch(error) {
        res.status(500).send("hubo un error en el servidor")
    }
})

productsRouter.get("/:id", async(req,res)=>{
    const {id} = req.params;
    const product = await listaDeProductos.getById(parseInt(id));
    if(product){
        res.json({
            message:"producto encontrado",
            product: product
        })
    }else{
        res.json({
            message:"producto no encontrado"
        })
    }
})


productsRouter.post("/",verificarRol, async(req,res)=>{
    const newProduct = req.body
    const productos = await listaDeProductos.save(newProduct);
    res.json({
        message:"Producto creado",
        Response: productos
    })
})

productsRouter.put("/:id",verificarRol, async(req,res)=>{
    const {id} = req.params;
    const newInfo = req.body;
    const productosActualizados = await listaDeProductos.updateById(parseInt(id),newInfo);
    res.json({
        message:`El producto con el id ${id} fue actualizado`,
        response: productosActualizados
    })
})

productsRouter.delete("/:id",verificarRol, async(req,res)=>{
    const {id} = req.params
    const productosActualizados = await listaDeProductos.deleteById(parseInt(id))
    res.json({
        message: `El producto con el id ${id} fue eliminado`,
        response: productosActualizados
    })
})





export {productsRouter};