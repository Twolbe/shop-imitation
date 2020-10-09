import CLEAN_CART from "../actions/cleanCart";

export const cleanCart = (item) => {
    return {
        type: CLEAN_CART,
        payload: []
    };

}