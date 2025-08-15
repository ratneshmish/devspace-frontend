import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfeeddata } from '../utils/feedslice';
import axios from 'axios';

const Feed = () => {
  const dispatch=useDispatch();
  const feeddata=useSelector((store)=>store.feed);
  const fetchfeeddata=async()=>{
    if(feeddata)return;
    try{
 const res=await axios.get("http://localhost:5000/feed",{withCredentials:true})
//  console.log(res?.data);
    dispatch(addfeeddata(res?.data));

  }
 catch(err){

 }
  }
  useEffect(()=>{
fetchfeeddata();
  },[])
  return (
    <div>Feed</div>
  )
}

export default Feed;