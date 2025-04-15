import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-3 bg-white border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-end items-center gap-3">
        <button className="px-5 py-2 text-sm border border-black text-black rounded-full hover:bg-gray-100 transition">
          Send Referral
        </button>
        <button className="px-5 py-2 text-sm bg-black text-white rounded-full hover:bg-gray-800 transition">
          Save Note
        </button>
      </div>
    </footer>
  );
};

export default Footer;