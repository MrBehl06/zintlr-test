import React from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
const ChatSingleConsumerPage = () => {
  return (
    <div className="bg-red-100 p-2 w-[200px]">
      <h5 className="text-[10px] text-red-600">Start a Chat With</h5>
      <h2>Raghvendra</h2>
      <button className=" bg-gray-800 flex justify-center items-center w-auto px-4 py-1 text-[14px] text-white rounded-md">
        <IoChatbubblesSharp />
        Chat
      </button>
    </div>
  );
};

export default ChatSingleConsumerPage;
