const {DataTypes} = require('sequelize');

const db = require('../services/db');

const Pelicula= db.define('pelicula',{
    nombre_pelicula:{
        type:DataTypes.STRING
    },
    descripcion_pelicula:{
        type:DataTypes.STRING
    },
    tipo_pelicula:{
        type:DataTypes.STRING
    },
    fecha_estreno_pelicula:{
        type:DataTypes.DATE
    },
    precio_pelicula:{
        type:DataTypes.FLOAT
    }
})

module.exports=Pelicula;