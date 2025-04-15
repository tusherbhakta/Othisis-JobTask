import React from "react";
import { FiArrowDownCircle, FiBell, FiUser, FiCheckCircle } from "react-icons/fi";
import logo from "../../assets/Group 1000001226.png"
const Navbar = () => {
  return (
    <div className="flex px-20 justify-between items-center px-4 py-2 bg-black text-white w-full shadow-md h-14 sm:h-16">
      <div className="flex items-center gap-2">
        <button className="text-white hover:opacity-75">
          <img src={logo} alt="logo" />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpg"
            alt="Othisis Logo"
            className="h-18 w-18 sm:h-32 sm:w-32 object-contain"
          />
          <h1 className="text-sm sm:text-base font-semibold whitespace-nowrap"></h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FiBell className="cursor-pointer" size={18} />
        <FiUser className="cursor-pointer" size={18} />
        <FiArrowDownCircle className="cursor-pointer"  size={18} />
      </div>
    </div>
  );
};

export default Navbar;