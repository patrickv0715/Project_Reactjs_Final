import express from 'express'
const router = express.Router()
import {addOrderItems} from '../controllers/orderController.js'
import {protect} from '../middleWare/authMiddleWare.js'

router.route('/').post(protect,addOrderItems)

export default router