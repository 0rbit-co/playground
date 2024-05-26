"use client";
import React, { useEffect, useState } from "react";
import { useCodeStore } from "../_store/store";
import { CodeCell, runCell, setCellCode } from "@betteridea/codecell";
import {
  brandDarkText,
  brandLightText,
  brandSecondaryBg,
} from "../_utils/colors";
import Image from "next/image";

const BetterIDEa = () => {
  const curCode = useCodeStore((state) => state.curCode);
  const [curPid, setCurPid] = useState("");
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    if (curPid) {
      navigator.clipboard
        .writeText(curPid)
        .then(() => {
          setCopied(true);
          console.log("Copied to clipboard:", curPid);
        })
        .catch((err) => {
          setCopied(false);
          console.error("Failed to copy:", err);
        });
    }
  };

  return (
    <>
      <CodeCell
        height="100%"
        cellId="1"
        appName="Sandbox"
        onAOProcess={onAOProcess}
      />
      <div
        className={`flex flex-row items-center justify-start gap-3 font-semibold text-[12px] ${brandLightText} my-[6px] ${brandSecondaryBg} px-[12px] py-[3px] rounded-sm`}
      >
        <h3> {curPid ? `Process ID:${curPid}  ` : "Please Connect"}</h3>
        {curPid && copied ? (
          <Image
            alt="copy"
            src="/clip1.png"
            height={18}
            width={18}
            onClick={handleCopy}
            className="hover:cursor-pointer w-[18px] h-[18px] hover:bg-[#7f512a] rounded-md"
          />
        ) : (
          <Image
            alt="copy"
            src="/clip0.png"
            height={18}
            width={18}
            onClick={handleCopy}
            className="hover:cursor-pointer w-[18px] h-[18px] hover:bg-[#7f512a] rounded-md"
          />
        )}
      </div>
    </>
  );
};

export default BetterIDEa;
