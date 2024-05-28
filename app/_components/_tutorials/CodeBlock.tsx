import React from "react";
import PrismLoader from "../PrismLoader";

const CodeBlock = ({ step }: any) => {
  return (
    <pre className="language-lua w-full !bg-[#535A45] codeblock">
      <code className="language-lua">{step}</code>
      <PrismLoader />
    </pre>
  );
};

export default CodeBlock;
