import { toast } from 'react-toastify'
const { createSlice } = require('@reduxjs/toolkit');

const compareSlice = createSlice({
    name: "compare",
    initialState: {
        compareItems: []
    },
    reducers: {
        addToCompare(state, action) {
            state.compareItems.push(action.payload);
            toast("Added To compare", {position: "bottom-left", theme: "dark"});
        },
        deleteFromCompare(state, action){
            state.compareItems = state.compareItems.filter(item => item._id !== action.payload);
            toast("Removed From Compare", {position: "bottom-left", theme: "dark"});
        }
    },
});

export const { addToCompare, deleteFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
