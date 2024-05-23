"use client";
import React, { useEffect, useState } from "react";
import { useCodeStore } from "../_store/store";
import { CodeCell, runCell, setCellCode } from "@betteridea/codecell";

const BetterIDEa = () => {
  const curCode = useCodeStore((state) => state.curCode);
  const [a, setA] = useState("//Enter Code Here...");
  const [render, setRender] = useState(true);

  useEffect(() => {
    console.log(encodeURI(curCode));
    // setA(curCode);
    setCellCode("1", curCode);
    console.log("heyy", curCode);
  }, [curCode]);

  useEffect(() => {
    setRender(false);
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, [a]);

  if (!render) {
    return null;
  }

  return <CodeCell height="100%" cellId="1" appName="Sandbox" />;
};

export default BetterIDEa;
