import { createSlice } from "@reduxjs/toolkit";

const email = localStorage.getItem("email");
// const password = localStorage.getItem("password");
// const name = localStorage.getItem("name");
// const loggedUser = { email, password, name };

const initialState = {
  user: email,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("password", action.payload.password);
      console.log(state.user);
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
