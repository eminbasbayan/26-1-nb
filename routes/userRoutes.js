const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * components:
 *   schemas:
 *     LegacyUser:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         email:
 *           type: string
 *           format: email
 *     LegacyUserCreateInput:
 *       type: object
 *       additionalProperties: true
 *       description: Bu endpoint validation kullanmadigi icin serbest payload kabul eder
 *     LegacyUserUpdateInput:
 *       type: object
 *       required:
 *         - id
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *         email:
 *           type: string
 *           format: email
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Tum kullanicilari listeler
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Basarili kullanici listesi
 *   post:
 *     summary: Yeni kullanici kaydi ekler
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LegacyUserCreateInput'
 *     responses:
 *       200:
 *         description: Guncel kullanici listesi doner
 *   put:
 *     summary: Kullanici email bilgisini gunceller
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LegacyUserUpdateInput'
 *     responses:
 *       200:
 *         description: Guncelleme sonucu doner
 */
router.get('/', userController.getAllUsers);
router.post('/', userController.createNewUser);
router.put('/', userController.updateUser);

/**
 * @swagger
 * /api/users/{userId}:
 *   delete:
 *     summary: Kullaniciyi siler
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Kalan kullanici listesi doner
 */
router.delete('/:userId', userController.deleteUser);

module.exports = router;
