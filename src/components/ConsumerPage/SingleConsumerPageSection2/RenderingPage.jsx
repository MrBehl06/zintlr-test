import React from "react";
import { useMyContext } from "../../../Context/MyContext";
import SinglePage from "../SingleConsumerPage/MainPage";
const RenderingPage = () => {
  const { sharedState, updateSharedState } = useMyContext();
  const handleClickEvent = () => {
    updateSharedState(false);
  };
  return (
    <>
      <div
        className={`${
          sharedState ? "fixed" : "hidden"
        } absolute m-0 top-0 left-0 h-screen w-full bg-black bg-opacity-50`}
        onClick={() => {
          handleClickEvent();
        }}
      ></div>
      <div
        className={`${
          sharedState ? "block" : "hidden"
        } bg-white z-50 absolute top-0 h-screen right-0 overflow-scroll shadow-md`}
      >
        <SinglePage />
      </div>
    </>
  );
};

export default RenderingPage;
