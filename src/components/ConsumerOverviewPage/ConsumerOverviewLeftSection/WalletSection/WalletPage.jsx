import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";

import LineChart from "../ConsumerAndCustomerSection/Graph/LineChart";
import WalletSingleComsunerPageLeftSection from "../../../ConsumerPage/SingleConsumerPage/WalletSection/WalletSingleComsunerPageLeftSection";
const WalletPage = () => {
  return (
    <div className="flex ">
      <div>
        <div className="flex rounded-xl shadow-sm border-gray-100 border-[1px] justify-between  m-1  items-center p-4">
          <div>
            <h3 className="text-xs">₹Total Earnings</h3>
            <h3 className="text-xl">₹1,35,342</h3>
            <button
              className={
                "text-black  border-[1px] border-black w-auto px-2 py-1 text-[12px] m-1  rounded-md"
              }
            >
              Past Week
            </button>
          </div>
          <div className=" ">
            <LineChart />
          </div>
        </div>
        <div className=" rounded-xl shadow-sm border-gray-100 border-[1px] flex justify-between text-xs bg-indigo-50  items-center p-4 w-[380px]">
          <WalletSingleComsunerPageLeftSection
            props={{
              id: 1,
              icon: RiMoneyDollarCircleFill,
              iconStyle:
                "w-12 h-12 text-2xl bg-indigo-100 flex items-center justify-center rounded-full text-indigo-600",
              mainText: "Overall Cash Wallet ",
              text: "Wallet History",
              iconSecond: IoMdArrowDropright,
            }}
          />
          <div>
            <h3 className="text-[18px]">₹1,35,342</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between rounded-xl shadow-sm border-gray-100 border-[1px] text-xs m-1 bg-green-50  items-center p-4 w-[380px]">
          <WalletSingleComsunerPageLeftSection
            props={{
              id: 1,
              icon: GiTakeMyMoney,
              iconStyle:
                "w-12 h-12 text-2xl bg-green-100 flex items-center justify-center rounded-full text-green-600",
              mainText: "Overall Float Wallet ",
              text: "Wallet History",
              iconSecond: IoMdArrowDropright,
            }}
          />
          <div>
            <h3 className="text-[18px]">₹1,35,342</h3>
          </div>
        </div>
        <div className="flex justify-between rounded-xl shadow-sm border-gray-100 border-[1px] text-xs m-1 bg-orange-50  items-center p-4 w-[380px]">
          <WalletSingleComsunerPageLeftSection
            props={{
              id: 1,
              icon: FaWallet,
              iconStyle:
                "w-12 h-12 text-2xl bg-orange-100 flex items-center justify-center rounded-full text-orange-600",
              mainText: "Overall Bullion Wallet ",
              text: "Wallet History",
              iconSecond: IoMdArrowDropright,
            }}
          />
          <div>
            <div className="flex justify-between items-center w-[150px] m-1">
              <div className="bg-yellow-200 text-yellow-600 rounded-full py-1 px-3 text-[8px]">
                Gold
              </div>{" "}
              <div>
                <h3>4,232 gm</h3>
                <h3 className="bg-blue-100 text-blue-600 text-[10px]  rounded-full py-1 px-2 w-auto text-center">
                  ₹9242.5
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center  m-1">
              <div className="bg-gray-200 text-gray-600 rounded-full py-1 px-3 text-[8px]">
                Silver
              </div>{" "}
              <div>
                <h3>134,232 gm</h3>
                <h3 className="bg-blue-100 text-blue-600 text-[10px]  rounded-full py-1 px-2 w-auto text-center">
                  ₹49,242.5
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
