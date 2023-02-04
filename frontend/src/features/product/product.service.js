import axios from 'axios'

// createProduct**
// retrieveProducts**
// updateProduct**
// deleteProduct**
// deleteAllProducts
// findProductsByTitle**

const API_URL = '/api/v1/products'

// Fetch Products
// retrieveProducts
const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}`)
    if (response) {
        console.log(response.data.products)
        return response.data.products
    }
}

// Fetch Product Details
// findProductsByTitle
const listProductDetails = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`)
    if (response) {
        return await response.data.product
    } else {
        console.log('wtf is this not working')
    }
}

// Delete Product
// deleteProduct
const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
    console.log('Product deleted');
}

// createProduct
// updateProduct
// deleteAllProducts

const productService = {
    fetchProducts,
    listProductDetails,
    deleteProduct
}

export default productService