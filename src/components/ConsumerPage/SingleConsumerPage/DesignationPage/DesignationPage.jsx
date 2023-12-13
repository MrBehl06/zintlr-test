import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import ChatSingleConsumerPage from "../ChatPage/ChatSingleConsumerPage";
const DesignationPage = () => {
  return (
    <div className="flex justify-between items-center border-y-4 ">
      <div className="flex w-full justify-center items-center">
        <div className="p-2">
          <h4 className="text-[10px]">B2B Field Executive</h4>
          <h4 className="text-[20px]">Arun Jha</h4>
        </div>
        <div className="text-sky-400 text-xl p-2">
          <MdArrowRightAlt />
        </div>
        <div className="p-2">
          <h4 className="text-[10px]">Associate</h4>
          <h4 className="text-[20px]">Anika Singh</h4>
        </div>
        <div className="text-sky-400 text-xl p-2">
          <MdArrowRightAlt />
        </div>
        <div className="p-2">
          <h4 className="text-[10px]">Consumer</h4>
          <h4 className="text-[20px]">Raghvendra Raga</h4>
        </div>
      </div>
      <div>
        <ChatSingleConsumerPage />
      </div>
    </div>
  );
};

export default DesignationPage;
