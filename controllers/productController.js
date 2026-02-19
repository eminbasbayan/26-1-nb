const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

const createNewProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
