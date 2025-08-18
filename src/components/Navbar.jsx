import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userslice';
import toast from 'react-hot-toast';
import Connections from './Connections';
import Requests from './Requests';


const Navbar = () => {
  const user=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handlelogout=async()=>{
    try{
    await axios.post("http://localhost:5000/logout",{},{withCredentials:true})
      dispatch(removeUser());
      toast.success("Logout successful");
      navigate("/login");

    }
    catch(err){
    toast.error(err.message);
    }
  }
  return (
    <div className="navbar bg-base-100 shadow-lg px-6">
      {/* Brand */}
      <div className="flex-1">
    <a
  className="relative text-3xl font-bold tracking-wide 
  bg-gradient-to-r from-white to-white
  bg-clip-text text-transparent 
  transition-all duration-300 cursor-pointer
  group"
>
  {/* First half white, second half gradient */}
  <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
    Dev
  </span>
  <span className="bg-gradient-to-r from-[#d4af37] via-[#f7d774] to-[#d4af37] bg-clip-text text-transparent">
    Space
  </span>

  {/* underline effect */}
  <span
    className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-white 
    scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
  ></span>
</a>

      </div>

      {/* Menu */}
      <div className="flex gap-2">
        {user && <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-2 border-[#d4af37]">
              {/* Avatar image could go here */}
               <img
            alt="Tailwind CSS Navbar component"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpH2FDnqvx8uKsepYrNLiTcZ3F4_t92ggz7HwGzpyi-j8MRDulDFqy2oDuW9do-9G-go&usqp=CAU" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge bg-[#d4af37] border-none text-black">New</span>
              </Link>
            </li>
             <li><Link to="/connections">Connections</Link></li>
              <li><Link to="/requests">Requests</Link></li>
            <li><Link onClick={handlelogout}>Logout</Link></li>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
