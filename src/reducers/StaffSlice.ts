import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Staff from "../models/Staff.ts";
import api from "../api/api.ts";

export const getAllStaffs = createAsyncThunk(
    'staff/getAllStaffs',
    async () => {
        try {
            const resp = await api.get('/staff/get')
            return resp.data
        } catch (e) {
            throw new Error('error in get all staffs: ' + e)
        }
    }
)

export const getStaffCount = createAsyncThunk(
    'staff/getStaffCount',
    async () => {
        try {
            const resp = await api.get('/staff/get_count')
            return resp.data
        } catch (e) {
            throw new Error('error in get staff count: ' + e)
        }
    }
)

export const saveStaff = createAsyncThunk(
    'staff/saveStaff',
    async (staffData: Staff) => {
        try {
            const staff = new FormData()
            staff.append("name", staffData.name)
            staff.append("gender", staffData.gender)
            staff.append("email", staffData.email)
            staff.append("role", staffData.role)
            staff.append("address", staffData.address)
            staff.append("joinedDate", staffData.joinedDate)
            staff.append("dob", staffData.dob)
            staff.append("designation", staffData.designation)
            staff.append("phone", String(staffData.phone))
            console.log("file1",staffData.img);
            
            staff.append("img", staffData.img)
            staff.append("status", staffData.status)

            const resp = await api.post('/staff/save', staff, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            return resp.data
        } catch (e) {
            throw new Error('error in save staff: ' + e)
        }
    }
)

export const updateStaff = createAsyncThunk(
    'staff/updateStaff',
    async (staffData: Staff) => {
        try {
            const staff = new FormData()
            staff.append("name", staffData.name)
            staff.append("gender", staffData.gender)
            staff.append("email", staffData.email)
            staff.append("role", staffData.role)
            staff.append("address", staffData.address)
            staff.append("joinedDate", staffData.joinedDate)
            staff.append("dob", staffData.dob)
            staff.append("designation", staffData.designation)
            staff.append("phone", String(staffData.phone))
            staff.append("img", staffData.img)
            console.log("file2",staffData.img);
            staff.append("status", staffData.status)

            const resp = await api.put(`/staff/update/${staffData.staffID}`, staff)
            return resp.data
        } catch (e) {
            throw new Error('error in update staff: ' + e)
        }
    }
)

export const deleteStaff = createAsyncThunk(
    'staff/deleteStaff',
    async (id: string) => {
        try {
            const resp = await api.delete(`/staff/delete/${id}`)
            return resp.data
        } catch (e) {
            throw new Error('error in delete staff: ' + e)
        }
    }
)

const StaffSlice = createSlice({
    name: 'staff',
    initialState: {
        staffList: [],
        staffCountList: [],
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllStaffs.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.staffList = action.payload
            })
            .addCase(getAllStaffs.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected get all staffs: ', action.payload)
            })
            .addCase(getAllStaffs.pending, (state, action) => {
                state.status = "loading"
                console.log('pending get all staffs')
            })
        builder
            .addCase(getStaffCount.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.staffCountList = action.payload
            })
            .addCase(getStaffCount.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected get staff count: ', action.payload)
            })
            .addCase(getStaffCount.pending, (state, action) => {
                state.status = "loading"
                console.log('pending get staff count')
            })
        builder
            .addCase(saveStaff.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.staffList.push(action.payload)
            })
            .addCase(saveStaff.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected save staffs: ', action.payload)
            })
            .addCase(saveStaff.pending, (state, action) => {
                state.status = "loading"
                console.log('pending save staffs')
            })
        builder
            .addCase(updateStaff.fulfilled, (state, action) => {
                state.status = "succeeded"
                const staff = state.staffList.find((s: Staff) => s.staffID === action.payload.staffID)
                if (staff) Object.assign(staff, action.payload)
            })
            .addCase(updateStaff.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected update staffs: ', action.payload)
            })
            .addCase(updateStaff.pending, (state, action) => {
                state.status = "loading"
                console.log('pending update staffs')
            })
        builder
            .addCase(deleteStaff.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.staffList = state.staffList.filter((s: Staff) => s.staffID !== action.payload.staffID)
            })
            .addCase(deleteStaff.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected delete staffs: ', action.payload)
            })
            .addCase(deleteStaff.pending, (state, action) => {
                state.status = "loading"
                console.log('pending delete staffs')
            })
    }
})

export default StaffSlice.reducer