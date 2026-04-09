import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";
export interface Employee {
  id: string;
  employeeId: string; // e.g., "EMP001"
  password:string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  avatar?: string;
  department: string;
  departmentId: string;
  position: string;
  role: EmployeeRole;
  status: EmployeeStatus;
  salary?: number;
  hireDate: string;
  location: string;
  manager?: string;
  managerId?: string;
  skills?: string[];
  bio?: string;
  dateOfBirth?: string;
  address?: Address;
  emergencyContact?: EmergencyContact;
  performanceRating?: number;
  completionRate?: number;
  tasksCompleted?: number;
  totalTasks?: number;
  createdAt: string;
  updatedAt: string;
}

export type EmployeeRole = 'admin' | 'employee' | 'manager' | 'team-lead';

export type EmployeeStatus = 'active' | 'inactive' | 'on-leave' | 'terminated';

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}
export type EmployeeState = Employee[]
const initialState:EmployeeState = [];

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
