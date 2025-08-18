import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userslice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      if (err?.response?.data) {
        toast.error(err?.response?.data);
      } else {
        toast.error("Retry! Something went wrong");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-300 to-base-200">
      <div className="card w-96 shadow-2xl rounded-2xl p-6 mx-4 bg-white border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text my-2 text-xl font-bold text-gray-800">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email ID"
              className="input input-bordered bg-gray-50 text-black placeholder-gray-500 focus:border-yellow-500"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text my-2 font-bold text-xl text-gray-800">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered bg-gray-50 text-black placeholder-gray-500 focus:border-yellow-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-6 text-center">
            <button className="btn w-full bg-yellow-400 text-black font-bold hover:bg-yellow-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
