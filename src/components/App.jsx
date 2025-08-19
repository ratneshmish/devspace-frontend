import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import appstore from "../utils/appstore";

import Body from "./Body";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";
import { Toaster } from "react-hot-toast";
import Connections from "./Connections";
import Requests from "./Requests";
import Signup from "./Signup";
import Chat from "./Chat";


function App() {
  return (
    <Provider store={appstore}>
      <BrowserRouter basename="/">
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Body />}>
      
            <Route index element={<Navigate to="home" replace />} />

            <Route path="login" element={<Login />} />

            {/* Protected routes */}
            <Route
              path="home"
              element={
                
                  <Home />
               
              }
            />
            <Route
              path="profile"
              element={
             
                  <Profile />
              
              }
            />
            <Route
              path="connections"
              element={
             
                  <Connections />
              
              }
            />
                        <Route
              path="feed"
              element={
             
                  <Feed />
              
              }
            />
            <Route
              path="requests"
              element={
             
                  <Requests />
              
              }
            />
             <Route
              path="signup"
              element={
         
                  <Signup />
          
              }
            />
             <Route
              path="chat/:targetId/:firstName"
              element={
         
                  <Chat />
          
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
