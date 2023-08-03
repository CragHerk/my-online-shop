import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        state[productIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    decreaseQuantity: (state, action) => {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload
      );

      if (productIndex !== -1 && state[productIndex].quantity > 1) {
        state[productIndex].quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const productIndex = state.findIndex(
        (product) => product.id === action.payload
      );

      if (productIndex !== -1) {
        state[productIndex].quantity += 1;
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      return state.filter((product) => product.id !== productId);
    },
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
