import axios from 'axios'

const API_URL = '/api/v1/products'

// Fetch Products
const fetchProducts = async (pageNumber = '') => {
    const response = await axios.get(`${API_URL}?pageNumber=${pageNumber}`)
    if (response) {
        return response.data.products
    }
}

// Fetch Product Details
const fetchProductDetails = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
}

// Delete Product
const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
    console.log('Product deleted');
}
const productService = {
    fetchProducts,
    fetchProductDetails,
    deleteProduct
}

export default productService