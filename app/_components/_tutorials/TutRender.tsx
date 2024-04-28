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
    <div className="bg-[#121212] px-9 py-6 h-[500px] overflow-scroll hide mt-10 rounded-xl">
      {currentTut == "get" && <GETReq />}
      {currentTut == "post" && <POSTReq />}
      {currentTut == "pf" && <PriceFeed />}
      {currentTut == "nf" && <NewsFeed />}
    </div>
  );
};

export default TutRender;
