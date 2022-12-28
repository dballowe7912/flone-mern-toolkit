const Product = require('../models/product.model')

// @desc    Create Product
// @route   POST /api/v1/products
// @access  Private
const createProduct = async (req, res) => {
    const product = await Product.create(req.body)
    res.status(201).json({ product })
}

// @desc    Get All Products
// @route   GET /api/v1/products
// @access  Public
const getAllProducts = async (req, res) => {
    // const pageSize = 12
    // const page = Number(req.query.pageNumber) || 1
    
    const products = await Product.find({})
        // .limit(pageSize)
        // .skip(pageSize * (page - 1))
    res.status(200).json({ products })
}

// @desc    Get Single Product
// @route   GET /api/v1/products/:id
// @access  Public
const getSingleProduct = async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id })

    if (!product) {
        throw new Error('Product not found')
    }
    res.status(200).json({ product })
}

// @desc    Update Product
// @route   PATCH /api/v1/products/:id
// @access  Private
const updateProduct = async (req, res) => {
    const product = await Product.findOneAndUpdate(req.params.id, req.body, {
        new: true
    })
    
    if (!product) {
        throw new Error('Product not found.')
    }

    res.status(200).json({ product })
}

// @desc    DELETE Product
// @route   DELETE /api/v1/products/:id
// @access  Private
const deleteProduct = async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id })

    if (!product) {
        throw new Error('Product not found.')
    }

    await product.remove()
    res.status(200).json({ msg: 'Product removed.'})
}

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}