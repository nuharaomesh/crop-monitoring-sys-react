import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../reducers/CropSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import CultivatedSlice from "../reducers/CultivatedSlice.ts";

export const store = configureStore({
    reducer: {
        crop: CropSlice,
        field: FieldSlice,
        cultivate: CultivatedSlice
    }
})