import React from "react";

import Sidebar from "../SideBar/Sidebar";
import TopBar from "../TopBar/TopBar";
import ConsumerPageHeader2 from "../ConsumerPage/ConsumerHeader/ConsumerPageHeader2";
import ConsumerOverview from "../ConsumerPage/ConsumerHeader/ConsumerOverview";
import ConsumerTablePage from "../ConsumerPage/ConsumerTable/ConsumerTablePage";

import RenderingPage from "../ConsumerPage/SingleConsumerPageSection2/RenderingPage";

const SecondLandingPage = () => {
  return (
    <div className="relative">
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-full px-8">
          <TopBar />
          <ConsumerPageHeader2 />
          <ConsumerOverview />
          <ConsumerTablePage />
        </div>
        <div>
          <RenderingPage />
        </div>
      </div>
    </div>
  );
};

export default SecondLandingPage;
