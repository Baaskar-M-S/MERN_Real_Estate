import React from 'react';
import { Link } from 'react-router-dom';

const UserViewProfile = () => {

  const userId = localStorage.getItem("userId");




  const profile = {
    role: 'User',
    name: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '123-456-7890',
  };

  return (
    <div>
      <div className="flex justify-between items-center shadow-lg p-4">
        <div>
          <h1 className="font-bold text-3xl">View Profile</h1>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Link to="/">Home</Link>
          <span>{"/"}</span>
          <Link to="/user/dashboard">Dashboard</Link>

          <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
            + Submit Property
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">PROFILE DETAILS</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Role:</span>
              <span>{profile.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Name:</span>
              <span>{profile.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">E-mail:</span>
              <span>{profile.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Mobile No.:</span>
              <span>{profile.mobile}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewProfile;
