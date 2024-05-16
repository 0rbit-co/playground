"use client";
import { useTutorialStore } from "@/app/_store/store";
import React, { useEffect } from "react";
import { GETReq, POSTReq, PriceFeed, NewsFeed } from "../";

const TutRender = () => {
  const currentTut = useTutorialStore((state) => state.curTutorial);
  useEffect(() => {
    console.log(currentTut);
  }, [currentTut]);
  return (
    <div className="px-6 mx-[-12px] rounded-md min-h-fit leading-6">
      {currentTut == "GET Request" && <GETReq />}
      {/* {currentTut == "post" && <POSTReq />} */}
      {currentTut == "Pricefeed" && <PriceFeed />}
      {currentTut == "Newsfeed" && <NewsFeed />}
    </div>
  );
};

export default TutRender;
