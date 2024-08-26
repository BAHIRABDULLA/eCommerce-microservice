import { Request,Response,NextFunction } from "express";
import jwt,{JwtPayload} from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET || 'fallback-secret-key'

interface CustomRequest extends Request{
    user?:JwtPayload | string
}

export const authMiddleWare = (req:CustomRequest,res:Response,next:NextFunction)=>{
    const authorizationHeader = req.headers.authorization
    console.log(authorizationHeader,'before token ');
    if(!authorizationHeader){
        res.json({message:'no token provided'})
    }
    const token = req.headers.authorization?.split(' ')[1]
    console.log(token,'token')
    if(!token){
        res.status(400).json({message:"No token provided"})
    }
    try {
        const decoded = jwt.verify(token as string,secretKey) as JwtPayload | string
        req.user = decoded
        next()
    } catch (error) {
        
    }
}