import express,{Request,Response} from 'express'
import connectToDatabase from './config/config'
import productRoute from './routes/productRoute'

const app = express()
app.use(express.json())
connectToDatabase()
app.get('/',(req:Request,res:Response)=>{
    res.send('product service is working ')
})

app.use('/',productRoute)

const port = 3002
app.listen(port,()=>console.log(`http://localhost:${port}`))