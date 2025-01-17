import {createSlice} from "@reduxjs/toolkit";
import {Equipment} from "../models/Equipment.ts";

const initialState: Equipment[] = []
const EquipmentSlice = createSlice({
    name: 'equipment',
    initialState: initialState,
    reducers: {
        add_equipment: (state, action) => {
            state.push(action.payload)
        },
        update_equipment: (state, action) => {
            const equipment = state.find(equipment => equipment.equipmentID === action.payload.equipmentID)
            if (equipment) Object.assign(equipment, { ...action.payload })
        },
        delete_equipment: (state, action) => {
            return state.filter(equipment =>
                equipment.equipmentID !== action.payload.equipmentID
            )
        }
    }
})

export const { add_equipment, update_equipment, delete_equipment } = EquipmentSlice.actions
export default EquipmentSlice.reducer