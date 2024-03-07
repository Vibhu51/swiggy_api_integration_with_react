import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"

export default appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});