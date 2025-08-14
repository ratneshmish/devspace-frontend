import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUser } from '../utils/userslice';
const Login = () => {
  const [email, setemailid] = useState("");
  const [password, setpassword] = useState("");
  const dispatch=useDispatch();
const user=useSelector((store)=>store.user)
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.post(
        "http://localhost:5000/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(res.data);
   dispatch(addUser(res.data))
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-300 to-base-200">
      <div className="bg-base-100/80 backdrop-blur-md w-96 shadow-2xl border border-primary/20 rounded-xl p-6 mx-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text my-2 text-xl font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email ID"
              className="input input-bordered"
              onChange={(e) => setemailid(e.target.value)}
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text my-2 font-bold text-xl">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <div className="mt-4 text-right">
            <button
              className="btn btn-primary w-30"
              onClick={handlesubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
