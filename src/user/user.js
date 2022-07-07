import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("password", action.payload.password);
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
