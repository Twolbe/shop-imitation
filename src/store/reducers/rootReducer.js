import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import catalogReducer from "./catalogReducer"

const rootReducer = combineReducers({
    catalog: catalogReducer,
    cart: cartReducer
})

export default rootReducer