const express = require("express");
const app= express();
const port=6600
const bodyParser = require("body-parser")

const peliculasRouter= require('./router/PeliculaRouter')
const PersonasRouter = require('./router/personasRouter')

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyParser.json())

app.use(peliculasRouter)
app.use(PersonasRouter)

const db = require("./services/db");
app.get('/',(req,res)=>{
    res.send("hello word")
    
})

 const dbConetion=async()=>{
    try {
        await db.authenticate();
        console.log("basdatos onlain")
    } catch (error) {
        throw error
    }
}

app.listen(port,()=>{
    dbConetion();
    console.log("Servidor escuchado en ",port)
})