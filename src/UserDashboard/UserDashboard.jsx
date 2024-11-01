import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit, FaListAlt, FaEnvelope, FaPhoneAlt, FaUserCircle } from "react-icons/fa";


const UserDashboard = () => {
  const userId = localStorage.getItem("userId");

  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/users/${userId}`);
        setUser(response.data); // Set user data
      } catch (error) {
        setError("Failed to fetch user data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Add id to dependency array to refetch if it changes

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white text-lg font-semibold py-4 rounded-lg shadow-md hover:bg-blue-700">
            <FaRegEdit size={24} /> Submit Property
          </button>
          <button className="flex items-center justify-center gap-2 bg-pink-600 text-white text-lg font-semibold py-4 rounded-lg shadow-md hover:bg-pink-700">
            <FaListAlt size={24} /> Manage Listing
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-teal-400 text-4xl font-bold">67%</div>
            <p className="mt-2 text-lg font-medium">Flats</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-orange-400 text-4xl font-bold">85%</div>
            <p className="mt-2 text-lg font-medium">Individual House</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-purple-400 text-4xl font-bold">90%</div>
            <p className="mt-2 text-lg font-medium">Land / Plots</p>
          </div>
        </div>

        {/* Profile Section */}
        {user && (
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Profile</h3>
            <div className="flex items-center gap-4">
              <FaUserCircle size={64} />
              <div>
                <p className="text-2xl">{user.name}</p>
                <p className="text-lg">{user.type}</p>
                <p className="mt-2 flex items-center gap-2">
                  <FaEnvelope /> {user.email}
                </p>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt /> {user.mobileNumber}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Properties for Sale Section */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Property for Sale</h3>
        <p className="text-gray-500">No properties found</p>
      </div>
    </div>
  );
};

export default UserDashboard;
