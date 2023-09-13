import React from "react";
import RewardsCard from "./RewardsCard";

function YourRewards() {
    const data = [
        {
            id: 1,
            heading: "10% off on all Apple products",
            subHeading: "Offer valid till 12-12-12",
            imgUrls: "./apple.svg"
        },
        {
            id: 2,
            heading: "10% off on all Samsung products",
            subHeading: "Offer valid till 12-12-12",
            imgUrls: "./samsung.svg"
        },
        {
            id: 3,
            heading: "10% off on all Bose products",
            subHeading: "Offer valid till 12-12-12",
            imgUrls: "./bose.svg"
        },
    ]
  return (
    <div className="px-2.5 py-4 shadow-primary rounded-[15px] my-3">
      <div className="flex justify-between items-center">
        <h3 className="text-[12px] font-[500]">Your Rewards</h3>
        <p className="text-[10px] font-[500] border-b leading-tight text-[#C0C0C0]">View More</p>
      </div>
        <div className="flex flex-col gap-2 mt-2.5">
      {data.length>0 && data.map(data => <RewardsCard key={data.id} {...data} />)}
      </div>
    </div>
  );
}

export default YourRewards;
