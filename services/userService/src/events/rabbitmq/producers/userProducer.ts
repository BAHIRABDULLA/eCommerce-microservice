import { getChannel } from "../../../config/rabbitmq"


const USER_QUEUE = 'userQueue'

export const sendUserToQueue = async(user:object)=>{
    try {
        const channel = getChannel()
        await channel.assertQueue(USER_QUEUE,{durable:true})
        channel.sendToQueue(USER_QUEUE,Buffer.from(JSON.stringify(user)))
        console.log('User sent to queue ',user);
        
    } catch (error) {
        console.error('Error sending to queue ',error);
        
    }
}