import PrismLoader from "../PrismLoader";
import { useCodeStore } from "../../_store/store";
import CodeBlock from "./CodeBlock";
import {
  brandSecondaryBg,
  brandSecondaryBorder,
  brandSecondaryText,
} from "@/app/_utils/colors";
import Image from "next/image";

const GETReq = () => {
  const setCurCode = useCodeStore((state) => state.changeCode);
  const step1 =
    '_0RBIT = "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ"\n_0RBT_TOKEN = "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"\n\nBASE_URL = "https://dummyjson.com/products"\nFEE_AMOUNT = "1000000000000" -- 1 $0RBT\n\nReceivedData = ReceivedData or {}';
  const step21 =
    'Handlers.add(\n\t"Get-Request",\n\tHandlers.utils.hasMatchingTag("Action", "First-Get-Request"),\n\tfunction(msg)\n\t\tSend({\n\t\t\tTarget = _0RBT_TOKEN,\n\t\t\tAction = "Transfer",\n\t\t\tRecipient = _0RBIT,\n\t\t\tQuantity = FEE_AMOUNT,\n\t\t\t["X-Url"] = BASE_URL,\n\t\t\t["X-Action"] = "Get-Real-Data"\n\t\t})\n\t\tprint(Colors.green .. "You have sent a GET Request to the 0rbit process.")\n\tend\n)';
  const step22 =
    'local json = require("json")\n\nHandlers.add(\n\t"ReceiveData",\n\tHandlers.utils.hasMatchingTag("Action", "Receive-Response"),\n\tfunction(msg)\n\t\tlocal res = json.decode(msg.Data)\n\t\tReceivedData = res\n\t\tprint(Colors.green .. "You have received the data from the 0rbit process.")\n\tend\n)';
  const step0rbt =
    'Send({Target="BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc", Action="Balance"})';
  const checkInbox = "Inbox[#Inbox].Data";
  const step3 = 'Send({ Target= ao.id, Action="First-Get-Request" })';
  const step4 = "ReceivedData";
  const tryItHandler = (code: any) => {
    console.log(code);
    setCurCode(code);
  };
  return (
    <div className="max-h-[42vh] overflow-scroll min-w-full flex flex-col gap-6">
      {" "}
      <div
        className={`${brandSecondaryBorder} border-[1px] px-[12px] py-[3px] rounded-lg bg-[#eb8f4479]
        flex flex-row gap-2 text-[13.5px]`}
      >
        {/* <Image src="/warn.jpg" alt="" height={30} width={30} /> */}
        <h2>
          Make sure the Process ID displayed on the right has atleast 1{" "}
          <span className=" font-[Regular]">$0RBT</span>. You can swap{" "}
          <span className=" font-[Regular]">$0RBT</span> on{" "}
          <a
            href="https://app.permaswap.network/AOCRED-0RBT"
            className="underline hover:underline-offset-[3px]"
          >
            Permaswap here
          </a>
          . Learn how to add <span className=" font-[Regular]">$0RBT</span> to
          your wallet{" "}
          <a
            href="https://docs.0rbit.co/protocol/token/add-to-wallet"
            className="underline hover:underline-offset-[3px]"
          >
            here
          </a>
          .
        </h2>
      </div>
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
          <CodeBlock step={step21} />
          <div
            onClick={() => {
              tryItHandler(step21);
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
          <CodeBlock step={step22} />
          <div
            onClick={() => {
              tryItHandler(step22);
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
      {/* check */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 3: Fund your process
        </h4>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          Transfer some{" "}
          <span className="font-[Regular] text-[13.5px]">$0RBT</span> to your
          processID. You can check how much{" "}
          <span className="font-[Regular] text-[13.5px]">$0RBT</span> you have
          using the following command:
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step0rbt} />
          <div
            onClick={() => {
              tryItHandler(step0rbt);
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
          Wait a few seconds for the response and check your inbox using the
          below command to see your balance.
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={checkInbox} />
          <div
            onClick={() => {
              tryItHandler(checkInbox);
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
      {/* 4 Call Handler*/}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 4: Call the Handler
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
          <CodeBlock step={step3} />
          <div
            onClick={() => {
              tryItHandler(step3);
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
      {/* 5 Check Data */}
      <div>
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 5: Check the Data
        </h4>
        <p className="text-[12px]">
          Makes sure to wait atleast 6-9 seconds for the response to arrive.
        </p>
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
