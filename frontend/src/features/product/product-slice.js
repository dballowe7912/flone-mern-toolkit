import productService from './product.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    product: {},
    isLoading: false,
    isSuccess: false,
    message: ''
}

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts', 
    async (_, thunkAPI) => {
    try {
        return await productService.fetchProducts()
    } catch (error) {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const listProductDetails = createAsyncThunk(
    'product/listProductDetails',
    async (id, thunkAPI) => {
        try {
            return await productService.listProductDetails(id) 
        } catch (error) {
            const message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (id, thunkAPI) => {
        try {
            return await productService.deleteProduct(id)
        } catch (error) {
            const message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.error.message
            })
            .addCase(listProductDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(listProductDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.product.product = action.payload
            })
            .addCase(listProductDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.error.message
            })
        }
    }
)

export const selectAllProducts = (state) => state.product.products
export const selectProduct = (state) => state.product.product.product

export default productSlice.reducer
