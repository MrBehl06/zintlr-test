import React from "react";
import { ConsumerSectionHeaderInfo } from "../../../constants/ConsumerSectionHeaderInfo";
import ConsumerSectionHeader1 from "./ConsumerSectionHeader1";
const ConsumerPageHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <ConsumerSectionHeader1
        props={{
          MainText: " Hello Shakir ! ",
          pageId: 1,
          SubText: "You have 134 consumer this week",
          MainText2: "Actions",
          ButtonText1: "Add Consumer",
          ButtonText2: "Manage Consumers",
          Link: "/page2",
        }}
      />
      {ConsumerSectionHeaderInfo.map((i) => {
        const color = i.style.color;
        const iconColor = i.style.iconColor;
        return (
          <div className={`${color} p-4 w-[200px] flex flex-col  rounded-md `}>
            <div className="flex pb-1 items-center justify-start  ">
              <i.icon style={{ fontSize: "1.5rem", color: { iconColor } }} />
              <h3>
                <span className="text-xl px-1">{i.fig}</span>
                {i.type}
              </h3>
            </div>
            <div className="h-9 px-1 text-sm">
              <span>{i.status}</span>
            </div>
            <div className="pb-1">
              <button className="p-1 bg-gray-800 w-[110px] text-white rounded-md">
                View List
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConsumerPageHeader;
