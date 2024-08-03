import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModels.js'

const app = express()

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('Learning MERN')
})

app.post('/books',async (request,response)=>{
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear)
        {
            return response.
        }
    } catch (error) {
        console.log(error)
        response.status(500).send({message: error.message})
    }
})

mongoose.connect(MongoDBURL)
.then(()=>{
    console.log("Database connection Success")
    app.listen(PORT, () => {
        console.log(`App is running on ${PORT}`)
    })
    
})
.catch((err)=>{
    console.log(err)
})