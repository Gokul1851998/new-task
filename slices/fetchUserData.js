import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getData } from "../src/apiInstance/apiInstance";


let initialState = {
    data:[],
    loading:false
}

export const fetchData = createAsyncThunk("demoData/fetchData",async()=>{
        return await getData()
})

const userSlice = createSlice({
    name:'demoData',
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled,(state, action)=>{
            state.loading=false;
            state.data = action.payload.data
        })
        builder.addCase(fetchData.rejected,(state)=>{
            state.loading = false
        })
    }
})

export default userSlice.reducer;
