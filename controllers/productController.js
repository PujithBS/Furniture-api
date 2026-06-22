const products = require('../data/products');

// @desc    get all products
// @route   GET /api/products
const getProducts = (req, res) => {
    res.status(200).json({ success: true, count: products.length, data: products });
};

// @desc    update a product
// @route   PUT /api/products/:id
const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    products[index] = { ...products[index], ...req.body };
    res.status(200).json({ success: true, message: "Product updated", data: products[index] });
};

// @desc    create a new product
// @route   POST /api/products
const createProduct = (req, res) => {
    const { name, price, category, stock } = req.body;

    // validation
    if (!name || !price) {
        return res.status(400).json({ success: false, message: "Please provide a name and price" });
    }

    const newProduct = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
        name,
        category: category || "Uncategorized",
        price,
        stock: stock || 0
    };
    
    products.push(newProduct);
    res.status(201).json({ success: true, message: "Product added", data: newProduct });
};

module.exports = {
    getProducts,
    updateProduct,
    createProduct
};
