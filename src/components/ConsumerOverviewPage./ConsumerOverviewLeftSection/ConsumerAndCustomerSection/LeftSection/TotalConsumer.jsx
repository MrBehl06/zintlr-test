import React from "react";
import { IoPeople } from "react-icons/io5";
const TotalConsumer = () => {
  return (
    <div className="flex justify-evenly items-center p-4 rounded-[10px] bg-indigo-100">
      <h3 className="text-[4rem] text-indigo-700">
        <IoPeople />
      </h3>
      <div>
        <h3>Total Consumer</h3>
        <h2 className="text-[1.5rem]">1342</h2>
      </div>
    </div>
  );
};

export default TotalConsumer;
