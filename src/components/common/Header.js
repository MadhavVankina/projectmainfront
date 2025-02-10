import React, { useState } from "react";
import Dhuni from "../../assets/images/dhuni.png";
import HourTime from "../../assets/images/hourTime.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-[70px] bg-white shadow-lg flex items-center px-6 justify-between">
      <div
        className="h-16 aspect-square bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${Dhuni})` }}
      ></div>
      <div className="relative flex gap-6 items-center">
        <div
          className="h-16 aspect-[16/6] bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${HourTime})` }}
        ></div>
        <button
          className="h-12 w-12 bg-black rounded-[50%]"
          onClick={() => setShowMenu((prev) => !prev)}
        ></button>
        {showMenu && (
          <div className="absolute w-52 bg-white shadow-lg top-16 right-0 rounded-[8px] overflow-hidden">
            <button className="p-4 w-full text-sm font-bold flex gap-4 items-center hover:bg-black/5">
              <RiLockPasswordLine size={20} /> Change Password
            </button>
            <button className="p-4 w-full text-sm font-bold flex gap-4 items-center hover:bg-black/5">
              <MdLogout size={20} /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
