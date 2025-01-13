import {configureStore} from "@reduxjs/toolkit";
import CropSlice from "../reducers/CropSlice.ts";

export const store = configureStore({
    reducer: {
        crop: CropSlice
    }
})