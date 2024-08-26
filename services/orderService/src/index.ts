import express,{ Request,Response } from "express";

const app = express()

app.get('/',(req:Request,res:Response)=>{
    res.send('its worked')
})
const port = 3003
app.listen(3003,()=>console.log(`server running on http://localhost:${port}`))