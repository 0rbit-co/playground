import React from "react";
import InlineCode from "./InlineCode";
import Link from "next/link";

const InfoStatic = () => {
  return (
    <div className="flex flex-col gap-3 mb-9 tracking-wide">
      <h2 className="text-[21px] font-extralight">
        Gm gm gm! Try it out yourself!
      </h2>
      <div className="text-left text-[18px]">
        {/* <p>Checkout our AO playground 👀 by BetterIDEa</p> */}
        <p>You can use the code tutorials and test them on aos directly here</p>
        <p>
          For more info, check out our{" "}
          <a
            href="https://docs.0rbit.co/"
            target="_blank"
            className="text-[15px] hover:underline"
          >
            <InlineCode>docs</InlineCode>
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoStatic;
