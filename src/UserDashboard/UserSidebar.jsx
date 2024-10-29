import React from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  const links = [
    { path: "dashboard", label: "My Dashboard" },
    { path: "submit-property", label: "Submit Property" },
    { path: "manage-listing", label: "Manage Listing" },
    { path: "property-leads", label: "Property Leads" },
    { path: "sponsor-ad", label: "Sponsor Your Ad" },
    { path: "view-profile", label: "View Profile" },
    { path: "change-password", label: "Change Password" },
    { path: "logout", label: "Logout" },
  ];

  return (
    <div className=" fixed w-[280px] h-screen bg-gray-500 text-white  pt-[100px] p-4">
      <div className="flex flex-col items-center justify-center ">
      <div className="mb-10 w-[280px] h-[100px] flex flex-col justify-center items-center bg-gray-700 ">
        <span className="text-lg font-semibold">UserName</span>
        <p className="text-sm text-gray-300">Owner</p>
      </div>
      <div className="flex flex-col space-y-8">
        {links.map(({ path, label }) => (
          <Link key={path} to={path} className="hover:text-amber-500 flex items-center">
            {label} <IoMdAdd className="inline ml-1" />
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default UserSidebar;
