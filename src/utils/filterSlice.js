import { createSlice } from "@reduxjs/toolkit";

const filterSlice=createSlice({
    name:"Filter",
    initialState:{
        items:["popular"]
    },
    reducers:{
        changeFilter:(state,action)=>{state.items=[action.payload]}
    }
});

export const {changeFilter}=filterSlice.actions;
export default filterSlice.reducer;