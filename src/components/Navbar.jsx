import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const user=useSelector((store)=>store.user);
  return (
    <div className="navbar bg-base-100 shadow-lg px-6">
      {/* Brand */}
      <div className="flex-1">
        <a
          className="text-3xl font-bold tracking-wide 
          bg-gradient-to-r from-[#d4af37] via-[#f7d774] to-[#d4af37]
          bg-clip-text text-transparent 
          hover:from-[#e6c36f] hover:via-[#ffdf88] hover:to-[#e6c36f]
          transition-all duration-300 cursor-pointer"
        >
          DevSpace
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
              <a className="justify-between">
                Profile
                <span className="badge bg-[#d4af37] border-none text-black">New</span>
              </a>
            </li>
            <li><a>Logout</a></li>
          </ul>
        </div>}
      </div>
    </div>
  )
}

export default Navbar
