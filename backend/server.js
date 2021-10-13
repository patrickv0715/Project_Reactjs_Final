// const express = require('express') Common js replaces with ESM
import express from 'express'
// const dotenv = require ('dotenv')
import dotenv from 'dotenv'
// const products = require('./data/products')
// import products from './data/products.js' ----OLD PRODUCT LIST
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js' 
import userRoutes from './routes/userRoutes.js'
//Error Handler
import {notFound,errorHandler} from './middleWare/errorMiddleWare.js'
//Global env variables
dotenv.config()
// Connect to database
connectDB() 
//Create Server
const app = express()

app.use(express.json())
//Do this if url=/api and method=get
app.get('/api',(req,res)=>{
    res.send('API is running...')
})
//Do this if url=/api/products
app.use('/api/products',productRoutes)

//Do this if url=/api/products
app.use('/api/users',userRoutes)

//ERROR HANDLERS
app.use(notFound)
app.use(errorHandler)



const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))