import { useState } from "react";
import PrismLoader from "../PrismLoader";
import InlineCode from "../InlineCode";
import { useCodeStore } from "../../_store/store";

const POSTReq = () => {
  const setCurCode = useCodeStore((state) => state.changeCode);
  const assignVar = '_0RBIT= "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"';
  const getRealData =
    'Send({\n\tTarget = _0RBIT,\n\tAction = "Get-Real-Data",\n\tUrl = "https://dummyjson.com/products"\n})';
  const inbox = "Inbox[#Inbox].Data";

  const tryItHandler = (code: any) => {
    console.log(code);
    setCurCode(code);
  };

  return (
    <div className="h-[600px] overflow-scroll hide">
      <h4 className="font-bold">{"$"} Step 1: Create a variable</h4>
      <div className="flex flex-row items-center justify-center gap-3">
        <pre className="language-js flex flex-row justify-between items-center">
          <code className="language-lua">{assignVar}</code>
          <PrismLoader />
        </pre>
        <div
          onClick={() => tryItHandler(assignVar)}
          className="terminal-button"
        >
          Try It!
        </div>
      </div>
      <p className="terminal-text">
        This will create a variable <InlineCode>_0RBIT</InlineCode> and assign
        the value of the process ID of the 0rbit's GET <InlineCode>ao</InlineCode> process.
      </p>
      <h4 className="font-bold">{"$"} Step 2: Create a Get request</h4>
      <div className="flex flex-row items-center justify-center gap-3">
        <pre className="language-lua">
          <code className="language-lua">{getRealData}</code>
          <PrismLoader />
        </pre>
        <div
          onClick={() => tryItHandler(getRealData)}
          className="terminal-button"
        >
          Try It!
        </div>
      </div>
      <p className="terminal-text flex flex-col">
        <div>
        In this command:
        </div>
        <br />
        <div>
        <InlineCode>TARGET</InlineCode> is the process ID of the <InlineCode>ao</InlineCode> process user wants to interact
        with, which in this case is <span className="font-roboto-mono">0</span>rbit's <InlineCode>GET</InlineCode> ao process.
        </div>
        <br />
        <div>
        <InlineCode>Action</InlineCode> is the specific tag required by <span className="font-roboto-mono">0</span>rbit to perform the <InlineCode>GET</InlineCode>
        request.
        </div>
        <br />
        <div>
        <InlineCode>Url</InlineCode> is the URL of the website from which we want to get the data.
        </div>
      </p>
      <p className="terminal-text">
        This will create a Get request and send it to the <InlineCode><span className="font-roboto-mono">0</span>rbit's GET</InlineCode> ao
        process.
      </p>
      <h4 className="font-bold">{"$"} Step 3: Check the Inbox</h4>
      <p className="terminal-text">
        After sending the request, you can check the inbox of your ao process to
        see the response from the 0rbit. Just type the following command in the
        terminal:
      </p>
      <div className="flex flex-row items-center justify-center gap-3">
        <pre className="language-lua">
          <code className="language-lua">{inbox}</code>
          <PrismLoader />
        </pre>
        <div
          onClick={() => tryItHandler("%23Inbox")}
          className="terminal-button"
        >
          Try It!
        </div>
      </div>
      <p className="terminal-text">
        For this particular example, the response from the <span className="font-roboto-mono">0</span>rbit will be a
        number of products.
      </p>
    </div>
  );
};

export default POSTReq;
