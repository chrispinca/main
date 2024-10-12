import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Pool } from 'postgres-pool';
import productRoutes from './productRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/', productRoutes);

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.connect()
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.error("Database connection error:", err.stack);
    });


app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to my online store app!");
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});