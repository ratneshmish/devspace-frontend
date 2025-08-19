import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfeeddata } from '../utils/feedslice';
import axios from 'axios';
import Usercard from './Usercard';
const Feed = () => {
  const dispatch=useDispatch();
  const feeddata=useSelector((store)=>store.feed);
  const fetchfeeddata=async()=>{
    if(feeddata.length>0)return;
    try{
 const res=await axios.get(import.meta.env.VITE_URL+"/feed",{withCredentials:true})
 console.log(res?.data);
    dispatch(addfeeddata(res?.data));
  }
 catch(err){
   console.log(err);
 }
  }
  useEffect(()=>{
fetchfeeddata();
  },[])
  if(!feeddata)return;
  if(feeddata.length==0)return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <h1 className="text-xl font-bold">No Requests!</h1>
      </div>
    );

  return (
 <div className=" flex justify-center">
  <Usercard user={feeddata?.[0]}/>
 </div>
  )
}

export default Feed;