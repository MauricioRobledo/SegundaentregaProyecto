import express from "express";
import {ContenedorArchivos} from "../contenedor/contenedorArchivos.js"
import { ContenedorMysql } from "../contenedor/contenedorSql.js";
import { options } from "../config/dbConfig.js";
import { contenerdorDaoCarritos, contenedorDaoProductos } from "../daos/index.js";


const carritoRouter = express.Router();
const carrito = contenerdorDaoCarritos
const listaDeProductos = contenedorDaoProductos

carritoRouter.post("/", async(req,res)=>{
    cart = {
        timestamp: Date.now(),
        productos: []
    }
    nuevoCarrito = await carrito.save(cart)
    res.json({
        message:"Carrito creado",
        cart: nuevoCarrito.slice(-1)
    })
})

carritoRouter.delete("/:id", async(req, res)=>{
    const id = parseInt(req.params.id)
    await carrito.deleteById(id)
    res.json[{
        message: "Se elimino con exito el carrito"
    }]
})

carritoRouter.get("/:id/productos", async(req, res)=>{
    const cartId = req.params["id"]
    const cart = await carrito.getAllProductsCart(parseInt(cartId))
    res.json(cart)
})

carritoRouter.post("/:id/productos", async(req, res)=>{
    const cartId = req.params.id
    const productId = req.body.id
    const product = await listaDeProductos.getById(parseInt(productId)) 
    await carrito.saveProduct(parseInt(cartId), product)
    res.json("Producto añadido al carrito")
    

})

carritoRouter.delete("/:id/productos/:id_prod", async(req, res)=>{
    const cartId = parseInt(req.params.id)
    const prodId = parseInt(req.params.id_prod)
    await carrito.deleteFromCart(cartId, prodId)
    res.json("Producto eliminado")
})

export {carritoRouter};