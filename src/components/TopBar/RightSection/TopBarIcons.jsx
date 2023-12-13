import React from "react";
import { TbMoneybag } from "react-icons/tb";
import { TiFolderOpen } from "react-icons/ti";
import { FaWallet } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";

const iconSize = "1.5em"; // You can adjust the size as needed

const TopBarIcons = () => {
  return (
    <div className="flex items-center p-2 justify-center">
      <div className="p-1">
        <TbMoneybag style={{ fontSize: iconSize }} />
      </div>
      <div className="p-1">
        <TiFolderOpen style={{ fontSize: iconSize }} />
      </div>
      <div className="p-1">
        <FaWallet style={{ fontSize: iconSize }} />
      </div>
      <div className="p-1">
        <IoNotifications style={{ fontSize: iconSize }} />
      </div>
    </div>
  );
};

export default TopBarIcons;
