import React from "react";

import ConsumerAnalysisPage from "./ConsumerOverviewLeftSection/ConsumerAnalysis/ConsumerAnalysisPage";
import ConsumerOverviewGraphSection from "./ConsumerOverviewRightSection/Graphs/ConsumerOverviewGraphSection";
import ConsumerAndCustomer from "./ConsumerOverviewLeftSection/ConsumerAndCustomerSection/ConsumerAndCustomer";
import WalletPage from "./ConsumerOverviewLeftSection/WalletSection/WalletPage";

const ConsumerOverviewPage = () => {
  return (
    <div>
      <div className="">Consumer Overview</div>
      <div className="flex">
        <div>
          <ConsumerAndCustomer />
          <WalletPage />
          <ConsumerAnalysisPage />
        </div>
        <div>
          <ConsumerOverviewGraphSection />
        </div>
      </div>
    </div>
  );
};

export default ConsumerOverviewPage;
