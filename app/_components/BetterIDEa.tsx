"use client";
import React, { useEffect, useState } from "react";
import { useCodeStore } from "../_store/store";

const BetterIDEa = () => {
  const curCode = useCodeStore((state) => state.curCode);
  const [a, setA] = useState("//Enter Code Here...");
  useEffect(() => {
    console.log(curCode);
    setA(curCode);
  }, [curCode]);

  return (
    <div>
    <iframe
      className="w-[100%] px-[48px] min-h-[90vh] py-[48px]"
      src={`https://ide.betteridea.dev/?codeblock=${a}`}
    ></iframe>
    <div className="flex justify-end items-end px-10">
    <span className="text-beige/70 text-sm">
          Powered by <a href="#" className="underline">Better Idea</a>
        </span>
    </div>
    </div>
  );
};

export default BetterIDEa;
