"use client";
import React, { useState } from "react";

const BetterIDEa = () => {
  const [a, setA] = useState("//Enter Code Here...");
  return (
    <iframe
      className="w-[100%] px-[48px] min-h-[60vh] py-[48px]"
      src={`https://ide.betteridea.dev/?codeblock=${a}`}
    ></iframe>
  );
};

export default BetterIDEa;
