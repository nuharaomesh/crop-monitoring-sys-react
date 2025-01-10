import {Crop} from "../models/Crop.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Crop[] = []
const CropSlice = createSlice({
    name: 'crop',
    initialState: initialState,
    reducers: {
        add_crop: (state, action) => {
            state.push(action.payload)
        },
        update_crop: (state, action) => {
            const crop = state.find(crop => crop.cropCode === action.payload.cropCode);
            if (crop) Object.assign(crop, { ...action.payload })
        },
        delete_crop: (state, action) => {
            state.filter(crop =>
                crop.cropCode !== action.payload.cropCode
            )
        }
    }
})

export const { add_crop, update_crop, delete_crop } = CropSlice.actions
export default CropSlice.reducer