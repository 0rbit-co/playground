"use client";
import React from "react";
import PrismLoader from "../PrismLoader";
import { useCodeStore } from "../../_store/store";
import InlineCode from "../InlineCode";

const POSTReq = () => {
  const setCurCode = useCodeStore((state) => state.changeCode);
  const assignVar = '_0RBIT= "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"';
  const getRealData =
    'local json = require("json")\nSend({\n\tTarget = _0RBIT,\n\tAction = "Post-Real-Data",\n\tUrl = "https://arweave.net/graphql",\n\tBody = json.encode({\n\t\tquery = [[\n\t\t\tquery {\n\t\t\t\ttransactions(\n\t\t\t\t\towners: ["vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI"]\n\t\t\t\t) {\n\t\t\t\t\tedges{\n\t\t\t\t\t\tnode {id}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]],\n\t\tvariables = {}\n\t})\n})';
  const inbox = "#Inbox";
  // const [code, setCode] = useState("");
  const tryItHandler = (code: any) => {
    console.log(code);
    setCurCode(code);
  };
  return (
    <div className="max-h-[48vh] overflow-scroll min-w-full">
      {" "}
      <h4 className="font-extralight text-[18px] ml-[6px] mb-[6px]">
        {" "}
        {">"} Step 1: Create a variable for 0rbit's Process Id
      </h4>
      <div className="flex flex-row items-center justify-center gap-3 mb-6">
        <pre className="language-js flex flex-row justify-between items-center !bg-[#61625F]">
          <code className="language-js">{assignVar}</code>
          <PrismLoader />
        </pre>
        <div
          onClick={() => {
            // setCode(assignVar);
            tryItHandler(assignVar);
          }}
          className="bg-[#212121] px-4 py-[3px] rounded-md 
      text-center text-[13.5px] 
      flex items-center justify-center 
      h-fit min-w-fit
      hover:text-[15px] hover:cursor-pointer"
        >
          Try It!
        </div>
      </div>
      <h4 className="font-extralight text-[18px] ml-[6px] mb-[6px]">
        {"> "}Step 2: Create a Post request
      </h4>
      <div className="flex flex-row items-center justify-center gap-3">
        <pre className="language-lua !bg-[#61625F]">
          <code className="language-lua">{getRealData}</code>
          <PrismLoader />
        </pre>
        <div
          onClick={() => {
            // setCode(assignVar);
            tryItHandler(getRealData);
          }}
          className="bg-[#212121] px-4 py-[3px] rounded-md 
      text-center text-[13.5px] 
      flex items-center justify-center 
      h-fit min-w-fit
      hover:text-[15px] hover:cursor-pointer"
        >
          Try It!
        </div>
      </div>
      <h6 className="mb-6">
        This will create a Get request and send it to the 0rbit's GET ao
        process.
      </h6>
      <h4 className="font-extralight text-[18px] ml-[6px] mb-[6px]">
        {"> "}Step 3: Check the Inbox
      </h4>
      <h6>
        You can check the inbox of your ao process to see the response from the
        0rbit.
      </h6>
      <div className="flex flex-row items-center gap-3 min-w-full">
        <pre className="language-lua w-full !bg-[#61625F]">
          <code className="language-lua">{inbox}</code>
          <PrismLoader />
        </pre>
        <div
          onClick={() => {
            // setCode(assignVar);
            tryItHandler("%23Inbox");
          }}
          className="bg-[#212121] px-4 py-[3px] rounded-md 
      text-center text-[13.5px] 
      flex items-center justify-center 
      h-fit min-w-fit
      hover:text-[15px] hover:cursor-pointer"
        >
          Try It!
        </div>
      </div>
      <h6>
        For this particular example, the response from the 0rbit will be a
        number of products.
      </h6>
    </div>
  );
};

export default POSTReq;
