import express,{ Request,Response } from "express";
import connectDb from "./config/config";
import orderRouter from "./routes/orderRoutes";


const app = express()

connectDb()
app.use(express.json())
app.use('/',orderRouter)
app.get('/',(req:Request,res:Response)=>{
    res.send('its worked')
})
const port = 3003
app.listen(3003,()=>console.log(`server running on http://localhost:${port}`))