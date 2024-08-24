import bcryptjs from 'bcryptjs'
import { Request, Response } from 'express';
import User from '../model/userModel';

const userSignup = async (req: Request, res: Response) => {
    const { name, email, phone, password }: { name: string; email: string; phone: number; password: string } = req.body;
    try {
        const findExistingUser = await User.findOne({ email })
        if (findExistingUser) {
            return res.status(400).json({ message: 'you are already existed' })
        }
        const bcryptPassword = await bcryptjs.hash(password, 10)
        console.log(bcryptPassword, 'bcryptPass')

        await User.insertMany({
            name: name,
            email: email,
            phone: phone,
            password: bcryptPassword
        })
        const newUser = await User.create({
            name,
            email,
            phone,
            password: bcryptPassword
        })
        
        res.status(200).json({message:'user created successfully',user:newUser})
    } catch (error) {
        res.status(500).json({message:'server error',error})
    }


}
const userSignin = async (req: Request, res: Response) => {
    const { email, password }: { email: string; password: string } = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:'please register first'})
        }
        const passwordMatch = bcryptjs.compare(password,user.password)
        if(!passwordMatch){
            return res.status(400).json({message:"Authentication mismatched"})
        }
    } catch (error) {
        res.status(500).json({message:'server error',error})
    }
}
export default {
    userSignup,
    userSignin
}