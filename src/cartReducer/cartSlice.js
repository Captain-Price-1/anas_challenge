import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const initialState = {
  cartItems: data,
  total: 0,
  amount: 5,
  distinctItems: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      console.log("here in incrase");
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
      cartItem.cost = cartItem.price * cartItem.amount;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
      cartItem.cost = cartItem.price * cartItem.amount;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    dist: (state) => {
      state.distinctItems = 0;
      state.cartItems.forEach((cartItem) => {
        if (cartItem.amount > 0) {
          state.distinctItems++;
        }
      });
    },
  },
});

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  dist,
} = cartSlice.actions;
export default cartSlice.reducer;
