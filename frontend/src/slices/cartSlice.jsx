import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
}


function updateCart(state) {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    return state;
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x._id === item._id);
            if (existItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x._id === existItem._id ? item : x
                );
            } else {
                state.cartItems.push(item);
            }
            return updateCart(state);
        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter((x) => x._id !== item._id);
            return updateCart(state);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
