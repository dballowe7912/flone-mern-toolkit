import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify'
const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            if(!product.variation){
                const cartItem = state.cartItems.find(item => item.id === product._id);
                if(!cartItem){
                    state.cartItems.push({
                        ...product,
                        quantity: product.quantity ? product.quantity : 1,
                        cartItemId: uuidv4()
                    });
                } else {
                    state.cartItems = state.cartItems.map(item => {
                        if(item.cartItemId === cartItem.cartItemId){
                            return {
                                ...item,
                                quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1
                            }
                        }
                        return item;
                    })
                }

            } else {
                const cartItem = state.cartItems.find(
                    item =>
                        item.id === product._id &&
                        product.selectedProductColor &&
                        product.selectedProductColor === item.selectedProductColor &&
                        product.selectedProductSize &&
                        product.selectedProductSize === item.selectedProductSize &&
                        (product.cartItemId ? product.cartItemId === item.cartItemId : true)
                );
                if(!cartItem){
                    state.cartItems.push({
                        ...product,
                        quantity: product.quantity ? product.quantity : 1,
                        cartItemId: uuidv4()
                    });
                } else if (cartItem !== undefined && (cartItem.selectedProductColor !== product.selectedProductColor || cartItem.selectedProductSize !== product.selectedProductSize)) {
                    state.cartItems = [
                        ...state.cartItems,
                        {
                            ...product,
                            quantity: product.quantity ? product.quantity : 1,
                            cartItemId: uuidv4()
                        }
                    ]
                } else {
                    state.cartItems = state.cartItems.map(item => {
                        if(item.cartItemId === cartItem.cartItemId){
                            console.log(cartItem);
                            return {
                                ...item,
                                quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1,
                                selectedProductColor: product.selectedProductColor,
                                selectedProductSize: product.selectedProductSize
                            }
                        }
                        return item;
                    });
                }
            }

            toast("Added To Cart", {position: "bottom-left", theme: "dark"});
        },
        deleteFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.cartItemId !== action.payload);
            toast("Removed From Cart", {position: "bottom-left", theme: "dark"});
        },
        decreaseQuantity(state, action){
            const product = action.payload;
            if (product.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.cartItemId !== product.cartItemId);
                toast("Removed From Cart", {position: "bottom-left", theme: "dark"});
            } else {
                state.cartItems = state.cartItems.map(item =>
                    item.cartItemId === product.cartItemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
                toast("Item Decremented From Cart", {position: "bottom-left", theme: "dark"});
            }
        },
        deleteAllFromCart(state){
            state.cartItems = []
        }
    },
});

export const { addToCart, deleteFromCart, decreaseQuantity, deleteAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;
