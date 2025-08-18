import { createSlice } from "@reduxjs/toolkit";

const Requestslice= createSlice({
    name:"request",
    initialState:null,
    reducers:{
        addrequest:(state,action)=>{
            return action.payload;
        },
       removerequest: (state, action) => {
  const newArray = state.filter((item) => item._id !== action.payload);
  return newArray;
}


    }
})
 export const {addrequest,removerequest}=Requestslice.actions;
export default Requestslice.reducer;