import React from "react";
import { motion } from "framer-motion";
import ConsumerSingleDetails from "./ConsumerSingleDetails";
import TicketsSingleConsumerPage from "./TicketPage/TicketsSingleConsumerPage";
import DesignationPage from "./DesignationPage/DesignationPage";
import TransactionSingleComsumerPage from "./TransactionPage/TransactionSingleComsumerPage";
import SecondPage from "../SingleConsumerPageSection2/MainSecondPage";
import { useMyContext } from "../../../Context/MyContext";
import WalletSingleConsumerPage from "./WalletSection/WalletSingleConsumerPage";
const MainPage = () => {
  const { secondSharedState } = useMyContext();
  return (
    <div className="bg-white">
      <div className=" bg-white p-2">
        <ConsumerSingleDetails />
      </div>
      <div className="flex w-full  ">
        <div className="w-full border-2   bg-white">
          <TicketsSingleConsumerPage />
          <DesignationPage />
          <TransactionSingleComsumerPage />
          <WalletSingleConsumerPage />
        </div>
        {secondSharedState && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-[500px] border-2  bg-gray-100"
          >
            <SecondPage />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
