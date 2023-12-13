import React from "react";
import { WalletInfo } from "../../../constants/WalletInfo";
import { MdOutlineArrowBack } from "react-icons/md";
import { TransactionsDetails } from "../../../constants/TransactionsDetails";
import { TbNotes } from "react-icons/tb";
import { useMyContext } from "../../../Context/MyContext";
import WalletSingleComsunerPageLeftSection from "../SingleConsumerPage/WalletSection/WalletSingleComsunerPageLeftSection";
const MainSecondPage = () => {
  const { updatesecondSharedState } = useMyContext();
  const [section1] = WalletInfo;
  const handleClick = () => {
    updatesecondSharedState(null);
  };
  return (
    <>
      <div className="w-[500px]">
        <div className="flex justify-between items-center p-4   ">
          <div className="flex justify-center items-center">
            <div className="text-[30px]">
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                }}
              >
                <MdOutlineArrowBack />
              </a>
            </div>
            <div>
              <WalletSingleComsunerPageLeftSection props={section1} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl">₹1,35,342</h3>
          </div>
        </div>

        <div className="p-4">
          <h3 className="m-1">Transaction History</h3>
          {TransactionsDetails.map((trans) => {
            return (
              <>
                <div className="flex justify-between m-1 items-center bg-white p-2 border-[1px] border-gray-200">
                  <div>
                    <div className="flex">
                      <h3>{trans.transactonDetail}</h3>
                      {trans.typeOfGold !== null && (
                        <span className="mx-2 text-blue-500 font-light  text-md">
                          {trans.typeOfGold}
                        </span>
                      )}
                    </div>
                    <h4 className="text-[12px]  ">
                      {" "}
                      Transaction id :{" "}
                      <span className="text-[12px] opacity-50">
                        {" "}
                        {trans.transaction_id}
                      </span>
                    </h4>
                    <span className="text-[12px] opacity-50">{trans.date}</span>
                    {trans.type2 !== undefined && trans.type2 !== null && (
                      <div className="flex justify-left items-center w-[70%] m-1">
                        <div className="bg-yellow-200 rounded-full py-1 px-3 mr-4 text-[10px]">
                          Gold
                        </div>
                        <span>4,232 gm</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3
                      className={
                        trans.type === "debited"
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {trans.amount}
                    </h3>
                    <div className="flex justify-center items-center p-2">
                      <h3 className="bg-green-100 text-green-600 text-[8px] rounded-full py-1 px-2 w-auto text-center">
                        Success
                      </h3>
                      <TbNotes />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainSecondPage;
