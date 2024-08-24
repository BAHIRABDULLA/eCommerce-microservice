    import jwt from 'jsonwebtoken'

const secretKey = process.env.JWT_SECRET || 'fallback-secret-key'

export const generateToken = (userId:string)=>{
    return jwt.sign({id:userId},secretKey,{expiresIn:'1h'})
}

export const verifyToken = (token:string)=>{
    try {
        return jwt.verify(token,secretKey)
    } catch (error) {
        throw new Error('Invalid token')
    }
}