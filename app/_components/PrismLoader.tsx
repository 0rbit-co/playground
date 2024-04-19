"use client";
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-javascript";
const PrismLoader = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <div className="hidden"></div>;
};

export default PrismLoader;
