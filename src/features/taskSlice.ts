import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: () => {},
    deleteTask: () => {},
   },
});

export const { deleteTask, addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
