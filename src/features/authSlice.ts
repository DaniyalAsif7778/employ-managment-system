import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

export interface  status {
  login: boolean;
}

const initialState:status = {
  login: false,
};

export const  authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Login: () => {},
    Logout: () => {},
  },
});

export const { Logout, Login } = authSlice.actions;

export default authSlice.reducer;
