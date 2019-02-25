import mongoose from 'mongoose';
import * as data from '../config/config';

export function db() {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    const connection = mongoose.connection;

    connection.on('error', (error) => {
        console.log(`Mongoose Error: Error connecting the Mongo DB with message: ${error}`);
    });
    connection.on('connected', () => {
        console.log("Mongoose Connected: Successfully connected with MONGO DB");
    });
    connection.once('open', () => {
        console.log("Mongoose Success: Successfully opened connection on MONGO DB");
    });
    connection.on('disconnected', () => {
        console.log("Mongoose Disconnected: Successfully disconnected from MONGO DB");
    });
};