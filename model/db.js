import mongoose from 'mongoose';
import * as data from '../config/config';

const connection = mongoose.connect(process.env.MONGO_URL);

connection.once('error', () => {

});

connection.once('open', () => {

});