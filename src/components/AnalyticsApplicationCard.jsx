import React from "react";

function AnalyticsApplicationCard() {
  return (
    <div className=" mb-32 mt-5 p-7 rounded-[32px] shadow-primary">
      <div className="top flex justify-between">
        <div className="left">
            <p className="text-[12px] font-[500] text-[#8F8F8F]">Automated note-taking application</p>
            <h2 className="text-[24px] font-[600] mt-1.5">Ozone Application</h2>
            <p className="text-[12px] font-[500]">09:00AM - 12:00PM</p>
        </div>
        <div className="right mt-1 relative self-start">
          <div className="progress-bar">
          </div>
          <p className="text-[12px] font-[500] text-[#ff0101] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">50</p>
        </div>
      </div>
      <div className="bottom flex justify-between">
        <div className="left self-end bg-[#FFC7C7] rounded-[13.5px]">
            <p className="text-[12px] font-[500] text-[#FF0101] py-1 px-1.5">3 days left</p>
        </div>
        <div className="right bg-[#FFC7C7] rounded-full w-[33px] h-[33px] flex justify-center items-center">
            <img src="./downloadArrow.svg" alt="downloadIcon" />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsApplicationCard;
