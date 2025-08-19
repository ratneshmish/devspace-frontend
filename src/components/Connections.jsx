import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addconnection } from "../utils/Connectionslice";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
const Connections = () => {
  const dispatch = useDispatch();
  const connectiondata = useSelector((store) => store.connect);

  const fetchconnections = async () => {
    const res = await axios.get(import.meta.env.VITE_URL+"/user/connection", {
      withCredentials: true,
    });
    dispatch(addconnection(res?.data?.data));
  };

  useEffect(() => {
    fetchconnections();
  }, []);

  const handlebutton = (action, id) => {
    console.log("Button clicked:", action, id);
  };

  if (!connectiondata) return null;
  if (connectiondata.length === 0)
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <h1 className=" text-xl font-bold">No connection found!</h1>
      </div>
    );

  return (
    <div className="bg-black text-gray-200 py-10 min-h-screen">
      <h1 className="text-center text-3xl font-bold text-yellow-500 mb-12">
        Connections
      </h1>

      <ul className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {connectiondata.map(({ _id, firstName, lastName, photoUrl, about }, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={1500}
            scale={1.03}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="white"
            glareBorderRadius="16px"
            className="rounded-xl"
          >
            <li className="relative backdrop-blur-xl bg-white/10 rounded-2xl p-6 flex flex-col items-center border border-white/20 shadow-lg 
                           hover:shadow-yellow-500/30 hover:scale-[1.03] transition duration-500">
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-yellow-400/20 via-white/10 to-transparent pointer-events-none" />

              <img
                className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500 mb-4"
                src={photoUrl || "https://via.placeholder.com/150"}
                alt={`${firstName} ${lastName}`}
              />

              <h2 className="font-semibold text-lg text-yellow-400 text-center">
                {firstName} {lastName}
              </h2>
              <p className="text-sm text-gray-200/80 mt-2 leading-relaxed text-center">
                {about || "No description available."}
              </p>

            <Link to={"/chat/"+_id+"/"+firstName}>  <button
                className="mt-4 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
              >
                Chat
              </button></Link>
            </li>
          </Tilt>
        ))}
      </ul>
    </div>
  );
};

export default Connections;
