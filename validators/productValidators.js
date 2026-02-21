const { body } = require('express-validator');
const Category = require('../models/Category');

const createProductValidator = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Urun adi zorunludur')
    .isLength({ max: 120 })
    .withMessage('Urun adi en fazla 120 karakter olabilir'),

  body('price')
    .exists({ checkNull: true })
    .withMessage('Fiyat zorunludur')
    .bail()
    .isFloat({ min: 0 })
    .withMessage('Fiyat 0 veya daha buyuk bir sayi olmalidir'),

  body('category')
    .exists({ checkNull: true })
    .withMessage('Kategori zorunludur')
    .bail()
    .isMongoId()
    .withMessage('Kategori gecersiz formatta')
    .bail()
    .custom(async (categoryId) => {
      const category = await Category.findById(categoryId).select('_id').lean();

      if (!category) {
        throw new Error('Kategori bulunamadi');
      }

      return true;
    }),

  body('description')
    .optional()
    .isString()
    .withMessage('Aciklama metin olmalidir')
    .bail()
    .isLength({ max: 100 })
    .withMessage('Aciklama en fazla 100 karakter olabilir'),

  body('inStock')
    .optional()
    .isBoolean()
    .withMessage('inStock alani boolean olmalidir'),

  body('tags').optional().isArray().withMessage('tags alani dizi olmalidir'),

  body('tags.*')
    .optional()
    .isString()
    .withMessage('tags icindeki tum degerler metin olmalidir'),
];

module.exports = {
  createProductValidator,
};
