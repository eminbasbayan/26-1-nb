const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const validate = require('../validators/validate');
const {
  createProductValidator,
  productIdParamValidator,
  getProductsByCategoriesValidator,
  updateProductValidator,
} = require('../validators/productValidators');
const { verifyAccessToken } = require('../middleware/auth');
const { authorizeRoles } = require('../middleware/roles');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         category:
 *           type: object
 *         description:
 *           type: string
 *         inStock:
 *           type: boolean
 *         tags:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Tum urunleri listeler
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Basarili urun listesi
 *       401:
 *         description: Yetkilendirme hatasi (token yok/gecersiz)
 *       403:
 *         description: Rol yetkisi yetersiz
 */
router.get(
  '/',
  verifyAccessToken,
  authorizeRoles('admin'),
  productController.getAllProducts,
);

router.get(
  '/by-categories',
  getProductsByCategoriesValidator,
  validate,
  productController.getProductsByCategories,
);

router.post(
  '/',
  verifyAccessToken,
  authorizeRoles('admin'),
  createProductValidator,
  validate,
  productController.createNewProduct,
);

router.put(
  '/:productId',
  verifyAccessToken,
  authorizeRoles('user'),
  updateProductValidator,
  validate,
  productController.updateProduct,
);

router.delete(
  '/:productId',
  verifyAccessToken,
  authorizeRoles('admin', 'user'),
  productIdParamValidator,
  validate,
  productController.deleteProduct,
);

module.exports = router;
