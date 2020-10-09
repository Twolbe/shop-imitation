import DELETE_FROM_CART from "../actions/deleteFromCart";

export const deleteFromCart = (item) => {
    return {
        type: DELETE_FROM_CART,
        payload: item
    };
}