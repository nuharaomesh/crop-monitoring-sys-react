import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../reducers/CropSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import CultivatedSlice from "../reducers/CultivatedSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import UserSlice from '../reducers/UserSlice.ts'

export const store = configureStore({
    reducer: {
        user: UserSlice,
        crop: CropSlice,
        field: FieldSlice,
        cultivate: CultivatedSlice,
        staff: StaffSlice,
        vehicle: VehicleSlice,
    }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>