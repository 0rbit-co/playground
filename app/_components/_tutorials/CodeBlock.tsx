import React from "react";
import PrismLoader from "../PrismLoader";

const CodeBlock = ({ step }: any) => {
  return (
    <pre className="language-js flex flex-row justify-between items-center !bg-[#61625F] self-center">
      <code className="language-js">{step}</code>
      <PrismLoader />
    </pre>
  );
};

export default CodeBlock;
