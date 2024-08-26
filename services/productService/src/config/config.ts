import mongoose from "mongoose";
import 'dotenv/config'

const connectToDatabase = async():Promise<void>=>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log('connected to mongodb ');
        
    } catch (error) {
        console.error('Error connecting mongodb');
        process.exit(1)
    }
}

export default connectToDatabase