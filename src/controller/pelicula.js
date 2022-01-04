const { request,response } = require("express")
const Pelicula = require("../models/pelicula")
const PeliculaController={}

PeliculaController.GetPeliculas = async (request,response) =>{
    const pelicula = await Pelicula.findAll()
    response.status(200).json(pelicula)
}

PeliculaController.GetPeliculaID= async (request,response)=>{
    const Id = request.params.Id
    const pelicula= await Pelicula.findByPk(Id)
    if(pelicula){
        response.status(200).json(pelicula)
    }else{
        response.status(404).json({msg:`No exite una pelicula con el id ${Id}`})
    }

}

module.exports={
    PeliculaController
}