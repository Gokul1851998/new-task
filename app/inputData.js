import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice ({
    name:'input',
    initialState:{
        input : null,
    },
    reducers: {
        setInput : (state,action) => {
            state.input = action.payload 
        }
    }
})

export const {setInput} = inputSlice.actions;

export default inputSlice.reducer;