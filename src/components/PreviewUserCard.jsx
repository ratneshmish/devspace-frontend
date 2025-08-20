import React from 'react';

const PreviewUserCard = ({ user }) => {
  if (!user) return null;
  
  const { firstName, lastName, photoUrl, about, skills, age, gender } = user;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-md overflow-hidden shadow-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black">
        <figure>
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="profile"
              className="w-full min-h-auto object-cover"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gray-800 text-gray-400">
              No Photo
            </div>
          )}
        </figure>

        <div className="card-body text-white space-y-3">
          <h2 className="card-title text-xl font-bold text-white">
            {firstName} {lastName}
          </h2>
          <p className="text-amber-400">{about || "No description provided."}</p>
          <p className="text-amber-400">Age: {age}</p>
          <p className="text-amber-400">Gender: {gender}</p>
          
          {skills && skills.length > 0 && (
            <p className="text-amber-400">
              Skills: {Array.isArray(skills) ? skills.join(", ") : skills}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewUserCard;