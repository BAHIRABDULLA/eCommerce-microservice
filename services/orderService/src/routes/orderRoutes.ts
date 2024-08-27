import { Request,Response,Router } from "express";

const router = Router()

import orderController from "../controller/orderController";
const {placeOrder,getOrdersByUser}= orderController

router.post('/placeOrder',placeOrder)
router.get('/getOrder/:id',getOrdersByUser)

export default router