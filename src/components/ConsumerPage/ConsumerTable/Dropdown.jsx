import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Dropdown = ({ props }) => {
  const mainText = props.mainText;
  const Arr = props.arr;
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex flex-col ">
          {mainText}
          <div className="font-light  text-sky-700 text-[10px]">
            {props.revenue}
          </div>
        </div>
        <button type="button" onClick={toggleDropdown}>
          <RiArrowDropDownLine style={{ fontSize: "20px" }} />
        </button>
      </div>
      {dropdownVisible && (
        <div
          id="dropdownDefaultCheckbox"
          className="z-10 w-auto bg-white divide-y absolute divide-gray-100 mt-4  border-1 shadow"
        >
          <ul
            className="p-3 space-y-3 text-[12px] text-gray-700"
            aria-labelledby="dropdownCheckboxButton"
          >
            {Arr.map((i) => {
              const flag = i.flag;
              const style = i.style;
              return (
                <li>
                  <div className="flex items-center">
                    <input
                      id="checkbox-item-1"
                      type="checkbox"
                      value=""
                      className="w- h-4  bg-gray-100 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="checkbox-item-1"
                      className={` ${
                        flag !== "true"
                          ? "ms-2 text-[10px] font-medium text-gray-900"
                          : style
                      }`}
                    >
                      {i.text}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
