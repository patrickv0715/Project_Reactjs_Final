import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc        Fetch all products
// @route       GET /api/products
// @access      Public

router.get(
    '/',
    asyncHandler(async(req,res)=>{
        const products =await Product.find({})
        // res.status(401)
        // throw new Error('NOT AUTHORIZED')
        res.json(products)
}))

// @desc        Fetch a single product
// @route       GET /api/products/id
// @access      Public

router.get(
    '/:id',
    asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product){
        // console.log(`Requested ${product.name}`)
        res.json(product)
    } else{
        // console.log(`Requested invalid id`)
        res.status(404)
        throw new Error('Product Not Found')
    }
}))

export default router