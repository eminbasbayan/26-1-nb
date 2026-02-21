const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validate = require('../validators/validate');
const { createProductValidator } = require('../validators/productValidators');

router.get('/',  productController.getAllProducts);
router.get('/by-categories', productController.getProductsByCategories);
router.post('/', createProductValidator, validate, productController.createNewProduct);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
