import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cart/cart-slice";
import wishlistReducer from '../features/wishlist/wishlist-slice';
import productReducer from '../features/product/product-slice';
import compareReducer from '../features/compare/compare-slice';
import authReducer from '../features/auth/auth-slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    product: productReducer,
    compare: compareReducer,
    auth: authReducer
  },
});
