import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div>
      <nav>
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md"
            >
              <FaChevronLeft className="w-2.5 h-2.5 rtl:rotate-180" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md"
            >
              <span className=" text-[12px] text-black">1</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md"
            >
              <span className="text-[12px] text-black">2</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md"
            >
              <span className="text-[12px] text-black">...</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md"
            >
              <span className="text-[12px] text-black">9</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md"
            >
              <span className="text-[12px] text-black">10</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md"
            >
              <FaChevronRight className="w-2.5 h-2.5 rtl:rotate-180" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
