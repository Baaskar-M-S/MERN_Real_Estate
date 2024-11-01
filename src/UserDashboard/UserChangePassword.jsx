import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserChangePassword = () => {
  const userId = localStorage.getItem("userId");

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
    setError(''); // Reset error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError('New Password and Confirm Password do not match.');
      return;
    }

    console.log('Password changed:', passwords);
    // Add password change logic here
    // Example: API call to change password
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center shadow-lg p-4">
        <div>
          <h1 className="font-bold text-3xl">Change Password</h1>
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

      <div className="flex justify-center items-center flex-grow bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">CHANGE PASSWORD</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={passwords.currentPassword}
              onChange={handleChange}
              className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={handleChange}
              className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={passwords.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition duration-200"
            >
              Confirm Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserChangePassword;
