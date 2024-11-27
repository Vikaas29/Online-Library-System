import { createSlice } from "@reduxjs/toolkit";
import { Library } from "./Library";

const bookSlice=createSlice({
    name:"Books",
    initialState:{
        items:[...Library]
    },
    reducers:{
        addBook:(state,action)=>{state.items.push(action.payload)}
    }
});

export const {addBook}=bookSlice.actions;
export default bookSlice.reducer;