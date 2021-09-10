import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

// @desc        Authenticate user
// @route       POST /api/users/login
// @access      Public

const authUser = asyncHandler(async(req,res) => {
   const {email,password}=req.body
//    res.send({email,password})
   const user= await User.findOne({email:'john@example.com'})
//    console.log(user)
    if(user&&(await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    } else{
        res.status(401)
        throw new Error('Invalide email or password')
    }
})

// @desc        Get user profile
// @route       GET /api/users/profile
// @access      Private

const getUserProfile = asyncHandler(async(req,res) => {
    res.send('SUCCESS')
})


export{authUser,getUserProfile}