import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";
import api from "../api/api";

const initialState = {
    jwt_token: null,
    refresh_token : null,
    username: null,
    isAuthenticated: false,
    loading: false,
    error: '',
}

export const registerUser= createAsyncThunk(
    'user/register',
    async (user : User)=>{
        try{
            const response = await api.post('/auth/register', user,{withCredentials: true}); 
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

export const loginUser= createAsyncThunk(
    'user/login',
    async (user : User)=>{
        try{
            const response = await api.post('/auth/login', user, {withCredentials: true});
            localStorage.setItem("accessToken", response.data.accessToken)            
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        logOutUser(state){
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending,(state, action)=>{
                console.log('Pending');
            })
            .addCase(registerUser.fulfilled,(state, action)=>{
                console.log('User Registered Successfully');
            })
            .addCase(registerUser.rejected,(state, action)=>{
                state.error = action.payload as string;
            });
        builder
            .addCase(loginUser.rejected,(state, action)=>{
                state.error = action.payload as string;
                state.isAuthenticated = false;
            })
            .addCase(loginUser.fulfilled,(state, action)=>{
                state.isAuthenticated = true;
            })
            .addCase(loginUser.pending,(state, action)=>{
                state.isAuthenticated = false;
            })
    }
})

export const {logOutUser} = userSlice.actions;
export default userSlice.reducer;