import express,{Request,Response} from "express"

const app  = express()
app.get('/',(req:Request,res:Response)=>{
    res.send('Hello....')
})
const port = 3001
app.listen(port,()=>console.log(`server running on http://localhost:${port}`));
