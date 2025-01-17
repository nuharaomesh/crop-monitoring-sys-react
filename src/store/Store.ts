import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../reducers/CropSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import CultivatedSlice from "../reducers/CultivatedSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import EquipmentSlice from "../reducers/EquipmentSlice.ts";

export const store = configureStore({
    reducer: {
        crop: CropSlice,
        field: FieldSlice,
        cultivate: CultivatedSlice,
        staff: StaffSlice,
        vehicle: VehicleSlice,
        equipment: EquipmentSlice
    }
})