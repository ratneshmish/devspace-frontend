import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { removefeeddata } from '../utils/feedslice';
import { useDispatch } from 'react-redux';
const Usercard = ({ user }) => {
  if (!user) return null;
  const {_id, firstName, lastName, photoUrl, about,skills,age,gender } = user;
  const dispatch=useDispatch();
const handlebutton = async (status, _id) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_URL}/sendconnection/${status}/${_id}`,
      {},
      { withCredentials: true }
    );

    if (status === "interested") {
      toast.success("You showed interest");
    } else {
      toast("You ignored this profile");
    }
    dispatch(removefeeddata(_id));
  } catch (err) {
    toast.error(err.response?.data?.message || err.message || "Something went wrong");
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card w-full max-w-md overflow-hidden  shadow-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black">
        
    
        <figure>
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="profile"
              className="w-full min-h-auto object-cover "
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gray-800 text-gray-400">
              No Photo
            </div>
          )}
        </figure>

        {/* Card Body */}
        <div className="card-body text-white space-y-3">
          <h2 className="card-title text-xl font-bold text-white">
            {firstName + " " + lastName}
          </h2>
          <p className="text-amber-400">{about || "No description provided."}</p>
          <p className="text-amber-400">
            Age:{age}
          </p>
           <p className="text-amber-400">
            Gender:{gender}
          </p>
         
          {skills && (
  Array.isArray(skills) ? (
    skills.length > 0 && (
      <p className="text-amber-400">Skills: {skills.join(", ")}</p>
    )
  ) : (
    skills.trim() !== "" && (
      <p className="text-amber-400">Skills: {skills}</p>
    )
  )
)}
     

          {/* Classy Buttons */}
          <div className="card-actions justify-end gap-3 mt-4">
            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"onClick={()=>{
              handlebutton("interested",_id)
            }}>
              Interested
            </button>
            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"onClick={()=>{
              handlebutton("ignore",_id)
            }}>
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usercard;
