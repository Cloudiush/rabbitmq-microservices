const amqp = require('amqplib');

const RABBITMQ_URL = `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}`;
const QUEUE = 'zadania_kolejka';

async function connectAndReceive() {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(QUEUE, { durable: false });

        console.log('Konsument połączony z RabbitMQ! Czekam na zadania...');

        channel.consume(QUEUE, (msg) => {
            if (msg !== null) {
                console.log(`Przetworzono: '${msg.content.toString()}'`);
                channel.ack(msg);
            }
        });

    } catch (error) {
        console.log('Czekam na start RabbitMQ...');
        setTimeout(connectAndReceive, 3000);
    }
}

connectAndReceive();