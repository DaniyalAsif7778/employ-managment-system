// import { createSlice } from "@reduxjs/toolkit";

// import type { PayloadAction } from "@reduxjs/toolkit";

// interface user {
//     id: number,
//     name: string,
//     role: "admin" | "employee",
//     email: string,
//     department: string,
//     loginStatus: boolean,

// }

// interface Admin extends user {
//     role: "admin",
//     adminId: string
// }
// interface Employee extends user {
//     role: "employee",
//     employerId: string
// }
// type currentUser = Admin | Employee |  null;

// console.log();

// const initialState: currentUser =  null;

// const currentUserSlice = createSlice(
//     {
//         name: "currentUser",
//         initialState: null as currentUser ,
//         reducers: {
//             setCurrentUser: (state, action: PayloadAction<Admin | Employee>):currentUser => {
                 
                    
//                     return action.payload;  
                  
            
//             }

//         }
//     }
// )

// export const { setCurrentUser } = currentUserSlice.actions;

// export default currentUserSlice.reducer;