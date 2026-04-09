import { createSlice } from "@reduxjs/toolkit";

export interface admin {
  id: string;
  password:string;
  employerId: string; // e.g., "EMP001"
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

export type EmployeeRole = "admin" | "employee" | "manager" | "team-lead";

export type EmployeeStatus = "active" | "inactive" | "on-leave" | "terminated";

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
export type Admin = admin[] 

const initialState: Admin = [];

const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    addAdmin: () => {},
    updateAdmin: () => {},
    deleteAdmin: () => {},
  },
});

export const { addAdmin, updateAdmin, deleteAdmin } = adminsSlice.actions;

export default adminsSlice.reducer;
