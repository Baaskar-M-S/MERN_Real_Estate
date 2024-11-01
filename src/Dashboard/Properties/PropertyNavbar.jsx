import React from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const PropertyNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6  space-y-4">
      {/* Properties Management Section */}
      <div className="bg-blue-400 text-white rounded-lg p-4 shadow-lg flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Property Management</h1>
        
        <div className="flex flex-row items-center gap-4">
          <Link to="/properties/apartments" className="text-lg hover:text-gray-200">Apartments</Link>
          <Link to="/properties/villas" className="text-lg hover:text-gray-200">Individual House/Villa</Link>
          <Link to="/properties/lands" className="text-lg hover:text-gray-200">Land/Plots</Link>
          <Link to="/properties/ongoing" className="text-lg hover:text-gray-200">Ongoing Projects</Link>
          
          {/* Navigation Buttons */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-gray-300"
          >
            <FaArrowCircleLeft className="text-2xl" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="flex items-center text-white hover:text-gray-300"
          >
            <FaArrowCircleRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Properties Creation Section - Styled Similarly */}
      <div className="bg-green-400 text-white rounded-lg p-4 shadow-lg flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Create Property Links </h1>
        
        <div className="flex flex-row items-center gap-4">
          <Link to="/create/apartment" className="text-lg hover:text-gray-200">Apartments</Link>
          <Link to="/create/villa" className="text-lg hover:text-gray-200">Individual House/Villa</Link>
          <Link to="/create/land" className="text-lg hover:text-gray-200">Land/Plots</Link>
          <Link to="/create/ongoing" className="text-lg hover:text-gray-200">Ongoing Projects</Link>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-gray-300"
          >
            <FaArrowCircleLeft className="text-2xl" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="flex items-center text-white hover:text-gray-300"
          >
            <FaArrowCircleRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyNavbar;
