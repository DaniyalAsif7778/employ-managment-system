import { configureStore } from "@reduxjs/toolkit";
 
//  import currentUserReducer from '../features/currentUser.js';
import menueReducer from '../features/menueSlice.js';
import adminsReducer from '../features/adminSlice.js'
import employeesReducer from '../features/employeeSlice.js'
import tasksReducer from '../features/taskSlice.js'
import authReducer from '../features/authSlice.js'
  export const store = configureStore({
    reducer: {
      admins: adminsReducer,
       employees: employeesReducer,
       tasks: tasksReducer,
       auth: authReducer,
      //  currentUser:currentUserReducer,
       menue:menueReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch