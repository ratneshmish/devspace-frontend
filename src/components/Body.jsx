import React from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userslice'
const Body = () => {
  const dispatch=useDispatch();
const userdata=useSelector((store)=>store.user);
const navigate=useNavigate();
  const fetchuser=async()=>{
   if (userdata) return; 
    try{
     
   const res=await axios.get("http://localhost:5000/profile/view",{
    withCredentials:true,
   });
   dispatch(addUser(res.data));
     }
  catch (err) {
  if (err.status === 401) {
    toast.error("Please login");  // show error toast
    navigate("/login");           // redirect to login page
  } else {
    toast.error(err.message || "Something went wrong"); // generic errors
  }
}
  }
  useEffect(()=>{
fetchuser();
  },[])
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

     
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Body
