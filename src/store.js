import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user";
import cartReducer from "./cartReducer/cartSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
