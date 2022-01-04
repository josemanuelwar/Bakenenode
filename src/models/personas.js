const {DataTypes} = require('sequelize');

const db = require('../services/db');

const Persona = db.define('Personas',{
    Nombres:{
        type:DataTypes.STRING
    },
    Apellido_patreno:{
        type:DataTypes.STRING
    },
    Apellido_materno:{
        type:DataTypes.STRING
    },
    Direccion:{
        type:DataTypes.STRING
    },
    Telefono:{
        type:DataTypes.STRING
    }
})

module.exports=Persona;