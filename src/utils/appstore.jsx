import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import feedreducer from "./feedslice";
const appstore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedreducer,
        
    },
  
})
export default appstore;