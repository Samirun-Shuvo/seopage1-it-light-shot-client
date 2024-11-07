import React from "react";
import { MdAssignment } from "react-icons/md";
import { FaElementor } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-md my-3">
      <div className="p-2 ">
        <div className="flex justify-between items-center py-2">
          <div className="avatar items-center">
            <div className="w-6 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <p className="pl-1">
              <small>Client Name</small>
            </p>
          </div>
          <div className="avatar items-center">
            <div className="w-6 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <p className="pl-1">
              <small>Sadik Istiak</small>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-start items-center">
            <FaElementor />
            <p className="px-2">
              <small>Lorem ipsum dolor...</small>
            </p>
          </div>
          <div className="flex justify-start items-center">
            <MdAssignment />
            <p>
              <small>1/2</small>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="avatar items-center">
            <div className="w-6 rounded-full m-1">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <div className="w-6 rounded-full m-1">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div>12 + </div>
          <div className="flex justify-center items-center">
            <FaRegComments />
            <p className="px-1"> 15</p>
          </div>
          <div className="flex justify-center items-center">
            <IoMdAttach />
            <p className="px-1"> 0</p>
          </div>
          <div className="flex justify-center items-center">
            <FaCalendarDays />
            <p className="px-1">30-12-2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
