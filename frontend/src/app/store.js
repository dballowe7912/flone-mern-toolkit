import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import currencyReducer from '../features/currency/currency-slice';
import cartReducer from "../features/cart/cart-slice";
import wishlistReducer from '../features/wishlist/wishlist-slice';
import productReducer from '../features/product/product-slice';
import compareReducer from '../features/compare/compare-slice';
import authReducer from '../features/auth/auth-slice';
import messageReducer from '../features/message/message-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currency: currencyReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    product: productReducer,
    compare: compareReducer,
    auth: authReducer,
    message: messageReducer
  },
});
