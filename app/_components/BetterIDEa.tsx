"use client";
import React, { useEffect, useState } from "react";
import { useCodeStore } from "../_store/store";
import { CodeCell, setCellCode, getInbox } from "@betteridea/codecell";
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

  const onNewMessage = (m: any) => {
    console.log("message new", m);
  };

  const onInbox = (i: any) => {
    console.log("inbox", i);
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
      <div className="relative h-[33px] w-full justify-start px-20 lg:flex hidden max-w-[1800px]">
        <div className="absolute left-0 z-10">
          <div className="bg-[#EB8F44] bg-opacity-30 text-[#EB8F44] font-semibold border-2 border-[#EB8F44] text-sm rounded py-2 px-4 shadow-lg relative">
            <div className="flex items-center">
              <h3>
                {curPid
                  ? `Process ID: ${curPid}`
                  : `Please Connect Your Wallet First !!`}
              </h3>
              {curPid ? (
                copied ? (
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
                    src="/clip0.svg"
                    height={18}
                    width={18}
                    onClick={handleCopy}
                    className="hover:cursor-pointer w-[18px] h-[18px] hover:bg-[#7f512a] rounded-md"
                  />
                )
              ) : (
                ""
              )}
            </div>
            <div className="w-0 h-0 border-t-8 border-t-[#EB8F44] border-r-8 border-r-transparent border-l-8 border-l-transparent absolute left-1 -bottom-2"></div>
          </div>
        </div>
      </div>
      <button
        className="bg-[#000000] px-[12px]"
        onClick={() => {
          getInbox("1", true);
        }}
      >
        Check Inbox
      </button>
      <CodeCell
        height="100%"
        cellId="1"
        appName="Sandbox"
        onAOProcess={onAOProcess}
        onNewMessage={onNewMessage}
        onInbox={onInbox}
      />
    </>
  );
};

export default BetterIDEa;
