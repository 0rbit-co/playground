"use client";
import React, { useState, useEffect } from "react";
import { brandLightText } from "../../_utils/colors";
import { getInbox } from "@betteridea/codecell";
import Image from "next/image";
import {
  useAlertStore,
  useMessagesArrayStore,
  usePidStore,
} from "../../_store/store";

const MessagesDD = () => {
  const [mesToggle, setMesToggle] = useState(false);
  const [notif, setNotif] = useState(false);
  const messArr = useMessagesArrayStore((state) => state.messArr);
  const curPid = usePidStore((state) => state.curPid);
  const alert = useAlertStore((state) => state.alert);
  const setAlert = useAlertStore((state) => state.setAlert);

  useEffect(() => {
    getInbox("1", true);
  }, []);

  useEffect(() => {
    console.log("alert effecvt triggere", alert);
    if (!mesToggle && alert) {
      getInbox("1", true);
      setNotif(true);
    }
  }, [alert]);

  useEffect(() => {
    if (mesToggle) {
      setAlert(false);
      setNotif(false);
    }
  }, [mesToggle]);

  const stripAnsiCodes = (str: string) => {
    return str?.replace(
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
      <button
        disabled={!curPid}
        className={`flex flex-row justify-between w-full gap-3 items-center
         transition-[all_0.3s] 
        ${
          curPid
            ? "hover:cursor-pointer hover:tracking-widest"
            : "hover:cursor-not-allowed"
        }`}
      >
        <div
          onClick={() => {
            console.log("clicked on!mes");
            getInbox("1", true);
            setMesToggle(!mesToggle);
            console.log(mesToggle);
          }}
          className="flex flex-row gap-3 items-center justify-start"
        >
          <h3 className="uppercase text-[15px] text-[#98e870]">
            {curPid
              ? `${mesToggle ? "Messages" : "Check Inbox"}`
              : "Connect Wallet Above"}
          </h3>
          {curPid && (
            <Image
              src="/ddMes.png"
              width={15}
              height={21}
              alt="dd"
              className={`${mesToggle ? "rotate-180" : "rotate-0"}`}
            />
          )}
          {notif && (
            <Image
              src="/alert.png"
              width={15}
              height={21}
              alt="dd"
              // className={`${mesToggle ? "rotate-180" : "rotate-0"}`}
            />
          )}
        </div>
        {curPid && (
          <Image
            onClick={() => {
              getInbox("1", true);
              setMesToggle(true);
            }}
            src="/reload.png"
            width={15}
            height={15}
            alt="reload"
            className={` w-[15px] h-[15px] hover:w-[18px] hover:h-[18px] ${
              mesToggle ? "rotate-[360deg]" : "rotate-0"
            }`}
          />
        )}
      </button>

      <div
        className={`max-h-[60px] ${
          mesToggle ? "overflow-y-scroll block" : "hidden"
        }`}
      >
        {/* {mesToggle && messArr
          ? `
          $*/}
        {messArr?.map((item, id) => {
          stripAnsiCodes(item.Data);
          return (
            <div className=" tracking-[1.5px]">
              <span className="text-[#98e870]">{`Inbox[${
                id + 1
              }].Data: `}</span>
              {item.Data ? `${stripAnsiCodes(item.Data)}` : "No Data"}
            </div>
          );
        })}
        {/* `
          : `${curPid && mesToggle ? "No Messages" : ""}`} */}
      </div>
    </div>
  );
};

export default MessagesDD;
