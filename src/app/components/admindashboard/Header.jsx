import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";
// import logo from "./path-to-logo.svg"; // Path to your logo

const Header = () => {
  return (
    <header className="bg-white shadow-md h-16 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center">
        <h1 className="text-lg font-bold ml-2">School Dashboard</h1>
      </div>

      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered outline-none  bg-gray-50 px-6 p-2 rounded"
        />
      </div>

      <div className="flex items-center">
        <IoMdNotificationsOutline
          size={24}
          className="text-gray-700 mr-4 cursor-pointer"
        />
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar flex items-center gap-3"
          >
            <div className="w-10 rounded-full">
              <MdAccountCircle size={40} />
            </div>
            <div>
              <h5 className="text-[18px] ">Logout</h5>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
