import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import CropModel from "../models/Crop.ts";
import api from "../api/api.ts";

export const getAllCrops = createAsyncThunk(
    'crop/getAllCrop',
    async () => {
        try {
            const resp = await api.get('/crop/get')
            return resp.data
        } catch (e) {
            throw new Error('error in get all crops: ' + e)
        }
    }
)

export const getAllCropCount = createAsyncThunk(
    'crop/getAllCropCount',
    async () => {
        try {
            const resp = await api.get("/crop/get_count")
            return resp.data
        } catch (e) {
            throw new Error('error in get all crop count: ' + e)
        }
    }
)

export const saveCrop = createAsyncThunk(
    'crop/saveCrop',
    async (cropData: CropModel) => {
        try {
            const crop = new FormData()
            crop.append("cropName", cropData.cropName)
            crop.append("cropScientificName", cropData.cropScientificName)
            crop.append("category", cropData.category)
            crop.append("cropSeason", cropData.cropSeason)
            crop.append("cropGrowthTime", cropData.cropGrowthTime)
            crop.append("img", cropData.img)
            crop.append("price", String(cropData.price))
            const resp = await api.post('/crop/save', crop)
            return resp.data
        } catch (e) {
            throw new Error('error in save crop: ' + e)
        }
    }
)

export const updateCrop = createAsyncThunk(
    'crop/updateCrop',
    async (cropData: CropModel) => {
        try {
            const crop = new FormData()
            crop.append("cropName", cropData.cropName)
            crop.append("cropScientificName", cropData.cropScientificName)
            crop.append("category", cropData.category)
            crop.append("cropSeason", cropData.cropSeason)
            crop.append("cropGrowthTime", cropData.cropGrowthTime)
            crop.append("img", cropData.img)
            crop.append("price", String(cropData.price))
            const resp = await api.put(`/crop/update/${cropData.cropCode}`, crop)
            return resp.data
        } catch (e) {
            throw new Error('error in update crop: ' + e)
        }
    }
)

export const deleteCrop = createAsyncThunk(
    'crop/deleteCrop',
    async (id: string) => {
        try {
            const resp = await api.delete(`/crop/delete/${id}`)
            return resp.data
        } catch (e) {
            throw new Error('error in delete crop: ' + e)
        }
    }
)

const CropSlice = createSlice({
    name: 'crop',
    initialState: {
        cropList: [],
        cropCountList: [],
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCrops.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.cropList = action.payload
            })
            .addCase(getAllCrops.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected get all crops: ', action.payload)
            })
            .addCase(getAllCrops.pending, (state, action) => {
                state.status = "loading"
                console.log('pending get all crops')
            })
        builder
            .addCase(getAllCropCount.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.cropCountList = action.payload
            })
            .addCase(getAllCropCount.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected get all crop counts: ', action.payload)
            })
            .addCase(getAllCropCount.pending, (state, action) => {
                state.status = "loading"
                console.log('pending get all crop counts')
            })
        builder
            .addCase(saveCrop.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.cropList.push(action.payload)
            })
            .addCase(saveCrop.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected save crop: ', action.payload)
            })
            .addCase(saveCrop.pending, (state, action) => {
                state.status = "loading"
                console.log('pending save crop')
            })
        builder
            .addCase(updateCrop.fulfilled, (state, action) => {
                state.status = "succeeded"
                const crop = state.cropList.find((c: CropModel) => c.cropCode === action.payload.cropCode)
                if (crop) Object.assign(crop, action.payload)
            })
            .addCase(updateCrop.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected update crop: ', action.payload)
            })
            .addCase(updateCrop.pending, (state, action) => {
                state.status = "loading"
                console.log('pending update crop')
            })
        builder
            .addCase(deleteCrop.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.cropList = state.cropList.filter((c: CropModel) => c.cropCode !== action.payload.cropCode)
            })
            .addCase(deleteCrop.rejected, (state, action) => {
                state.status = "failed"
                console.log('rejected delete crop: ', action.payload)
            })
            .addCase(deleteCrop.pending, (state, action) => {
                state.status = "loading"
                console.log('pending delete crop')
            })
    }
})

export default CropSlice.reducer