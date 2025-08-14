import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import Feed from "./Feed"
import Profile from "./Profile"
import Home from "./Home"
import appstore from "../utils/appstore"
import { Provider } from "react-redux"
function App() {
 

  return (
    <Provider store={appstore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route index element={<Home />} /> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
