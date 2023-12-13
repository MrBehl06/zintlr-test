import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMyContext } from "../../../Context/MyContext";
import SinglePage from "../SingleConsumerPage/MainPage";

const RenderingPage = () => {
  const { sharedState, updateSharedState, updatesecondSharedState } =
    useMyContext();

  const handleClickEvent = () => {
    updateSharedState(false);
    updatesecondSharedState(false);
  };

  return (
    <AnimatePresence>
      {sharedState && (
        <>
          <motion.div
            className=" absolute m-0 top-0 left-0 h-screen w-full bg-black bg-opacity-50"
            onClick={() => {
              handleClickEvent();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="block bg-white z-50 absolute top-0 h-screen right-0 overflow-scroll shadow-md"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SinglePage />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RenderingPage;
