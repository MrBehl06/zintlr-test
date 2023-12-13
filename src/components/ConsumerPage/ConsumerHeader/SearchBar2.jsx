import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar2 = () => {
  const parentDiivStyle =
    " flex w-[360px] items-center justify-between    rounded-md bg-white border border-1";
  const inputTagStyle =
    " w-full text-sm p-2 rounded-md text-gray-900 bg-white ";
  const iconStyle =
    " flex items-center w-8 h-8 justify-center p-1 rounded-full  bg-white ";
  return (
    <div>
      <div>
        <div>
          <div className={parentDiivStyle}>
            <input
              type="search"
              id="default-search"
              className={inputTagStyle}
              placeholder="Search Consumers"
            />
            <div className={iconStyle}>
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar2;
