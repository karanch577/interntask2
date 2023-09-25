import React from 'react'

function BadgeCard({ heading, count, iconUrl, bgColor, isDashboardCard }) { 
  let cardWidth, cardHeight, countFontSize, countFontWeight, iconWidth, headingFontSize, borderRadius;

  if(isDashboardCard) {
    cardWidth = "78px";
    cardHeight = "67px";
    countFontSize = "12px";
    countFontWeight = "500";
    iconWidth = "21px";
    headingFontSize = "8px";
    borderRadius = "10px"
  }else {
    cardWidth = "100%";
    cardHeight = "184px";
    countFontSize = "40px";
    countFontWeight = "600";
    iconWidth = "99px";
    headingFontSize = "32px";
    borderRadius = "20px";
  }
  return (
    <div style={{
      borderRadius: borderRadius,
      height: cardHeight,
      width: cardWidth,
      }} className={`flex shrink-0 flex-col justify-between px-2 pt-[5px] pb-2 text-white z-50 ${bgColor} relative`}>
        <div className='flex items-center justify-between'>
            <h2 style={{fontSize: countFontSize, fontWeight: countFontWeight}}>{count}</h2>
            <div className='img absolute top-[0px] right-0.5'>
                <img style={{width: iconWidth}} src={iconUrl} alt="badge" />
            </div>
        </div>

        <h2 className={`text-[${headingFontSize}] font-[500]`}>{heading}</h2>
    </div>
  )
}

export default BadgeCard