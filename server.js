import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import * as data from './config/config'

var app = express();
app.use(bodyparser.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log('Backend: Server response');
});

app.listen(process.env.PORT, () => {
    console.log('Server running on Port: ' + process.env.PORT);
})