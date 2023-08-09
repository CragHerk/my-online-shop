// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/cartSlice";
import loaderReducer from "../Slices/loaderSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    loader: loaderReducer,
  },
});
