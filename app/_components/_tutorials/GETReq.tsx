import PrismLoader from "../PrismLoader";
import { useCodeStore } from "../../_store/store";
import CodeBlock from "./CodeBlock";
import { brandSecondaryBg, brandSecondaryText } from "@/app/_utils/colors";

const GETReq = () => {
  const setCurCode = useCodeStore((state) => state.changeCode);
  const step1 =
    'local json = require("json")\n\n_0RBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"\n_0RBT_TOKEN = "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"\n\nBASE_URL = "https://dummyjson.com/products"\nFEE_AMOUNT = "1000000000000" -- 1 $0RBT\n\nReceivedData = ReceivedData or {}';
  const step2 =
    'Handlers.add(\n\t"Get-Request",\n\tHandlers.utils.hasMatchingTag("Action", "First-Get-Request"),\n\tfunction(msg)\n\t\tSend({\n\t\t\tTarget = _0RBT_TOKEN,\n\t\t\tAction = "Transfer",\n\t\t\tRecipient = _0RBIT,\n\t\t\tQuantity = FEE_AMOUNT,\n\t\t\t["X-Url"] = BASE_URL,\n\t\t\t["X-Action"] = "Get-Real-Data"\n\t\t})\n\t\tprint(Colors.green .. "You have sent a GET Request to the 0rbit process.")\n\tend\n)';
  const step31 =
    'Handlers.add(\n\t"Receive-Data",\n\tHandlers.utils.hasMatchingTag("Action", "Receive-Response"),\n\tfunction(msg)\n\t\tlocal res = json.decode(msg.Data)\n\t\tReceivedData = res\n\t\tprint(Colors.green .. "You have received the data from the 0rbit process.")\n\tend\n)';
  const step32 = 'Send({ Target= ao.id, Action="First-Get-Request" })';
  const step4 = "ReceivedData";
  const tryItHandler = (code: any) => {
    console.log(code);
    setCurCode(code);
  };
  return (
    <div className="max-h-[42vh] overflow-scroll min-w-full flex flex-col gap-6">
      {" "}
      {/* 1 VARS */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {" "}
          {">"} Step 1: Create variables!
        </h4>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          For <span className="font-[Regular] text-[13.5px]">0rbit's</span>{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            Process Id
          </span>
          ,{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            api URL
          </span>{" "}
          and to store incoming Data
        </p>
        <div className="flex flex-col justify-center gap-[6px] min-w-full codeblock">
          <CodeBlock step={step1} />
          <div
            onClick={() => {
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
      {/* 2 HANDLERS */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 2: Create Handlers
        </h4>
        <p className="text-[13.5px] leading-3 font-medium">
          Get Request Handler
        </p>

        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step2} />
          <div
            onClick={() => {
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
        <p className={`text-[15px] ${brandSecondaryText}`}>
          Handler that will send{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            1 $0RBT
          </span>{" "}
          to the <span className="font-[Light]">0rbit</span> process and make
          the GET request for the{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            BASE_URL
          </span>
        </p>
        <p className="text-[13.5px] leading-3 font-medium mt-5">
          Receive Response Handler
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step31} />
          <div
            onClick={() => {
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
        <p className={`text-[15px] ${brandSecondaryText}`}>
          Handler that will receive the data from the{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            0rbit
          </span>{" "}
          process and print it.
        </p>
      </div>
      {/* 3 Call Handler*/}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 3: Call the Handler
        </h4>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          Call the handler, who will create a request for the{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            0rbit
          </span>{" "}
          process.
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step32} />
          <div
            onClick={() => {
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
        <p className="text-[12px]"></p>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          To check the data stored in the{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            ReceivedData
          </span>{" "}
          variable, run the following command:
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step4} />
          <div
            onClick={() => {
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
        For this particular example, the response from the{" "}
        <span className="font-[Regular] text-[13.5px]">0rbit</span> will be a
        number of products.
      </h6>
    </div>
  );
};

export default GETReq;
