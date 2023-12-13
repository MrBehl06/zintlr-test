import React from "react";
import { MdError } from "react-icons/md";
const TicketsSingleConsumerPage = () => {
  return (
    <div className="p-2 flex justify-between items-center bg-green-200  w-full ">
      <div className="flex justify-between items-center">
        <MdError />
        <span>2 Active Tickets</span>
      </div>
      <button className=" bg-gray-800 w-auto px-2 py-1 text-[14px] text-white rounded-md">
        View Ticket History
      </button>
      
    </div>
  );
};

export default TicketsSingleConsumerPage;
