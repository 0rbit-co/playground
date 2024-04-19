import React from "react";
import { JetBrains_Mono } from "next/font/google";
const jet = JetBrains_Mono({
  subsets: ["latin"],
});

const InlineCode = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <span
      className={"bg-[#5a5a5a] rounded-md px-[6px] py-[2px] " + jet.className}
    >
      {children}
    </span>
  );
};

export default InlineCode;
