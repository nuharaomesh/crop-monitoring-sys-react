import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Cultivate} from "../models/Cultivate.ts";
import api from "../api/api.ts";


export const getAllCultivations = createAsyncThunk(
    'cultivation/getAllCultivation',
    async () => {
        try {
            const resp = await api.get('/cultivation/get')
            return resp.data
        } catch (e) {
            throw new Error('error in get all cultivations: ' + e)
        }
    }
)

export const saveCultivation = createAsyncThunk(
    'cultivation/saveCultivation',
    async (cultivationData: Cultivate) => {
        try {
            const resp = await api.post('/cultivation/save', cultivationData)
            return resp.data
        } catch (e) {
            throw new Error('error in save cultivation: ' + e)
        }
    }
)

export const updateCultivation = createAsyncThunk(
    'cultivation/updateCultivation',
    async (cultivationData: Cultivate) => {
        try {
            const resp = await api.put(`/cultivation/update/${cultivationData.cultivateID}`, cultivationData)
            return resp.data
        } catch (e) {
            throw new Error('error in update cultivation: ' + e)
        }
    }
)

const CultivateSlice = createSlice({
    name: 'cultivate',
    initialState: {
        cultivationList: [],
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCultivations.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.cultivationList = action.payload
            })
            .addCase(getAllCultivations.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected get all cultivations: ', action.payload)
            })
            .addCase(getAllCultivations.pending, (state, action) => {
                state.status = "loading"
                console.log('pending get all cultivations')
            })
        builder
            .addCase(saveCultivation.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.cultivationList.push(action.payload)
            })
            .addCase(saveCultivation.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected save cultivation: ', action.payload)
            })
            .addCase(saveCultivation.pending, (state, action) => {
                state.status = "loading"
                console.log('pending save cultivation')
            })
        builder
            .addCase(updateCultivation.fulfilled, (state, action) => {
                state.status = "succeeded"
                const cultivate = state.cultivationList.find((c: Cultivate) => c.cultivateID === action.payload.cultivateID)
                if (cultivate) Object.assign(cultivate, action.payload)
            })
            .addCase(updateCultivation.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected update cultivation: ', action.payload)
            })
            .addCase(updateCultivation.pending, (state, action) => {
                state.status = "loading"
                console.log('pending update cultivation')
            })
    }
})

export default CultivateSlice.reducer