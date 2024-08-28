import ampq,{Connection,Channel} from 'amqplib'

let connection:Connection;
let channel:Channel;


export const connectRabbitmq = async ()=>{
    try {
        connection =await ampq.connect(process.env.RABBITMQ_URL || 'ampq://localhost')
        channel = await connection.createChannel()
        console.log('connected to rabbitmq');
    } catch (error) {
     console.error('Error connecting rabbitmq',error);
    }
}

export const getChannel = ()=>channel;