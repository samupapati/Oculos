import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlicer'

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})