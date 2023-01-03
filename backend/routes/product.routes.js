const express = require('express')
const router = express.Router()
const { 
    createProduct, 
    getAllProducts, 
    getSingleProduct, 
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller')
const { protect, admin } = require('../middleware/auth.middleware')

router.route('/')
    .post(protect, admin, createProduct)
    .get(getAllProducts)
router.route('/:id')
    .get(getSingleProduct)
    .patch(updateProduct)
    .delete(deleteProduct)

module.exports = router