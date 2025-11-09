import React, { use } from "react";
import assets, { userDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-64 bg-white border-r border-gray-200 p-4 flex flex-col shadow-sm">
      <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-100">
        <img
          src={assets.logo}
          alt="logo"
          className="w-30 h-15 object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />

        <div className="relative group">
          <img
            src={assets.menu_icon}
            alt="menu"
            className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
          />

          <div className="hidden group-hover:block absolute right-0 mt-2 w-36 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-10">
            <p
              onClick={() => navigate("/profile")}
              className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer text-sm"
            >
              Edit Profile
            </p>
            <hr className="border-gray-200" />
            <p className="px-4 py-2 hover:bg-red-50 text-red-500 cursor-pointer text-sm">
              Logout
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 h-5 opacity-70 mr-2"
        />
        <input
          type="text"
          placeholder="Search user..."
          className="flex-1 bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="">
        {userDummyData.map((user, index) => (
          <div>
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt=""
              className=""
            />
            <div>
              <p>{user.fullName}</p>
              {index < 3 ? (
                <span className="text-green-400 text-xs">Online</span>
              ) : (
                <span className="text-neutral-400 text-xs">Offline</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex-1 overflow-y-auto space-y-2">
        <div
          onClick={() => setSelectedUser("John Doe")}
          className={`p-3 rounded-lg cursor-pointer transition ${
            selectedUser === "John Doe"
              ? "bg-blue-100 text-blue-600 font-medium"
              : "hover:bg-gray-50"
          }`}
        >
          John Doe
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
