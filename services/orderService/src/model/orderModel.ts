import mongoose, { Schema ,Document} from 'mongoose'


interface IProduct{
    productId:mongoose.Schema.Types.ObjectId;
    quantity:number;
    price:number;
}

interface IOrder extends Document{
    userId:mongoose.Schema.Types.ObjectId;
    products:IProduct[];
    totalPrice:number;
    status:string;
    createdAt:Date
}

const OrderSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
  });
  
  export default mongoose.model<IOrder>('Order', OrderSchema);