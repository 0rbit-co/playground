"use client";
import React, { useEffect, useState } from "react";
import { useCodeStore } from "../_store/store";
import { CodeCell, runCell, setCellCode } from "@betteridea/codecell";
import { brandDarkText, brandSecondaryBg } from "../_utils/colors";

const BetterIDEa = () => {
  const curCode = useCodeStore((state) => state.curCode);
  const [curPid, setCurPid] = useState("");

  useEffect(() => {
    console.log(encodeURI(curCode));
    // setA(curCode);
    setCellCode("1", curCode);
    console.log("heyy", curCode);
  }, [curCode]);

  const onAOProcess = (pid: any) => {
    setCurPid(pid);
    console.log(pid);
  };
  return (
    <>
      <CodeCell
        height="100%"
        cellId="1"
        appName="Sandbox"
        onAOProcess={onAOProcess}
      />
      <h3
        className={`font-semibold text-[12px] ${brandDarkText} my-[6px] ${brandSecondaryBg} px-[12px] py-[3px] rounded-sm`}
      >
        {curPid ? `Process ID:${curPid}` : "Please Connect"}
      </h3>
    </>
  );
};

export default BetterIDEa;
