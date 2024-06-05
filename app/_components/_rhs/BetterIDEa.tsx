"use client";
import React, { useEffect, useState } from "react";
import {
  useAlertStore,
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
  const setAlert = useAlertStore((state) => state.setAlert);
  const [newMes, setNewMes] = useState("");

  useEffect(() => {
    console.log(encodeURI(curCode));
    // setA(curCode);
    setCellCode("1", curCode);
    console.log("heyy", curCode);
  }, [curCode]);

  const onAOProcess = (pid: any) => {
    setCurPid(pid);
    console.log("OnAOProces gave pid:", pid);
  };

  const stripAnsiCodes = (str: string) => {
    return str?.replace(
      /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
      ""
    );
  };

  const onNewMessage = (m: any) => {
    console.log("message new", stripAnsiCodes(m), "test\n", m);
    // setNewMes(m);
    // alert("You have new Message!");
  };
  // useEffect(() => {
  //   alert(newMes);
  //   console.log("new mes", newMes);
  // }, [newMes]);

  const onInbox = (i: any) => {
    // console.log("inbox", i);
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
          console.log("message new", "test\n", m);
          // setNewMes(m);
          if (m[0].Output.print) {
            setAlert(true);
            // alert("You have new Message!");
          }
        }}
        onInbox={onInbox}
      />
      <MessagesDD />
    </>
  );
};

export default BetterIDEa;
