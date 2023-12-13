import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { TbNotes } from "react-icons/tb";
const TransactionSingleComsumerPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-2 border-b-2">
        <h3>Last Transaction</h3>
        <div className="flex justify-between items-center p-1 text-blue-400 ">
          <h5 className="text-[12px] text-blue-400">View All Transactions</h5>
          <IoMdArrowDropright />
        </div>
      </div>
      <div className="flex justify-between items-center p-2 border-b-4">
        <div>
          <h3>Money added</h3>
          <h4 className="text-[12px]  ">
            {" "}
            Transaction id :{" "}
            <span className="text-[12px] opacity-50"> 134676543223456</span>
          </h4>
          <span className="text-[12px] opacity-50">
            Thur 19 Apr 13:12:00 IST 2021
          </span>
        </div>
        <div>
          <h3 className="text-green-500">+ ₹7,390.00</h3>
          <div className="flex justify-center items-center p-2">
            <h3 className="bg-green-100 text-green-600 text-[8px]  rounded-full py-1 px-2 w-auto text-center">
              Success
            </h3>
            <TbNotes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSingleComsumerPage;
