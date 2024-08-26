import mongoose from "mongoose";
import 'dotenv/config'

const connectDb = async ():Promise<void> => {
    try {
        const mongo_uri = process.env.MONGO_URI as string
        await mongoose.connect(mongo_uri)
        console.log('Connected to mongodb ');
    } catch (error) {
        console.error('Error connecting mongodb',error);
        process.exit(1)
    }
}
export default connectDb