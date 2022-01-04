const express = require("express")
const router = express.Router()

const PeliculaController = require("../controller/pelicula")

router.get("/peliculas",PeliculaController.PeliculaController.GetPeliculas)

module.exports=router