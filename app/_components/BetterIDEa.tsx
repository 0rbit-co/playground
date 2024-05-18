"use client";
import React, { useEffect, useState } from "react";
import { useCodeStore } from "../_store/store";
import { CodeCell, runCell } from "@betteridea/codecell";

const BetterIDEa = () => {
  const curCode = useCodeStore((state) => state.curCode);
  const [a, setA] = useState("//Enter Code Here...");
  useEffect(() => {
    console.log(encodeURI(curCode));
    // setA(encodeURI(curCode));
    setA(curCode);
  }, [curCode]);

  return (
    // <iframe
    //   className="w-[100%] px-[3px] min-h-[87vh] py-[6px] pb-[9px]"
    //   src={`https://ide.betteridea.dev/?codeblock=${a}`}
    // ></iframe>

    // in your react app
    <CodeCell
      height="100%"
      cellId="1" // any unique cell id
      appName="BetterIDEa" // Your unique app name
      code={a} // initial code (optional)
    />
  );
};

export default BetterIDEa;
