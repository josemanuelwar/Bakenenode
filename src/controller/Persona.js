const { request,response } = require("express")
const personas = require("../models/personas")

const PersonaController={}

PersonaController.GetPersonas= async (request,response)=>{
    const Person= await personas.findAll()
    response.status(200).json(Person);
}

PersonaController.GetPersonasId = async (request,response)=>{
    const id = request.params.id
    const Person = await personas.findByPk(id)
    if(Person){
        response.status(200).json(Person);
    }else{
        response.status(400).json({msg:`Esa persona no existe con es id ${id}` })
    }
}

PersonaController.CreatPersonas = async (request,response)=>{
 const { body } = request;
 try {
    //  const existeEmail = await personas.findOne({
    //      where:{
    //      email:body.email
    //      }
    // })
     const Personas = new personas(body);
     await Personas.save()
     response.status(200).json(Personas)

 } catch (error) {
    console.log(error)
    response.status(500).json({msg:"Comunicate con el administrador"})     
 }
}

PersonaController.UpdatePesrona = async (request,response)=>{
    const { id } = request.params;
    console.log(request.params)
    const { body } = request;
    try {
        const person = await personas.findByPk(id)
        if(!person){
            return response.status(400).json({msg:`La persona que intenta actualizar con es id ${id} no existe`})
        }

        await person.update(body)
        
        response.status(200).json(person)
        
    } catch (error) {
        console.log(error)
        response.status(500).json({msg:"Comunicate con el administrador"})
    }
}

PersonaController.DeletePersona = async (request,response)=>{
    const { id } = request.params;
    try {
        const person = await personas.findByPk(id)
        if(!person){
            return response.status(400).json({msg:`La persona que intenta actualizar con es id ${id} no existe`})
        }

        await person.destroy()
        
        response.status(200).json(person)
        
    } catch (error) {
        console.log(error)
        response.status(500).json({msg:"Comunicate con el administrador"})
    }
}
module.exports={
    PersonaController
}