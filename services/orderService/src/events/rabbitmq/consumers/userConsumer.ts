import { getChannel } from "../../../config/rabbitmq";
import User from "../../../model/userModel";


const USER_QUEUE = 'userQueue'

export const startUserConsumer = async () => {
    try {
        const channel = getChannel()
        await channel.assertQueue(USER_QUEUE, { durable: true })
        console.log('waiting for message is %s', USER_QUEUE);
        channel.consume(USER_QUEUE, async (message) => {
            if (message) {
                try {
                    const user = JSON.parse(message.content.toString())
                    console.log('Recieved user :', user);
                    const newUser = new User({
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        password:user.password
                    });
                    await newUser.save(); 

                    console.log('User saved to database:', newUser);
                    channel.ack(message)
                } catch (error) {
                    console.error('Error processing the user message:', error);
                }
            }
        })

    } catch (error) {
        console.error('Error starting user consumer', error);
    }
}