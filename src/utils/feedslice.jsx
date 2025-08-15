import { createSlice } from "@reduxjs/toolkit";

const feedslice=createSlice({
    name:"feed",
    initialState:null,
    reducer:{
        addfeeddata:(state,action)=>{
            return action.payload;
        },
        removefeeddata:(state,action)=>{
            return null;
        }
    }
})
 export const {addfeeddata,removefeeddata}=feedslice.actions;
 export default feedslice.reducer;