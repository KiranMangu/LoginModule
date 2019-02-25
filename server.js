import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import * as data from './config/config'
import { db } from './model/db';

var app = express();
app.use(bodyparser.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log('Backend: Server response');
});

app.get('/app', (req, res) => {
    console.log('Backend: Server response /app');
});

db();

app.listen(process.env.PORT, () => {
    console.log('Express: Server running on Port: ' + process.env.PORT);
})