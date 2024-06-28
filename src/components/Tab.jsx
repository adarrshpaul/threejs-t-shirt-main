import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);
  return (
    <div
      key={tab.name}
      className='tab-btn rounded-full glassmorphism'
      onClick={handleClick}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className='object-fit scale-75'
      />
    </div>
  )
}

export default Tab;
