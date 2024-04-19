"use client";
import { useState } from "react";
import PrismLoader from "../PrismLoader";
import InlineCode from "../InlineCode";
import { useCodeStore } from "../../_store/store";

const GETReq = () => {
  const setCurCode = useCodeStore((state) => state.changeCode);
  const assignVar = '_0RBIT= "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"';
  const getRealData =
    'Send({\n\tTarget = _0RBIT,\n\tAction = "Get-Real-Data",\n\tUrl = "https://dummyjson.com/products"\n\t})';
  const inbox = "#Inbox";
  // const [code, setCode] = useState("");
  const tryItHandler = (code: any) => {
    console.log(code);
    setCurCode(code);
  };
  return (
    <div className="max-h-[300px] overflow-scroll ">
      {" "}
      <h4 className=" font-semibold"> {">"} Step 1: Create a variable</h4>
      <div className="flex flex-row items-center justify-center gap-3">
        <pre className="language-js flex flex-row justify-between items-center">
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
      <h6>
        This will create a variable <InlineCode>_0RBIT</InlineCode> and assign
        the value of the process ID of the 0rbit's GET{" "}
        <InlineCode>ao</InlineCode> process.
      </h6>
      <h4 className=" font-semibold">{"> "}Step 2: Create a Get request</h4>
      <div className="rounded-x text-[15px]"></div>
      <div className="flex flex-row items-center justify-center gap-3">
        <pre className="language-lua">
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
      <h6>In this command:</h6>
      <ul>
        <li>
          TARGET is the process ID of the ao process user wants to interact
          with, which in this case is 0rbit's GET ao process.
        </li>
        <li>
          Action is the specific tag required by 0rbit to perform the Get
          request.
        </li>
        <li>
          {" "}
          Url is the URL of the website from which we want to get the data.{" "}
        </li>
      </ul>
      <h6>
        This will create a Get request and send it to the 0rbit's GET ao
        process.
      </h6>
      <h4 className=" font-semibold">{"> "}Step 3: Check the Inbox</h4>
      <h6>
        After sending the request, you can check the inbox of your ao process to
        see the response from the 0rbit. Just type the following command in the
        terminal:
      </h6>
      <div className="flex flex-row items-center justify-center gap-3">
        <pre className="language-lua">
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

export default GETReq;
