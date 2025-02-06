import {createSlice} from "@reduxjs/toolkit";
import Staff from "../models/Staff.ts";

const initialState: Staff[] = []
const StaffSlice = createSlice({
    name: 'staff',
    initialState: initialState,
    reducers: {
        add_staff: (state, action) => {
            state.push(action.payload)
        },
        update_staff: (state, action) => {
            const staff = state.find(staff => staff.staffID === action.payload.staffID)
            if (staff) Object.assign(staff, { ...action.payload })
        },
        delete_staff: (state, action) => {
            return state.filter(staff =>
                staff.staffID !== action.payload.staffID
            )
        }
    }
})

export const { add_staff, update_staff, delete_staff } = StaffSlice.actions
export default StaffSlice.reducer