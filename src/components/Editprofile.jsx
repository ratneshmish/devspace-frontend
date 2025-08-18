import React, { useState } from 'react';
import Usercard from './Usercard';
import axios from 'axios';
import { addUser } from '../utils/userslice';
import { useDispatch } from 'react-redux';

const Editprofile = ({ user }) => {
  const [firstName, setfirstname] = useState(user?.firstName || "");
  const [lastName, setlastname] = useState(user?.lastName || "");
  const [age, setage] = useState(user?.age || "");
  const [about, setabout] = useState(user?.about || "");
  const [photoUrl, setphotoUrl] = useState(user?.photoUrl || "");
  const dispatch = useDispatch();

  const handlesave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        "http://localhost:5000/profile/edit",
        { firstName, lastName, age, about, photoUrl },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-2 p-2 bg-base-200 min-h-screen ">
      

      <div className="card bg-base-100 w-full max-w-md shadow-xl border border-base-300 p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-primary">Edit Profile</h2>

        <form className="space-y-4" onSubmit={handlesave}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">First Name</span>
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setfirstname(e.target.value)}
              placeholder="Enter your firstname"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Last Name</span>
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setlastname(e.target.value)}
              placeholder="Enter your lastname"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Age</span>
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setage(e.target.value)}
              placeholder="Age"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">About</span>
            </label>
            <textarea
              value={about}
              onChange={(e) => setabout(e.target.value)}
              placeholder="About you"
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              value={photoUrl}
              onChange={(e) => setphotoUrl(e.target.value)}
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button type="submit" className="btn btn-primary w-full max-w-xs">
              Save Profile
            </button>
          </div>
        </form>
      </div>

    
      <Usercard
        user={{
          firstName,
          lastName,
          photoUrl,
          age,
          about,
        }}
      />
    </div>
  );
};

export default Editprofile;
