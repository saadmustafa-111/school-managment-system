import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("setUser action called with payload:", action.payload); // Debugging log
      state.user = action.payload;
      state.isAuthenticated = true;
      console.log("Updated state:", state); // Debugging log
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
