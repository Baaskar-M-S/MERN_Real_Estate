import React, { useState } from "react";
import { FaChevronDown, FaLandmarkDome } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

const UserTopbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex fixed h-[70px] w-full bg-black text-white items-center justify-between px-4">
      <div className="flex items-center gap-2">
       <FaLandmarkDome size={30} />
        <span className="text-lg font-bold inline-block"> Chennai Real Estate</span>
      </div>
      <div className="flex items-center gap-4 relative">
        <img
          src="https://www.chennaiproperties.in/user/images/user.png"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <span>Name</span>
        <FaChevronDown
          size={20}
          className="cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        {isDropdownOpen && (
          <div className="absolute top-12 right-0 bg-white text-black rounded shadow-lg p-2 space-y-2 w-40">
            <button className="w-full text-left hover:bg-gray-200 p-2">
              Edit Profile
            </button>
            <button className="w-full text-left hover:bg-gray-200 p-2">
              Change Password
            </button>
            <button className="w-full text-left hover:bg-gray-200 p-2">
              Log Out
            </button>
          </div>
        )}
        <IoMdMailUnread size={25} />
      </div>
    </div>
  );
};

export default UserTopbar;
