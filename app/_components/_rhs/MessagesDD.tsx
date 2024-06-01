"use client";
import React, { useState } from "react";
import { brandLightText } from "../../_utils/colors";
import { getInbox } from "@betteridea/codecell";
import Image from "next/image";
import { useMessagesArrayStore } from "../../_store/store";

const MessagesDD = () => {
  //   const [mesArr, setMesArr] = useState<any[]>([]);
  const [mesToggle, setMesToggle] = useState(false);
  const messArr = useMessagesArrayStore((state) => state.messArr);

  const stripAnsiCodes = (str: string) => {
    str.replace(
      /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
      ""
    );
  };
  return (
    <div
      className={`bg-[#000000] w-full py-[12px] px-[13.5px] rounded-md 
        text-[12px] ${brandLightText} mt-[-12px]
        `}
    >
      <div
        onClick={() => {
          getInbox("1", true);
          setMesToggle(!mesToggle);
        }}
        className="flex flex-row justify-start gap-3 items-center"
      >
        <button className="uppercase text-[15px] text-[#98e870]">
          {mesToggle ? "Messages" : "Check Inbox"}
        </button>
        <Image
          src="/ddMes.png"
          width={15}
          height={21}
          alt="dd"
          className={`${mesToggle ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <div className={`max-h-[60px] ${mesToggle ? "overflow-y-scroll" : ""}`}>
        {mesToggle &&
          messArr?.map((item, id) => {
            stripAnsiCodes(item.Data);
            return (
              <div className=" tracking-[1.5px]">
                {`Inbox[${id + 1}].Data: `}
                {item.Data ? item.Data : "No Data"}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MessagesDD;
