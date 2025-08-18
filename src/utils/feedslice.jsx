import { createSlice } from "@reduxjs/toolkit";

const feedslice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addfeeddata: (state, action) => {
      return action.payload;
    },
    removefeeddata: (state, action) => {
      const newArray = state.filter((item) => item._id !== action.payload);
      return newArray;
    },
  }, 
});

export const { addfeeddata, removefeeddata } = feedslice.actions;
export default feedslice.reducer;
