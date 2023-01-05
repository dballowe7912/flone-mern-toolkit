import { toast } from 'react-toastify'
const { createSlice } = require('@reduxjs/toolkit');

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishlist(state, action) {
            const isInWishlist = state.wishlistItems.findIndex(item => item._id === action.payload._id);
            if(isInWishlist > -1){
                console.error("Product already in wishlist", {position: "bottom-left"});
            } else {
                state.wishlistItems.push(action.payload);
                toast("Added To wishlist", {position: "bottom-left", theme: "dark"});
            }
            
        },
        deleteFromWishlist(state, action){
            state.wishlistItems = state.wishlistItems.filter(item => item._id !== action.payload);
            toast("Removed From Wishlist", {position: "bottom-left", theme: "dark"});
        },
        deleteAllFromWishlist(state){
            state.wishlistItems = []
        }
    },
});

export const { addToWishlist, deleteFromWishlist, deleteAllFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
