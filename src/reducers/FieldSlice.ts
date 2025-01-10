import {Field} from "../models/Field.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Field[] = []
const FieldSlice = createSlice({
    name: 'field',
    initialState: initialState,
    reducers: {
        add_field: (state, action) => {
            state.push(action.payload)
        },
        update_field: (state, action) => {
            const field = state.find(field => field.fieldCode === action.payload.fieldCode)
            if (field) Object.assign(field, { ...action.payload })
        },
        delete_field: (state, action) => {
            state.filter(field =>
                field.fieldCode !== action.payload.fieldCode
            )
        }
    }
})

export const  { add_field, update_field, delete_field } = FieldSlice.actions
export default FieldSlice.reducer