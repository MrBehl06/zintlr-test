import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav>
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md"
          >
            <FaChevronLeft className="w-2.5 h-2.5 rtl:rotate-180" />
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md ${
                currentPage === page ? "bg-gray-300" : ""
              }`}
            >
              <span className="text-[12px] text-black">{page}</span>
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-2 m-1 h-6 w-6 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-md"
          >
            <FaChevronRight className="w-2.5 h-2.5 rtl:rotate-180" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
