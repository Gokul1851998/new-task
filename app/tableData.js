import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice ({
    name:'table',
    initialState:{
        table : null,
    },
    reducers: {
        setTable : (state,action) => {
            state.table = action.payload 
        }
    }
})

export const {setTable} = tableSlice.actions;

export default tableSlice.reducer;