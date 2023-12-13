import React from "react";
import Sidebar from "../SideBar/Sidebar";
import TopBar from "../TopBar/TopBar";
import ConsumerPageHeader from "../ConsumerPage/ConsumerHeader/ConsumerPageHeader";
import ConsumerOverviewPage from "../ConsumerOverviewPage./ConsumerOverviewPage";

const LandingPage = () => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-full px-8">
        <TopBar />
        <ConsumerPageHeader />
        <ConsumerOverviewPage />
      </div>
    </div>
  );
};

export default LandingPage;
