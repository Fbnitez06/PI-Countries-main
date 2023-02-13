const { Router } = require("express");

const usersRouter = Router

usersRouter.get("/",(req, res)=>{
    res.send("Estoy en users")
})

usersRouter.get("/:id",(req, res)=>{
    res.send("Detalles de los paises")
})

usersRouter.post("/",(req, res)=>{
    res.send("Creando un usuario")
})

module.exports = usersRouter;    