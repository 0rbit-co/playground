"use client";
import React, { useEffect, useState } from "react";
import { useCodeStore } from "../_store/store";
import { CodeCell, runCell, setCellCode } from "@betteridea/codecell";

const BetterIDEa = () => {
  const curCode = useCodeStore((state) => state.curCode);
  const [curPid, setCurPid] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    console.log(encodeURI(curCode));
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
    </>
  );
};

export default BetterIDEa;