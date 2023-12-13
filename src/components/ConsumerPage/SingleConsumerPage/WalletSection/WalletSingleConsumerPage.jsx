import React from "react";
import { useState } from "react";
import { WalletInfo } from "../../../../constants/WalletInfo";
import WalletSingleComsunerPageLeftSection from "./WalletSingleComsunerPageLeftSection";
import GraphSingleConsumerPage from "../GraphSingleConsumerPage";

const WalletSingleConsumerPage = () => {
  const [
    section1,
    section2,
    section3,
    section4,
    section5,
    { dataSet: section6WeekData },
    section7,
    section8,
    section9,
  ] = WalletInfo;
  // Past week logic
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-2 border-b-4">
        <WalletSingleComsunerPageLeftSection props={section1} />
        <div>
          <h3 className="text-2xl">₹1,35,342</h3>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 border-b-4">
        <WalletSingleComsunerPageLeftSection props={section2} />
        <div>
          <div className="flex justify-between items-center w-[280px] m-1">
            <div className="bg-yellow-200 rounded-full py-1 px-3 text-[10px]">
              Gold
            </div>{" "}
            <span>4,232 gm</span>
            <h3 className="bg-blue-100 text-blue-600 text-[12px]  rounded-full py-1 px-2 w-auto text-center">
              ₹9242.5
            </h3>
          </div>
          <div className="flex justify-between items-center  m-1">
            <div className="bg-gray-200 rounded-full py-1 px-3 text-[10px]">
              Silver
            </div>{" "}
            <span>134,232 gm</span>
            <h3 className="bg-blue-100 text-blue-600 text-[12px]  rounded-full py-1 px-2 w-auto text-center">
              ₹49,242.5
            </h3>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 border-b-4">
        <WalletSingleComsunerPageLeftSection props={section3} />
        <div>
          <h3 className="text-2xl">₹1,35,342</h3>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 border-b-4">
        <WalletSingleComsunerPageLeftSection props={section4} />
        <div className="flex items-center justify-between ">
          <span className="text-[12px] opacity-50 px-2">
            Net Next EMI Amount
          </span>
          <h3 className="text-2xl ">₹1,35,342</h3>
        </div>
        <div className="flex items-center justify-between  ">
          <span className="text-[12px] opacity-50 px-2">
            Overall Loan Amount
          </span>
          <h3 className="text-2xl">35,342</h3>
        </div>
      </div>
      <div className=" w-[42rem] p-2 border-b-4">
        <div className="flex ">
          <WalletSingleComsunerPageLeftSection props={section5} />
        </div>
        <div className="mb-3 mt-3">
          {section6WeekData.map((buttonText, index) => {
            return (
              <button
                key={index}
                className={`${
                  selectedButton === index
                    ? "bg-gray-800  text-white"
                    : "bg-white border-[1px] border-black"
                } w-auto px-2 py-1 text-[12px] m-1 text-black rounded-md`}
                onClick={() => handleButtonClick(index)}
              >
                {buttonText}
              </button>
            );
          })}
        </div>
        <div>
          <GraphSingleConsumerPage />
        </div>
      </div>
      <div className="flex justify-between items-center p-2 border-b-4">
        <WalletSingleComsunerPageLeftSection props={section7} />
        <div className="flex items-center justify-between ">
          <span className="text-[12px] opacity-50 px-2">Total Referral</span>
          <h3 className="text-2xl ">232</h3>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="flex justify-between items-center  w-1/2 ">
          <WalletSingleComsunerPageLeftSection props={section8} />
          <div className="">
            <button className=" bg-gray-400 w-auto px-2 py-1 text-[14px] text-white rounded-md">
              Disable
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center  ">
          <WalletSingleComsunerPageLeftSection props={section9} />
          <div className="">
            <button className=" bg-green-500 w-auto px-2 py-1 text-[14px] text-black rounded-md">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSingleConsumerPage;
