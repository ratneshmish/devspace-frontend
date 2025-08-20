import React, { useEffect, useState } from 'react';
import Usercard from './Usercard';
import axios from 'axios';
import { addUser } from '../utils/userslice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PreviewUserCard from './PreviewUserCard';
import toast from 'react-hot-toast';

const Editprofile = ({ user }) => {
  // console.log("edit",user);
  const [firstName, setfirstname] = useState(user?.firstName || "");
  const [lastName, setlastname] = useState(user?.lastName || "");
  const [age, setage] = useState(user?.age || "");
  const [about, setabout] = useState(user?.about || "");
  const [photoUrl, setphotoUrl] = useState(user?.photoUrl || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [skills, setSkills] = useState(user?.skills || []);
  const [newSkill, setnewSkill] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesave = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        import.meta.env.VITE_URL + "/profile/edit",
        { firstName, lastName, age, about, photoUrl, gender, skills },
        { withCredentials: true }
      );
    //  console.log(res);
      dispatch(addUser(res?.data?.data));
      toast.success("Profile Updated Successfully");
      navigate("/feed");
    } catch (err) {
      // console.error(err);
      toast.error("Failed to update profile");
    }
  };
 useEffect(() => {
  if (user) {
    setfirstname(user.firstName || "");
    setlastname(user.lastName || "");
    setage(user.age || "");
    setabout(user.about || "");
    setphotoUrl(user.photoUrl || "");
    setGender(user.gender || "");
    setSkills(user.skills || []);
  }
}, [user]);

  const handleskill = () => {
    if ( !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setnewSkill(""); 
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-2 p-2 bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shadow-xl border border-base-300 p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-primary">
          Edit Profile
        </h2>

        <form className="space-y-4" onSubmit={handlesave}>
          {/* First Name */}
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

          {/* Last Name */}
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

          {/* Age */}
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

          {/* About */}
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

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Gender</span>
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          {/* Photo URL */}
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

          {/* Skills */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Skills</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setnewSkill(e.target.value)}
                placeholder="Enter a skill"
                className="input input-bordered w-full"
              />
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
                onClick={handleskill}
              >
                Add
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-4">
            <button type="submit" className="btn btn-primary w-full max-w-xs">
              Save Profile
            </button>
          </div>
        </form>
      </div>

      {/* Live Preview */}
    <PreviewUserCard
  user={{
    firstName,
    lastName,
    photoUrl,
    age,
    about,
    gender,
    skills,
  }}
/>
    </div>
  );
};

export default Editprofile;
