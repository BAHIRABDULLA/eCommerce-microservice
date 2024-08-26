import { model, Schema } from "mongoose";


interface IUser {
    name: string,
    email: string,
    phone: number,
    password: string
}

const schema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
export default model<IUser>("User", schema)