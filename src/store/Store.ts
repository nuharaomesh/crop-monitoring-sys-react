import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../reducers/CropSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";

export const store = configureStore({
    reducer: {
        crop: CropSlice,
        field: FieldSlice
    }
})