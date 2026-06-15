export const addDecimals = (num) => Math.round(num * 100) / 100;


export const updateCart = (state) => {
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));
    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
    state.taxPrice = addDecimals(0.15 * state.itemsPrice);
    state.totalPrice = addDecimals(state.itemsPrice + state.shippingPrice + state.taxPrice);

    localStorage.setItem('cartItems', JSON.stringify(state));

    return state;
}