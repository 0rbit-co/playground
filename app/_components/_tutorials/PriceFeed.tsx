import React from "react";
import { PrismLoader } from "../";
import { useCodeStore } from "@/app/_store/store";
import CodeBlock from "./CodeBlock";
import { brandSecondaryBg, brandSecondaryText } from "@/app/_utils/colors";

const PriceFeed = () => {
  const step1 =
    'local json = require("json")\n\n_0RBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"\n_0RBT_TOKEN = "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"\n\nBASE_URL = "https://api.coingecko.com/api/v3/simple/price"\nFEE_AMOUNT = "1000000000000" -- 1 $0RBT';

  const step2 =
    'TOKEN_PRICES = TOKEN_PRICES or {\n\tBTC = {\n\t\tcoingecko_id = "bitcoin",\n\t\tprice = 0,\n\t\tlast_update_timestamp = 0\n\t},\n\tETH = {\n\t\tcoingecko_id = "ethereum",\n\t\tprice = 0,\n\t\tlast_update_timestamp = 0\n\t},\n\tSOL = {\n\t\tcoingecko_id = "solana",\n\t\tprice = 0,\n\t\tlast_update_timestamp = 0\n\t}\n}\nID_TOKEN = ID_TOKEN or {\n\tbitcoin = "BTC",\n\tethereum = "ETH",\n\tsolana = "SOL"\n}\nLOGS = LOGS or {}';
  const step31 =
    'Handlers.add(\n\t"GetTokenPrice",\n\tHandlers.utils.hasMatchingTag("Action", "Get-Token-Price"), \n\tfunction(msg)\n\t\tlocal token = msg.Tags.Token\n\t\tlocal price = TOKEN_PRICES[token].price\n\t\tif price == 0 then\n\t\t\tHandlers.utils.reply("Price not available!!!")(msg)\n\t\telse\n\t\t\tHandlers.utils.reply(tostring(price))(msg)\n\t\tend\n\tend\n)';
  const step32 =
    '\nHandlers.add(\n\t"FetchPrice",\n\tHandlers.utils.hasMatchingTag("Action", "Fetch-Price"),\n\tfunction()\n\t\tlocal url;\n\t\tlocal token_ids;\n\t\tfor _, v in pairs(TOKEN_PRICES) do\n\t\t\ttoken_ids = token_ids .. v.coingecko_id .. ","\n\t\tend\n\t\turl = BASE_URL .. "?ids=" .. token_ids .. "&vs_currencies=usd"\n\t\tSend({\n\t\t\tTarget = _0RBT_TOKEN,\n\t\t\tAction = "Transfer",\n\t\t\tRecipient = _0RBIT,\n\t\t\tQuantity = FEE_AMOUNT,\n\t\t\t["X-Url"] = url,\n\t\t\t["X-Action"] = "Get-Real-Data"\n\t\t})\n\t\tprint(Colors.green .. "GET Request sent to the 0rbit process.")\n\tend\n)';
  const step33 =
    'Handlers.add(\n\t"ReceiveData",\n\tHandlers.utils.hasMatchingTag("Action", "Receive-Response"), \n\tfunction(msg)\n\t\tlocal res = json.decode(msg.Data)\n\t\tfor k, v in pairs(res) do\n\t\t\tTOKEN_PRICES[ID_TOKEN[k]].price = tonumber(v.usd)\n\t\t\tTOKEN_PRICES[ID_TOKEN[k]].last_update_timestamp = msg.Timestamp\n\t\tend\n\tend\n)';
  const step4 =
    'Send({Target="cxhbOnMAS-OPoETj9BetZ-KA3zZ9AWYMrkbKd9WRJ3k", Action="Get-Drop"})';
  const step5 = 'Send({ Target = ao.id, Action="Fetch-Price"})';
  const step6 =
    'Send({ Target = ao.id, Action="Get-Token-Price", Tags = { Token = "BTC" }})';
  const setCurCode = useCodeStore((state) => state.changeCode);
  const tryItHandler = (code: any) => {
    console.log(code);
    setCurCode(code);
  };
  return (
    <div className="max-h-[42vh] overflow-scroll min-w-full flex flex-col gap-6">
      {" "}
      {/* step1 */}
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
        <div className="flex flex-col items-center justify-center gap-[6px] min-w-full">
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
      {/* step2 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 2: Token Prices, Requested Tokens and Logging
          Initialization
        </h4>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step2} />
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
      </div>
      {/* step3 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 3: Create Handlers
        </h4>
        {/* step 31 */}
        <p className="text-[13.5px] leading-3 font-medium">
          Get Token Price Handler
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step31} />
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
        <p className={`text-[15px] ${brandSecondaryText}`}>
          The{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            GetTokenPrice
          </span>{" "}
          handler returns the token's price from the{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            TOKEN_PRICES
          </span>{" "}
          table and is called when a process wants to get the latest price of a
          token.
        </p>
        {/* step32 */}
        <p className="text-[13.5px] leading-3 font-medium mt-5">
          Fetch Price Handler
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
        <p className={`text-[15px] ${brandSecondaryText}`}>
          The{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            FetchPrice
          </span>{" "}
          handler fetches the token's price from the CoinGecko API using{" "}
          <span className="font-[Regular] text-[13.5px]">0rbit's</span>{" "}
          Get-Real-Data handler and updates the token prices in the{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            TOKEN_PRICES
          </span>{" "}
          table.
        </p>
        {/* step33 */}
        <p className="text-[13.5px] leading-3 font-medium mt-5">
          Receive Data Handler
        </p>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step33} />
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step33);
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
          The{" "}
          <span
            className={`text-[13.5px] font-[Regular] bg-[#5A5A5A] rounded-md px-[3px] py-[1.5px] text-[#f1f1f1]`}
          >
            ReceiveData
          </span>{" "}
          handler is called when the{" "}
          <span className="font-[Regular] text-[13.5px]">0rbit</span> process
          sends the fetched data to the process.
        </p>
      </div>
      {/* step4 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 4: Fund your process
        </h4>
        <p className={`text-[15px] ${brandSecondaryText}`}>
          Transfer some{" "}
          <span className="font-[Regular] text-[13.5px]">$0RBT</span> to your
          processID OR get a drop of{" "}
          <span className="font-[Regular] text-[13.5px]">10 $0RBT</span> using
          the following command:
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
      {/* step5 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 5: Fetch the Token Prices
        </h4>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step5} />
          <div
            onClick={() => {
              tryItHandler(step5);
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
      {/* step6 */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 6: Check the Token Price
        </h4>
        <div className="flex flex-col items-center gap-[6px] min-w-full">
          <CodeBlock step={step6} />
          <div
            onClick={() => {
              tryItHandler(step6);
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
    </div>
  );
};

export default PriceFeed;
