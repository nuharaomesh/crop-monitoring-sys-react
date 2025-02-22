import api from "../api/api.ts";
import FieldModel from "../models/Field.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getAllFields = createAsyncThunk(
    'field/getAllField',
    async () => {
        try {
            const resp = await api.get('/field/get')
            return resp.data
        } catch (e) {
            throw new Error('error in get all fields: ' + e)
        }
    }
)

export const saveField = createAsyncThunk(
    'field/saveField',
    async (fieldData: FieldModel) => {
        try {
            const field = new FormData()
            field.append("fieldName", fieldData.fieldName)
            field.append("fieldAddress", fieldData.fieldAddress)
            field.append("fieldLocation", fieldData.fieldLocation)
            field.append("fieldSize", fieldData.fieldSize)
            field.append("img", fieldData.img)
            const resp = await api.post('/field/save', field)
            return resp.data
        } catch (e) {
            throw new Error('error in save field: ' + e)
        }
    }
)

export const updateField = createAsyncThunk(
    'field/updateField',
    async (fieldData: FieldModel) => {
        try {
            const field = new FormData()
            field.append("fieldName", fieldData.fieldName)
            field.append("fieldAddress", fieldData.fieldAddress)
            field.append("fieldLocation", fieldData.fieldLocation)
            field.append("fieldSize", fieldData.fieldSize)
            field.append("img", fieldData.img)
            const resp = await api.put(`/field/update/${fieldData.fieldCode}`, field)
            return resp.data
        } catch (e) {
            throw new Error('error in update field: ' + e)
        }
    }
)

export const deleteField = createAsyncThunk(
    'field/deleteField',
    async (id: string) => {
        try {
            const resp = await api.delete(`/field/delete/${id}`)
            return resp.data
        } catch (e) {
            throw new Error('error in delete field: ' + e)
        }
    }
)

const FieldSlice = createSlice({
    name: 'field',
    initialState: {
        fieldList: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllFields.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.fieldList = action.payload
            })
            .addCase(getAllFields.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected get all fields: ', action.payload)
            })
            .addCase(getAllFields.pending, (state, action) => {
                state.status = "loading"
                console.log('pending get all fields')
            })
        builder
            .addCase(saveField.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.fieldList.push(action.payload)
            })
            .addCase(saveField.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected save field: ', action.payload)
            })
            .addCase(saveField.pending, (state, action) => {
                state.status = "loading"
                console.log('pending save field')
            })
        builder
            .addCase(updateField.fulfilled, (state, action) => {
                state.status = "succeeded"
                const field = state.fieldList.find((f: FieldModel) => f.fieldCode === action.payload.fieldCode)
                if (field) Object.assign(field, action.payload)
            })
            .addCase(updateField.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected update field: ', action.payload)
            })
            .addCase(updateField.pending, (state, action) => {
                state.status = "loading"
                console.log('pending update field')
            })
        builder
            .addCase(deleteField.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.fieldList = state.fieldList.filter((f: FieldModel) => f.fieldCode !== action.payload.fieldCode)
            })
            .addCase(deleteField.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected delete field: ', action.payload)
            })
            .addCase(deleteField.pending, (state, action) => {
                state.status = "loading"
                console.log('pending delete field')
            })
    }
})

export default FieldSlice.reducer