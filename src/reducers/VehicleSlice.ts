import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import VehicleModel from "../models/Vehicle.ts";
import api from "../api/api.ts";

export const getAllVehicles = createAsyncThunk(
    'vehicle/getAllVehicle',
    async () => {
        try {
            const resp = await api.get('/vehicle/get')            
            return resp.data
        } catch (e) {
            throw new Error('error in get all vehicles: ' + e)
        }
    }
)

export const getVehicleCount = createAsyncThunk(
    'vehicle/getVehicleCount',
    async () => {
        try {
            const resp = await api.get('/vehicle/get_count')
            return resp.data
        } catch (e) {
            throw new Error('error in get vehicle count: ' + e)
        }
    }
)

export const saveVehicle = createAsyncThunk(
    'vehicle/saveVehicle',
    async (vehicle: VehicleModel) => {
        try {
            const resp = await api.post('/vehicle/save', vehicle)
            return resp.data
        } catch (e) {
            throw new Error('error in save vehicle: ' + e)
        }
    }
)

export const updateVehicle = createAsyncThunk(
    'vehicle/updateVehicle',
    async (vehicle: VehicleModel) => {
        try {
            const resp = await api.put(`/vehicle/update/${vehicle.vehicleID}`, vehicle)
            return resp.data
        } catch (e) {
            throw new Error('error in update vehicle: ' + e)
        }
    }
)

export const deleteVehicle = createAsyncThunk(
    'vehicle/deleteVehicle',
    async (id: string) => {
        try {
            const resp = await api.delete(`/vehicle/delete/${id}`)
            return resp.data
        } catch (e) {
            throw new Error('error in delete vehicle: ' + e)
        }
    }
)

const VehicleSlice = createSlice({
    name: 'vehicle',
    initialState: {
        vehicleList: [],
        vehicleCountList: [],
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllVehicles.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.vehicleList = action.payload
            })
            .addCase(getAllVehicles.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected get all vehicles: ', action.payload)
            })
            .addCase(getAllVehicles.pending, (state, action) => {
                state.status = "loading"
                console.log('pending get all vehicles')
            })
        builder
            .addCase(getVehicleCount.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.vehicleCountList = action.payload
            })
            .addCase(getVehicleCount.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected get all vehicles: ', action.payload)
            })
            .addCase(getVehicleCount.pending, (state, action) => {
                state.status = "loading"
                console.log('pending get all vehicles')
            })
        builder
            .addCase(saveVehicle.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.vehicleList.push(action.payload)
            })
            .addCase(saveVehicle.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected save vehicle: ', action.payload)
            })
            .addCase(saveVehicle.pending, (state, action) => {
                state.status = "loading"
                console.log('pending save vehicle')
            })
        builder
            .addCase(updateVehicle.fulfilled, (state, action) => {
                state.status = "succeeded"
                const vehicle = state.vehicleList.find((v: VehicleModel) => v.vehicleID === action.payload.vehicleID)
                if (vehicle) Object.assign(vehicle, action.payload)
            })
            .addCase(updateVehicle.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected update vehicle: ', action.payload)
            })
            .addCase(updateVehicle.pending, (state, action) => {
                state.status = "loading"
                console.log('pending update vehicle')
            })
        builder
            .addCase(deleteVehicle.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.vehicleList = state.vehicleList.filter((v: VehicleModel) => v.vehicleID !== action.payload.vehicleID)
            })
            .addCase(deleteVehicle.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected delete vehicle: ', action.payload)
            })
            .addCase(deleteVehicle.pending, (state, action) => {
                state.status = "loading"
                console.log('pending delete vehicle')
            })
    }
})

export default VehicleSlice.reducer