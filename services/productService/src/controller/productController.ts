import { Request,Response } from "express"
import Product from "../model/productModel"

const productAdd = async(req:Request,res:Response)=>{
    const {name,category,quantity,price}:{name:string;category:string;quantity:number;price:number} =req.body
    try {
        const existingProduct = await Product.findOne({name})
        if(existingProduct){
            return res.json({message:"this product is already existed"})
        }
        const newProduct = Product.create({
            name,
            category,
            quantity,
            price
        })
        console.log(newProduct,'newProduct');
        return res.status(200).json({Products:newProduct})
        
    } catch (error) {
        console.error('Cannot add product',error);
        res.status(500).json({message:"Product cannot be added"})
        
    }
}
const productEdit = async(req:Request,res:Response)=>{
    const {name,category,price,quantity}:{name:string;category:string;price:number;quantity:number} = req.body
    const productId = req.params._id
    console.log(productId,'productId')
    try {
        const existingProduct = await Product.findOne({name:name,_id:{$ne:productId}})
        if(existingProduct){
            return res.status(400).json({message:"This product already existed"})
        }
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {name,category,price,quantity},{new:true}
        )
        console.log(updatedProduct,'updatedProduct')
    } catch (error) {
        console.error('Cannot update product',error);
        res.status(500).json({message:"Product cannot be updated"})
        
    }
}

export default {
    productAdd,
    productEdit
}