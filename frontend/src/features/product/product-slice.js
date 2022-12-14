import axios from 'axios'
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
    products: null,
    product: null,
    status: 'idle'
}

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts', 
    async (pageNumber = '') => {
    try {
        const response = await axios.get(`/api/v1/products?pageNumber=${pageNumber}`)

        return await response.data.products
    } catch (err) {
        return err.message
    }
})

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (id) => {
        try {
            const response = await axios.get(`/api/v1/products/${id}`)

            return await response.data.product
        } catch (err) {
            return err.message
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.product = action.payload
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
        }
    }
);

export const selectProducts = (state) => state.product.products
export const selectProduct = (state) => state.product.product

export default productSlice.reducer;
