import React from "react";
import SearchBar2 from "./SearchBar2";
import { TfiReload } from "react-icons/tfi";
import { RiFileExcel2Fill } from "react-icons/ri";
import { PiFileCsvFill } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";

const ConsumerOverview = () => {
  const iconStyle =
    "w-auto  px-2 py-1 h-7 m-1 rounded-sm border border-1 border-black ";
  return (
    <div>
      <h2 className="px-2 py-4">Consumer Overview </h2>
      <div className="flex justify-between items-center p-2">
        <div>
          <SearchBar2 />
        </div>
        <div className="flex justify-between items-center">
          <div className={`${iconStyle} text-white bg-slate-900`}>
            <TfiReload />
          </div>
          <div className={iconStyle}>
            <RiFileExcel2Fill />
          </div>
          <div className={iconStyle}>
            <PiFileCsvFill />
          </div>
          <div className="w-auto text-sm h-7 text-white items-center justify-center px-2 py-2 rounded-sm bg-sky-400 flex">
            <FiFilter />
            <h4>Filter</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerOverview;
