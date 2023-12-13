import React from "react";
import { MdSpeed } from "react-icons/md";
import { useMyContext } from "../../../Context/MyContext";
import { IoClose } from "react-icons/io5";
const ConsumerSingleDetails = () => {
  const { secondSharedState, updatesecondSharedState } = useMyContext();
  const handleClick = (newValue) => {
    // Perform some logic
    if (newValue === "open") {
      updatesecondSharedState(null);
    } else {
      updatesecondSharedState("open");
    }
    console.log(secondSharedState);
  };
  return (
    <>
      <div className="w-full  h-auto  items-center flex justify-between   ">
        <div className="flex  items-center justify-evenly">
          <div className="px-2">
            <h3 className="text-[18px]">Sandeep Behl</h3>
            <span className="text-[12px]">Pay and Use (Major)</span>
          </div>
          <div
            className="w-12 h-12  bg-orange-200 flex flex-col  items-center justify-center rounded-md
          "
          >
            <MdSpeed />
            <h4 className=" ">245</h4>
          </div>
          <div className=" flex flex-col items-start p-2 ">
            <h3 className="bg-red-100 text-red-600 text-[12px]  rounded-full py-1 px-1 w-[100px] text-center">
              KYC Pending
            </h3>
            <button className=" m-1 py-1 bg-gray-800 w-[60px] text-[14px] text-white rounded-md">
              Verify
            </button>
          </div>
        </div>
        {secondSharedState === null ? (
          <div className="h-full p-2">
            <h3 className="text-[12px]">Intiated</h3>
            <h4 className="text-[12px] opacity-50">Thur 19 Apr</h4>
            <h4 className="text-[12px] opacity-50">13:12:00 IST 2021</h4>
          </div>
        ) : (
          <div className="text-[40px]">
            <a href=""onClick={(e)=>{
              e.preventDefault();
              handleClick(secondSharedState);
            }} ><IoClose /></a>
          </div>
        )}
      </div>
    </>
  );
};

export default ConsumerSingleDetails;
