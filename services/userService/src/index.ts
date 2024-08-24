import express,{Request,Response} from "express"
import connectDB from "./config/config"


const app  = express()

app.use(express.json())

connectDB()

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello....')
})
const port = 3001
app.listen(port,()=>console.log(`server running on http://localhost:${port}`));
