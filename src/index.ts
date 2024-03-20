
import "reflect-metadata"
import express from 'express';
import cors from 'cors';

const app = express();

//CORS
app.use(cors());
app.use(express.json());

//ROUTES

app.use('/', (_, res) => {
    res.json({
        message: 'API - OK'
    });
});

app.listen(3000, () => {
    console.log('Server running in port ', 3000);
});