import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import img from '../Assets/KIM HAJIN.jfif'

const Topbar = () => {
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    // Function to toggle image size
    const toggleImageSize = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    return (
        <div className="w-full h-[60px] bg-white shadow-lg fixed z-10">
            <div className="h-full flex items-center justify-between px-5">
            
                <div>
                    <Link to={'/'} className="font-bold text-3xl text-amber-400">I'M BOSS</Link>
                </div>

                {/* Icons Section */}
                <div className="flex items-center space-x-6">
                    {/* Notification Icon */}
                    <div className="relative group">
                        <IoMdNotificationsOutline size={28} className="text-gray-600 group-hover:text-amber-500 transition duration-200 cursor-pointer" />
                        <span className="h-[16px] w-[16px] flex items-center justify-center text-white text-xs font-bold absolute top-[-5px] right-[-5px] bg-red-600 rounded-full">2</span>
                    </div>

                    {/* Language Icon */}
                    <div className="relative group">
                        <MdLanguage size={28} className="text-gray-600 group-hover:text-amber-500 transition duration-200 cursor-pointer" />
                        <span className="h-[16px] w-[16px] flex items-center justify-center text-white text-xs font-bold absolute top-[-5px] right-[-5px] bg-red-600 rounded-full">2</span>
                    </div>

                    {/* Settings Icon */}
                    <div className="group">
                        <IoMdSettings size={28} className="text-gray-600 group-hover:text-amber-500 transition duration-200 cursor-pointer" />
                    </div>

                    {/* Profile Image with Expand on Click */}
                    <img
                        className={`rounded-full border-2 border-amber-500 cursor-pointer transition-transform duration-200 ${
                            isImageExpanded ? "w-[50px] h-[50px]  " : "w-[45px] h-[45px]"
                        } transform hover:scale-105`}
                        src={img}
                        alt="Profile"
                        onClick={toggleImageSize}
                    />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
