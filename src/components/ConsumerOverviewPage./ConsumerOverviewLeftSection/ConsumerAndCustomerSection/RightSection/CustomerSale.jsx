import React from "react";
import { MdInfo } from "react-icons/md";
const CustomerSale = ({ props }) => {
  return (
    <div className="flex m-2 w-[252px] justify-between">
      <div className="flex justify-between items-center ">
        <h3 className="mr-2">{props.type}</h3>
        <MdInfo className="text-indigo-700" />
      </div>
      <h2>{props.count}</h2>
    </div>
  );
};

export default CustomerSale;
