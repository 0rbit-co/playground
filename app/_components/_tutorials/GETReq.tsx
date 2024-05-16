import PrismLoader from "../PrismLoader";
import { useCodeStore } from "../../_store/store";
import CodeBlock from "./CodeBlock";
import { brandSecondaryBg } from "@/app/_utils/colors";

const GETReq = () => {
  const setCurCode = useCodeStore((state) => state.changeCode);
  // const assignVar = '_0RBIT= "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"';
  const step1 =
    'local json = require("json")\n\n_0RBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"\n\nBASE_URL = "https://dummyjson.com/products"\n\nReceivedData = ReceivedData or {}';
  // const getRealData =
  //   'Send({\n\tTarget = _0RBIT,\n\tAction = "Get-Real-Data",\n\tUrl = "https://dummyjson.com/products"\n\t})';
  const step2 =
    'Handlers.add(\n\t"Get-Request",\n\tHandlers.utils.hasMatchingTag("Action", "Sponsored-Get-Request"),\n\tfunction(msg)\n\t\tSend({\n\t\t\tTarget = _0RBIT,\n\t\t\tAction = "Get-Real-Data",\n\t\t\tUrl = BASE_URL\n\t\t})\n\t\tprint(Colors.green .. "You have sent a GET Request to the 0rbit process.")\n\tend\n)';
  const step31 =
    'Handlers.add(\n\t"Receive-Data",\n\tHandlers.utils.hasMatchingTag("Action", "Receive-Response"),\n\tfunction(msg)\n\t\tlocal res = json.decode(msg.Data)\n\t\tReceivedData = res\n\t\tprint(Colors.green .. "You have received the data from the 0rbit process.")\n\tend\n)';
  const step32 = 'Send({ Target= ao.id, Action="Sponsored-Get-Request" })';
  const step4 = "ReceivedData";
  const tryItHandler = (code: any) => {
    console.log(code);
    setCurCode(code);
  };
  return (
    <div className="max-h-[48vh] overflow-scroll min-w-full flex flex-col gap-6 px-6">
      {" "}
      {/* 1 VARS */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {" "}
          {">"} Step 1: Create variables!
        </h4>
        <p className="text-[12px]">
          (for 0rbit's Process Id, api URL and to store incoming Data)
        </p>
        <div className="flex flex-col justify-center gap-[6px] min-w-full">
          {/* <pre className="language-js flex flex-row justify-between items-center !bg-[#61625F]">
            <code className="language-js">{step1}</code>
            <PrismLoader />
          </pre> */}
          <CodeBlock step={step1} />
          <div
            onClick={() => {
              // setCode(step1);
              tryItHandler(step1);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
          text-center text-[13.5px] font-medium
          flex items-center justify-center self-end
          h-fit min-w-fit
          hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
      </div>
      {/* <div>
        <h4 className="font-extralight text-[18px] ml-[6px] mb-[6px]">
          {"> "}Step 2: Create a Get request
        </h4>
        <div className="flex flex-row items-center gap-3 min-w-full">
          <pre className="language-lua w-full">
            <code className="language-lua">{getRealData}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(getRealData);
            }}
            className="bg-[#212121] px-4 py-[1.5px] rounded-md 
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
      </div> */}
      {/* 2 HANDLERS */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 2: Create Handlers
        </h4>
        <p className="text-[12px]">(Sponsored Get Request Handler)</p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <pre className="language-lua w-full !bg-[#61625F]">
            <code className="language-lua">{step2}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step2);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
        <p className="text-[12px]">(Receive Response Handler)</p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <pre className="language-lua w-full !bg-[#61625F]">
            <code className="language-lua">{step31}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step31);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
      </div>
      {/* 3 Call Handler*/}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 3: Call the Handler
        </h4>
        <p className="text-[12px]">
          Call the handler, who will create a request for the 0rbit process.
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <pre className="language-lua w-full !bg-[#61625F]">
            <code className="language-lua">{step32}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step32);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
        </div>
      </div>
      {/* 4 Check Data */}
      <div>
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 4: Check the Data
        </h4>
        <p className="text-[12px]">
          To check the data stored in the ReceivedData variable, run the
          following command:
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <pre className="language-lua w-full !bg-[#61625F]">
            <code className="language-lua">{step4}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step4);
            }}
            className={`${brandSecondaryBg} px-3 py-[1.5px] rounded-md 
            text-center text-[13.5px] font-medium
            flex items-center justify-center self-end
            h-fit min-w-fit
            hover:text-[15px] hover:cursor-pointer`}
          >
            Try It!
          </div>
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
