import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userslice";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/signup",
        { firstName, lastName, email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
   
      navigate("/profile");
      toast.success("Signup Successful");
    } catch (err) {
   toast.error(err.response?.data?.message || err.message || "Something went wrong");
    }
  };

  return (
    <div className=" md:flex justify-center items-center">
    <div className="card bg-base-100 w-full max-w-md shadow-xl border border-base-300 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary">Sign Up</h2>
      <form className="space-y-4" onSubmit={handlesignup}>
        <div className="form-control">
          <label className="label after:content-['*'] after:ml-1 after:text-red-500">
            <span className="label-text font-semibold">First Name</span>
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setfirstname(e.target.value)}
            placeholder="Enter your firstname"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label after:content-['*'] after:ml-1 after:text-red-500">
            <span className="label-text font-semibold">Last Name</span>
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setlastname(e.target.value)}
            placeholder="Enter your lastname"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label after:content-['*'] after:ml-1 after:text-red-500">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label after:content-['*'] after:ml-1 after:text-red-500">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="flex justify-center pt-4">
          <button type="submit" className="btn btn-primary w-full max-w-xs">
            Signup
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;
