import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const KYCDropdown = ({ selectedStatus, onStatusChange }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex flex-col">
          KYC Status
          {/* To show the Status Logic */}
          <div className="font-light text-sky-700 text-[10px]">
            {selectedStatus.join(", ") || ""}
          </div>
        </div>
        <button type="button" onClick={toggleDropdown}>
          <RiArrowDropDownLine style={{ fontSize: "20px" }} />
        </button>
      </div>
      {dropdownVisible && (
        <div
          id="dropdownDefaultCheckbox"
          className="z-10 w-auto bg-white divide-y absolute divide-gray-100 mt-4 border-1 shadow"
        >
          <ul
            className="p-3 space-y-3 text-[12px] text-gray-700"
            aria-labelledby="dropdownCheckboxButton"
          >
            {[
              { status: "Pending", color: "red" },
              { status: "In Progress", color: "yellow" },
              { status: "Done", color: "green" },
              { status: "Rejected", color: "gray" },
            ].map((item) => (
              <li key={item.status}>
                <div className="flex items-center">
                  <input
                    id={`checkbox-item-${item.status}`}
                    type="checkbox"
                    value={item.status}
                    className="w- h-4  bg-gray-100 border-gray-300 rounded"
                    checked={selectedStatus.includes(item.status)}
                    onChange={() => onStatusChange(item.status)}
                  />
                  <label
                    htmlFor={`checkbox-item-${item.status}`}
                    className={`bg-${item.color}-100 text-${item.color}-600 text-[10px] ml-2 rounded-full py-1 px-1 w-[70px] text-center`}
                  >
                    {item.status}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default KYCDropdown;
