import {createSlice} from "@reduxjs/toolkit";
import {Vehicle} from "../models/Vehicle.ts";

const initialState: Vehicle[] = []
const VehicleSlice = createSlice({
    name: 'vehicle',
    initialState: initialState,
    reducers: {
        add_vehicle: (state, action) => {
            state.push(action.payload)
        },
        update_vehicle: (state, action) => {
            const vehicle = state.find(vehicle => vehicle.vehicleID === action.payload.vehicleID)
            if (vehicle) Object.assign(vehicle, { ...action.payload })
        },
        delete_vehicle: (state, action) => {
            return state.filter(vehicle =>
                vehicle.vehicleID !== action.payload.vehicleID
            )
        }
    }
})

export const { add_vehicle, update_vehicle, delete_vehicle} = VehicleSlice.actions
export default VehicleSlice.reducer