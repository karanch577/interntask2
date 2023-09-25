import React, { useState, useEffect } from "react";
import SalesBarChart from "./SalesBarChart";

function SalesBarChartContainer() {
    const [selectedMonth, setSelectedMonth] = useState(null)

    useEffect(() => {
        const currentDate = new Date();
    
        // Get the current month (zero-based, so January is 0, February is 1, etc.)
        const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to match the <option> values and pad with zero if needed
    
        // Set the current month as the default selected month
        setSelectedMonth(currentMonth);
      }, []);

      const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
      };
    
  return (
    <div className="rounded-[15px] shadow-primary px-5 py-2 mt-6">
      <div className="header flex justify-between">
        <div className="left">
          <h2 className="text-[24px]">Sales</h2>
        </div>
        <div className="right">
          <p className="text-[12px] text-[#A87FE3] mb-3.5">More details</p>
          <div className="relative">
          <select className="rounded-[11.5px] shadow-primary h-[23px] text-[13px] font-[500] px-4 appearance-none"  value={selectedMonth}
            onChange={handleMonthChange}>
            <option value="01">Jan</option>
            <option value="02">Feb</option>
            <option value="03">Mar</option>
            <option value="04">Apr</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">Aug</option>
            <option value="09">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <img className="w-[3px] absolute right-5 top-[10.6px] rotate-90" src="./accordionIcon.svg" alt="arrow" />
          {/* absolute arrow icon */}
          </div>
        </div>
      </div>
      <SalesBarChart />
    </div>
  );
}

export default SalesBarChartContainer;
