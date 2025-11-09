import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";

const HomePage = () => {
  const [selectedChat, setSelectedChat] = useState(false);

  return (
    <div className="border w-full h-screen sm:px-[10%] sm:py-[5%] bg-gray-100">
      <div
        className={`flex h-full w-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300
          ${
            selectedChat
              ? "grid grid-cols-[20%_1fr_25%]"
              : "grid grid-cols-[20%_1fr]"
          }
        `}
      >
        <div className="bg-gray-200 p-4 border-r">
          <Sidebar />
        </div>

        <div className="p-4 border-r">
          <button
            onClick={() => setSelectedChat(!selectedChat)}
            className="mb-3 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Toggle Chat
          </button>
          <ChatContainer />
        </div>

        {selectedChat && (
          <div className="bg-gray-200 p-4">
            <RightSidebar />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
