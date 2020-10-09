import ADD_TO_CART from "../actions/addToCart";
import CLEAN_CART from "../actions/cleanCart";
import DELETE_FROM_CART from "../actions/deleteFromCart";
import initialState from "../initialState";

export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case ADD_TO_CART:
            if (!state.includes(action.payload)) {
                return state.concat(action.payload)
            } else { return state }
        case DELETE_FROM_CART:
            return state.filter((cartGoodsItem) => cartGoodsItem !== action.payload)
        case CLEAN_CART:
            return action.payload
        default:
            return state;
    }
}