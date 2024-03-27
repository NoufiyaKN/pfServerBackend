// Loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

// Create an express application
const pfServer = express()

// Use cors in express server
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)

// Set up port
const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project Fair Server Started at PORT : ${PORT}`);
})

// http://localhost:3000/
pfServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Project Fair Server started and waiting for client reques</h1>`)
})
