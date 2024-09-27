import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to my online store app!");
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});