import {Cultivate} from "../models/Cultivate.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Cultivate[] = []
const CultivateSlice = createSlice({
    name: 'cultivate',
    initialState: initialState,
    reducers: {
        add_cultivation: (state, action) => {
            state.push(action.payload)
        },
        update_cultivation: (state, action) => {
            const cultivatedField = state.find(cultField => cultField.cultivateID === action.payload.cultivateID)
            if (cultivatedField) Object.assign(cultivatedField, {...action.payload})
        },
        delete_cultivation: (state, action) => {
            state.filter(cultField =>
                cultField.cultivateID !== action.payload.cultivateID
            )
        }
    }
})

export const { add_cultivation, update_cultivation, delete_cultivation } = CultivateSlice.actions
export default CultivateSlice.reducer