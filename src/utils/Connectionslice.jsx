import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connect",
  initialState: null,
  reducers: {
    addconnection: (state, action) => action.payload,
    removeconnection: () => null,
  },
});

export const { addconnection, removeconnection } = connectionSlice.actions;
export default connectionSlice.reducer;
