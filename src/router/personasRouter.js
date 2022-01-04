const express = require("express")
const router = express.Router()

const PersonaController = require("../controller/Persona")


router.get('/personas',PersonaController.PersonaController.GetPersonas)
router.get('/personas/:id',PersonaController.PersonaController.GetPersonasId)
router.post('/personas',PersonaController.PersonaController.CreatPersonas)
router.put('/personas/:id',PersonaController.PersonaController.UpdatePesrona)
router.delete('/personas/:id',PersonaController.PersonaController.DeletePersona)

module.exports=router