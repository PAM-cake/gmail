import React, { useState } from "react";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";

import { IoMdMore, IoMdRefresh } from "react-icons/io";
import Emails from "./Emails";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Socials",
  },
];

const Inbox = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex-1 mx-5 bg-white rounded-xl">
      <div className="flex items-center justify-between px-4 my-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center ">
            <MdCropSquare size={"18px"} />
            <FaCaretDown size={"18px"} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200">
            <IoMdRefresh size={"18px"} />
          </div>
          <div className="p-2 rounded-full cursor-pointer hover:bg-gray-200">
            <IoMdMore size={"18px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>1 to 50</span>
          <button className="hover:rounded-full hover:bg-gray-100"> <MdKeyboardArrowLeft size={"20px"} /> </button>
          <button className="hover:rounded-full hover:bg-gray-100"> <MdKeyboardArrowRight size={"20px"} /> </button>
        </div>
      </div>
      <div className="overflow-y-auto h-90vh">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                onClick={() => setSelected(index)}
                className={`${
                  selected == index
                    ? "border-b-4 border-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent"
                }flex items-center gap-5 p-4 w-52 hover:bg-gray-200`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <Emails/>
      </div>
    </div>
  );
};

export default Inbox;
