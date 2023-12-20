import React from "react";
import { useMyContext } from "../../../../Context/MyContext";

const WalletSingleComsunerPageLeftSection = ({ props }) => {
  const { secondSharedState, updateSecondSharedState } = useMyContext();
  const handleClick = (newValue) => {
    if (newValue) {
      updateSecondSharedState(false);
    } else {
      updateSecondSharedState(true);
    }
    console.log(secondSharedState);
  };
  const renderOptionalContent = () => {
    if (!props.text) {
      return null;
    }
    return (
      <>
        <h5 className="text-[12px] text-blue-400">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              handleClick(secondSharedState);
            }}
          >
            {props.text}
          </a>
        </h5>
        <div
          className={`${secondSharedState === "open" ? "rotate-180" : "none"}`}
        >
          <props.iconSecond />
        </div>
      </>
    );
  };

  return (
    <div className="flex justify-between items-center ">
      <div className={props.iconStyle}>
        <props.icon />
      </div>
      <div className="line-clamp-2 px-2 text-left">
        <h3>{props.mainText}</h3>
        <div className="flex justify-start items-center text-blue-400">
          {renderOptionalContent()}
        </div>
      </div>
    </div>
  );
};

export default WalletSingleComsunerPageLeftSection;
