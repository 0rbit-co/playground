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
    <iframe
      className="w-[100%] px-[48px] min-h-[60vh] py-[48px]"
      src={`https://ide.betteridea.dev/?codeblock=${a}`}
    ></iframe>
  );
};

export default BetterIDEa;
