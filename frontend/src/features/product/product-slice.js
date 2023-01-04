import axios from 'axios'
import productService from './product.service';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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


export const fetchProductDetails = createAsyncThunk(
    'product/fetchProduct',
    async (id, thunkAPI) => {
        try {
            return await productService.fetchProductDetails(id) 
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
            .addCase(fetchProductDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProductDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.product = action.payload
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.error.message
            })
        }
    }
);

export const selectProducts = (state) => state.product.products
export const selectProduct = (state) => state.product.product

export default productSlice.reducer;
