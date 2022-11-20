import express from 'express'
import {productRouter} from './routes/products.js'
import {carritoRouter} from "./routes/carrito.js"

const app = express ()

const PORT = process.env.PORT || 8080



const server = app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto 8080")
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/productos", productRouter)
app.use("/api/carrito", carritoRouter)

app.get("/*", (req, res)=>{
    res.send({
        error: -2,
        descripcion: `ruta ${req.path} metodo ${req.method} no implementada`
    })
});