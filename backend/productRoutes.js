import express from 'express';
import { Pool } from 'postgres-pool';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});


//Route to get all products
router.get("/products", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//route to get product by id
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        if (result.rows.length == 0) {
            return res.status(404).json({error: 'Product not found'});
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({error: 'Internal server error'});
    }
});

//route to get product by category id
router.get('/products')

export default router;