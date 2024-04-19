import React from "react";
import TypeButton from "./TypeButton";

const Tabs = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-3 px-9">
      <TypeButton btnName="GET Request" />
      <TypeButton btnName="POST Request" />
      <TypeButton btnName="Pricefeed" />
      <TypeButton btnName="Newsfeed" />
    </div>
  );
};

export default Tabs;
