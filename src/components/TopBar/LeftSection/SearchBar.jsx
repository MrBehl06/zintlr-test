import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  const parentDiivStyle =
    " flex w-[250px] items-center justify-between  p-1  rounded-full bg-gray-100 ";
  const inputTagStyle =
    " w-full text-sm p-2 rounded-full text-gray-900 bg-gray-100 ";
  const iconStyle =
    " flex items-center w-8 h-8 justify-center p-1 rounded-full  bg-white ";
  return (
    <div>
      <div className={parentDiivStyle}>
        <input
          type="search"
          id="default-search"
          className={inputTagStyle}
          placeholder="Search(Eg: Rewards)"
        />
        <div className={iconStyle}>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
