import React, { useState } from "react";
import FaqItem from "../components/FaqItem";

const data = [
    {
        id: 1,
        faqHeading: "General",
        faqDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        faqHeading: "Account",
        faqDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 3,
        faqHeading: "Transactions",
        faqDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 4,
        faqHeading: "Offers and Rewards",
        faqDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 5,
        faqHeading: "Redemptions",
        faqDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
]

function FAQs() {
    const [activeItemId, setActiveItemId] = useState(null)

    const handleActiveItem = (id) => {
        activeItemId === id ? setActiveItemId(null) : setActiveItemId(id)
    }

  return (
    <div className="mx-4 mt-2">
      <h2 className="text-[32px] font-[500]">FAQs</h2>
      <div className="faqContainer rounded-[16px] shadow-primary text-[#050505] py-1 mt-6 mb-28">
        {data.length > 0 && data.map((item, index) => <FaqItem key={item.id} data={{
            ...item,
            handleActiveItem,
            activeItemId,
            showBorder: index !== data?.length - 1
            }} />)}
      </div>
    </div>
  );
}

export default FAQs;
