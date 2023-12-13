import React from "react";
import uptrend from "../../../assets/uptrend.png";
import gold from "../../../assets/gold.png";
const GoldPrice = () => {
  return (
    <div className="flex items-center justify-center p-1 border border-gray-200 rounded-xl">
      <div className="">
        <img src={gold} className="w-32 h-16" alt="" />
      </div>
      <div className="text-[12px]">
        <div className="flex items-center p-1 justify-center">
          <span>Buy: ₹7390.00</span>
          <img className="w-6 h-4" src={uptrend} alt="" />
        </div>
        <div className="flex items-center p-1 justify-center">
          <span>Sell: ₹7090.00</span>
          <img className="w-6 h-4" src={uptrend} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GoldPrice;
