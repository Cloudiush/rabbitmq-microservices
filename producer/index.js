const amqp = require('amqplib');

const RABBITMQ_URL = `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}`;
const QUEUE = 'zadania_kolejka';

async function connectAndSend() {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(QUEUE, { durable: false });

        console.log('✅ Producent połączony z RabbitMQ!');
        let counter = 1;

        setInterval(() => {
            const msg = `Zadanie nr ${counter++}`;
            channel.sendToQueue(QUEUE, Buffer.from(msg));
            console.log(`[x] Wysłano: '${msg}'`);
        }, 3000);

    } catch (error) {
        console.log('⏳ Czekam na start RabbitMQ...');
        setTimeout(connectAndSend, 3000);
    }
}

connectAndSend();