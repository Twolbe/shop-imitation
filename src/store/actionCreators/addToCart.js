import ADD_TO_CART from "../actions/addToCart";

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    };

}