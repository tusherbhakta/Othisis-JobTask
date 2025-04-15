import React from "react";
import { FiHome, FiFolder, FiMic, FiSettings, FiArrowRightCircle, FiArrowRight } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-14  bg-black rounded-r-2xl text-white justify-between py-4 px-2">
      {/* Logo */}
      <div>
        <div className="mb-6 flex justify-center">
          <div className="">
            <FaChevronRight className="h-5 cursor-pointer"/>
          </div>
        </div>

        {/* Nav Icons */}
        <div className="flex flex-col items-center space-y-6 text-xl">
          <FiHome className="cursor-pointer hover:text-gray-300" title="Home" />
          <FiFolder className="cursor-pointer hover:text-gray-300" title="Folder" />
          <FiMic className="cursor-pointer hover:text-gray-300" title="Mic" />
          <FiSettings className="cursor-pointer hover:text-gray-300" title="Settings" />
        </div>
      </div>
    </div>
  );
}
