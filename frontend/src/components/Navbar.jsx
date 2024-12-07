import React, { useEffect, useState } from "react";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/appSlice";

const Navbar = () => {
  const [input , setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchText(input))
  },[input])        //input because when you type P it will go to empty string then you write a it will go to string again ......
  
  return (
    <div className="flex items-center justify-between h-16 mx-3">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full cursor-pointer hover:bg-gray-200">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="logo"
          />
          <h1 className="text-2xl font-medium text-gray-500">FEmail</h1>
        </div>
      </div>
      <div className="w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="search Mail"
            className="w-full px-1 bg-transparent rounded-full outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200">
          <CiCircleQuestion size={"24px"} />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200">
          <IoIosSettings size={"24px"} />
        </div>
        <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200">
          <TbGridDots size={"24px"} />
        </div>
        <RxAvatar
          src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Lionel_Messi_WC2022.jpg"
          size="37"
          round={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
