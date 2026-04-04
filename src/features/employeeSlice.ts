import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const employeesSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {},
    updateEmployee: () => {},
    deleteEmployee: () => {},
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } =
  employeesSlice.actions;

export default employeesSlice.reducer;
