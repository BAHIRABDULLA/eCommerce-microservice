import express,{Request,Response} from "express"
import connectDB from "./config/config"
import router from "./routes/userRoute"

const app  = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDB()

app.get('/', (req, res) => res.send('Server is running'));

app.use('/',router)

const port = 3001
app.listen(port,()=>console.log(`server running on http://localhost:${port}`));