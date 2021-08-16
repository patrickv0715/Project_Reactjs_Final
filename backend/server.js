// const express = require('express') Common js replaces with ESM
import express from 'express'
// const dotenv = require ('dotenv')
import dotenv from 'dotenv'
// const products = require('./data/products')
import products from './data/products.js'

const app = express()

dotenv.config()
const PORT=process.env.PORT || 5000
app.get('/api/products',(req,res)=>{
    res.json(products)
})


app.get('/api/products/:id',(req,res)=>{
    const product=products.find((p)=>p._id===req.params.id)
    console.log(`Requested id:${req.params.id} - ${product.name}`)
    res.json(product)
})


app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))