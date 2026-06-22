const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// middleware to parse incoming JSON requests
app.use(express.json());

// mount routers - This routes any request starting with /api/products to your routes file
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Furniture Store API is running on http://localhost:${PORT}`);
});
