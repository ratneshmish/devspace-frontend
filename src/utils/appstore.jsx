import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import feedreducer from "./feedslice";
import connectionreducer from "./Connectionslice"
import requestreducer from "./Requestslice";
const appstore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedreducer,
        connect:connectionreducer,
        request:requestreducer
        
    },
  
})
export default appstore;