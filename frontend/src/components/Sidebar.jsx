import React from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 h-full p-4 flex flex-col border-r border-gray-300">
      <div className="pb-5 border-b border-gray-300">
        <div className="flex justify-between items-center">
          <img
            src={assets.logo}
            alt="logo"
            className="w-10 h-10 object-contain"
          />

          <div className="relative">
            <img
              src={assets.menu_icon}
              alt="menu"
              className="w-6 h-6 cursor-pointer hover:opacity-70 transition"
            />
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md overflow-hidden">
              <p
                onClick={() => navigate("/profile")}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Edit profile
              </p>
              <hr className="border-gray-200" />
              <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
