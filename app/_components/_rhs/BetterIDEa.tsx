"use client";
import React, { useEffect, useState } from "react";
import {
  useCodeStore,
  useMessagesArrayStore,
  usePidStore,
} from "../../_store/store";
import { CodeCell, setCellCode } from "@betteridea/codecell";
import PidDisplay from "./PidDisplay";
import MessagesDD from "./MessagesDD";

const BetterIDEa = () => {
  const curCode = useCodeStore((state) => state.curCode);
  const setMessArr = useMessagesArrayStore((state) => state.setMessArr);
  const setCurPid = usePidStore((state) => state.setCurPid);
  const [newMes, setNewMes] = useState("");

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
    setNewMes(m);
  };
  useEffect(() => {
    alert(newMes);
    console.log("new mes", newMes);
  }, [newMes]);

  const onInbox = (i: any) => {
    console.log("inbox", i);
    setMessArr(i);
  };

  return (
    <>
      <PidDisplay />
      <CodeCell
        height="100%"
        cellId="1"
        appName="Sandbox"
        onAOProcess={onAOProcess}
        onNewMessage={(m: any) => {
          console.log("check");
          console.log(m);
        }}
        onInbox={onInbox}
      />
      <MessagesDD />
    </>
  );
};

export default BetterIDEa;
