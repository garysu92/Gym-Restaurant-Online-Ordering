import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlice";
import productsSlice from "./menu/productsSlice";
import addressSlice from "./userInfo/addressSlice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productsSlice,
        address: addressSlice
    }
);

export default rootReducer;