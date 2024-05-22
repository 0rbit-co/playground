"use client";
import React, { useEffect, useState } from "react";
import { useCodeStore } from "../_store/store";
import { CodeCell, runCell } from "@betteridea/codecell";

const BetterIDEa = () => {
  const curCode = useCodeStore((state) => state.curCode);
  const [a, setA] = useState("//Enter Code Here...");
  useEffect(() => {
    console.log(encodeURI(curCode));
    setA(curCode);
  }, [curCode]);

  return <CodeCell height="100%" cellId="1" appName="Sandbox" code={a} />;
};

export default BetterIDEa;
