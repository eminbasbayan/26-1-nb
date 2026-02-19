const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/',  productController.getAllProducts);
router.post('/', productController.createNewProduct);
router.put('/', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;
