import React from "react";
import SalesBarChartContainer from "../components/SalesBarChartContainer";
import SalesDoughnutChartContainer from "../components/SalesDoughnutChartContainer";
import TypeReportContainer from "../components/TypeReportContainer";
import AnalyticsApplicationCard from "../components/AnalyticsApplicationCard";


function Analytics() {
  return (
    <div className="mx-4 mt-2">
      <h2 className="text-[32px] font-[500]">Analytics</h2>

      <SalesBarChartContainer />
      <SalesDoughnutChartContainer />
      <TypeReportContainer />
      <AnalyticsApplicationCard />
    </div>
  );
}

export default Analytics;
