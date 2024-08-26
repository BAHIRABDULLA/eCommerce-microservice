
import { Schema, model } from "mongoose";

interface IProduct {
    name: string,
    category: string,
    quantity: number,
    price: number
}

const schema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export default model<IProduct>('Product', schema)