import React from "react";
import RewardsCard from "./RewardsCard";

function RewardsHistory() {
    const data = [
        {
            id: 1,
            heading: "Gift Reward Collected",
            subHeading: "12-12-12",
            imgUrls: "./gift.svg"
        },
        {
            id: 2,
            heading: "Gift Reward Collected",
            subHeading: "12-12-12",
            imgUrls: "./gift.svg"
        },
        {
            id: 3,
            heading: "Gift Reward Collected",
            subHeading: "12-12-12",
            imgUrls: "./gift.svg"
        },
    ]
  return (
    <div className="px-2.5 py-4 shadow-primary rounded-[15px] mt-3 mb-[6.4rem]">
      <div className="flex justify-between items-center">
        <h3 className="text-[12px] font-[500]">History</h3>
        <p className="text-[10px] font-[500] text-[#C0C0C0] border-b leading-tight">View More</p>
      </div>
        <div className="flex flex-col gap-2 mt-2.5">
      {data.length>0 && data.map(data => <RewardsCard key={data.id} {...data} />)}
      </div>
    </div>
  );
}

export default RewardsHistory;
