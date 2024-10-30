import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdAnalytics } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/dashboard/admin-dashboard",
    label: "Dashboard",
    icon: <BiSolidDashboard size={18} />,
  },
  {
    to: "/dashboard/analytics",
    label: "Analytics",
    icon: <IoMdAnalytics size={18} />,
  },
  { to: "/dashboard/sales", label: "Sales", icon: <FaDollarSign size={18} /> },
  {
    to: "/dashboard/transactions",
    label: "Transactions",
    icon: <FaDollarSign size={18} />,
  },
  {
    to: "/dashboard/staff-reports",
    label: "Reports",
    icon: <FaDollarSign size={18} />,
  },
];

const managementLinks = [
  {
    to: "/dashboard/user",
    label: "Users",
    icon: <BiSolidDashboard size={18} />,
  },
  {
    to: "/dashboard/property",
    label: "Property",
    icon: <IoMdAnalytics size={18} />,
  },
  {
    to: "/dashboard/contentmanagement",
    label: "Content Management",
    icon: <BiSolidDashboard size={18} />,
  },
  {
    to: "/dashboard/image",
    label: "Image Manage",
    icon: <FaDollarSign size={18} />,
  },
  {
    to: "/dashboard/booking",
    label: "Booking",
    icon: <FaDollarSign size={18} />,
  },
];

const notificationLinks = [
  {
    to: "/dashboard/mail",
    label: "Mail",
    icon: <BiSolidDashboard size={18} />,
  },
  { to: "/dashboard/alert", label: "Alert", icon: <IoMdAnalytics size={18} /> },
];

const staffLinks = [
  {
    to: "/dashboard/staff-manage",
    label: "Staff Management",
    icon: <BiSolidDashboard size={18} />,
  },
  {
    to: "/dashboard/staff-analytics",
    label: "Analytics",
    icon: <IoMdAnalytics size={18} />,
  },
];

const Sidebar = () => {
  return (
    <div className="mt-[60px] fixed h-screen w-[200px] bg-white text-black p-4 shadow-md">
      <div className="mb-2">
        <Link
          to={"/dashboard/admin-dashboard"}
          className="text-lg font-bold text-amber-500"
        >
          Dashboard
        </Link>
      </div>

      <ul className="space-y-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-amber-500 transition duration-200"
          >
            {link.icon}
            <span className="text-xs">{link.label}</span>
          </Link>
        ))}
      </ul>

      <div className="mt-2">
        <h1 className="text-lg font-bold text-amber-500 mb-4">Management</h1>
        <ul className="space-y-2">
          {managementLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-amber-500 transition duration-200"
            >
              {link.icon}
              <span className="text-xs">{link.label}</span>
            </Link>
          ))}
        </ul>
      </div>

      <div className="mt-2">
        <h1 className="text-lg font-bold text-amber-500 mb-4">Notifications</h1>
        <ul className="space-y-2">
          {notificationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-amber-500 transition duration-200"
            >
              {link.icon}
              <span className="text-xs">{link.label}</span>
            </Link>
          ))}
        </ul>
      </div>

      <div className="mt-2">
        <h1 className="text-lg font-bold text-amber-500 mb-4">Staff</h1>
        <ul className="space-y-2">
          {staffLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-amber-500 transition duration-200"
            >
              {link.icon}
              <span className="text-xs">{link.label}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
