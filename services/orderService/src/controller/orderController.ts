import { Request,Response } from "express"
import Order from "../model/orderModel"

const placeOrder = async(req:Request,res:Response)=>{
   console.log('***     its   here in place order    ***');
   
    
    try {
        const {userId,products,totalPrice,status}= req.body 
    console.log(userId,'userId in place order ')
        const newOrder = await Order.create({
            userId,
            products,
            totalPrice,
            status
        })
        return res.status(200).json({order:newOrder})
    } catch (error) {
        console.error('Error updating data',error);
    }
}

const getOrdersByUser = async(req:Request,res:Response)=>{
    const userId = req.params._id
    console.log(userId,'userId in get Order by user ')
    try {   
        const getOrder = await Order.find({userId})
        console.log(getOrder,'get order in getOrder by user ')
        res.status(200).json({order:getOrder})
    } catch (error) {
        console.error('Error founded order getting ',error);
    }
}
export default {
    placeOrder,
    getOrdersByUser
}