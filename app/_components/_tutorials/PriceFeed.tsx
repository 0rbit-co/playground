import React from "react";
import { PrismLoader } from "../";
import { useCodeStore } from "@/app/_store/store";

const PriceFeed = () => {
  // const step1 =
  //   'local json = require("json")\n_0RBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"\nBASE_URL = "https://api.coingecko.com/api/v3/simple/price"';
  const step1 =
    'local json = require("json")\n\n_0RBIT = "WSXUI2JjYUldJ7CKq9wE1MGwXs-ldzlUlHOQszwQe0s"\n\nBASE_URL = "https://api.coingecko.com/api/v3/simple/price"\n\nReceivedData = ReceivedData or {}';

  const step2 =
    'TOKEN_PRICES = TOKEN_PRICES or {\n\tBTC = {\n\t\tcoingecko_id = "bitcoin",\n\t\tprice = 0,\n\t\tlast_update_timestamp = 0\n\t},\n\tETH = {\n\t\tcoingecko_id = "ethereum",\n\t\tprice = 0,\n\t\tlast_update_timestamp = 0\n\t},\n\tSOL = {\n\t\tcoingecko_id = "solana",\n\t\tprice = 0,\n\t\tlast_update_timestamp = 0\n\t}\n}\nID_TOKEN = ID_TOKEN or {\n\tbitcoin = "BTC",\n\tethereum = "ETH",\n\tsolana = "SOL"\n}\nLOGS = LOGS or {}';
  // const step3 =
  // '"Handlers.add(\n\t"AddToken",\n\tHandlers.utils.hasMatchingTag("Action", "Add-Token"),\n\tfunction(msg)\n\t\tif msg.From == ao.id then\n\t\t\tlocal token = msg.Tags.Token\n\t\t\tlocal coingecko_id = msg.Tags.CoingeckoId\n \n\t\t\tif not TOKEN_PRICES[token] then\n\t\t\t\tTOKEN_PRICES[token].price = 0\n\t\t\t\tTOKEN_PRICES[token].coingecko_id = coingecko_id\n\t\t\t\tao.send({\n\t\t\t\t\tTarget = msg.From,\n\t\t\t\t\tTags = {\n\t\t\t\t\t\tAction = "Add Token Success",\n\t\t\t\t\t\t["Message-Id"] = msg.Id,\n\t\t\t\t\t\tToken = token\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\telse\n\t\t\t\tao.send({\n\t\t\t\t\tTarget = msg.From,\n\t\t\t\t\tTags = {\n\t\t\t\t\t\tAction = "Add Token Error",\n\t\t\t\t\t\t["Message-Id"] = msg.Id,\n\t\t\t\t\t\tError = "Token already exists"\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\tend\n \n\t\t\t-- For Debugging\n\t\t\ttable.insert(\n\t\t\t\tLOGS,\n\t\t\t\t{\n\t\t\t\t\tFrom = msg.From,\n\t\t\t\t\tTag = "Add-Token",\n\t\t\t\t\tData = {\n\t\t\t\t\t\tToken = token,\n\t\t\t\t\t\tMessage = "Success"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t)\n\t\telse\n\t\t\tao.send({\n\t\t\t\tTarget = msg.From,\n\t\t\t\tTags = {\n\t\t\t\t\tAction = "Add Token Error",\n\t\t\t\t\t["Message-Id"] = msg.Id,\n\t\t\t\t\tError = "Only the Process Owner can add tokens"\n\t\t\t\t}\n\t\t\t})\n \n\t\t\t-- For Debugging\n\t\t\ttable.insert(\n\t\t\t\tLOGS,\n\t\t\t\t{\n\t\t\t\t\tFrom = msg.From,\n\t\t\t\t\tTag = "Add-Token",\n\t\t\t\t\tData = {\n\t\t\t\t\t\tMessage = "Not Owner"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t)\n\t\tend\n\tend\n)"';
  const step31 =
    'Handlers.add(\n\t"GetTokenPrice",\n\tHandlers.utils.hasMatchingTag("Action", "Get-Token-Price"), \n\tfunction(msg)\n\t\tlocal token = msg.Tags.Token\n\t\tlocal price = TOKEN_PRICES[token].price\n\t\tif price == 0 then\n\t\t\tHandlers.utils.reply("Price not available!!!")(msg)\n\t\telse\n\t\t\tHandlers.utils.reply(tostring(price))(msg)\n\t\tend\n\tend\n)';
  const step32 =
    '\nHandlers.add(\n\t"CronTick",\n\tHandlers.utils.hasMatchingTag("Action", "Cron"),\n\tfunction()\n\t\tlocal url;\n\t\tlocal token_ids;\n\t\tfor _, v in pairs(TOKEN_PRICES) do\n\t\t\ttoken_ids = token_ids .. v.coingecko_id .. ","\n\t\tend\n\t\turl = BASE_URL .. "?ids=" .. token_ids .. "&vs_currencies=usd"\n\t\tSend({\n\t\t\tTarget = _0RBT_TOKEN,\n\t\t\tAction = "Transfer",\n\t\t\tRecipient = _0RBIT,\n\t\t\tQuantity = FEE_AMOUNT,\n\t\t\t["X-Url"] = url,\n\t\t\t["X-Action"] = "Get-Real-Data"\n\t\t})\n\t\tprint(Colors.green .. "GET Request sent to the 0rbit process.")\n\tend\n)';
  const step33 =
    'Handlers.add(\n\t"ReceiveData",\n\tHandlers.utils.hasMatchingTag("Action", "Receive-Data-Feed"), \n\tfunction(msg)\n\t\tlocal res = json.decode(msg.Data)\n\t\tfor k, v in pairs(res) do\n\t\t\tTOKEN_PRICES[ID_TOKEN[k]].price = tonumber(v.usd)\n\t\t\tTOKEN_PRICES[ID_TOKEN[k]].last_update_timestamp = msg.Timestamp\n\t\tend\n\tend\n)';
  const step4 =
    'Send({ Target = ao.id, Action="Get-Token-Price", Tags = { Token = "BTC" }})';
  const setCurCode = useCodeStore((state) => state.changeCode);
  const tryItHandler = (code: any) => {
    console.log(code);
    setCurCode(code);
  };
  return (
    <div className="max-h-[48vh] overflow-scroll min-w-full flex flex-col gap-6">
      {" "}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {" "}
          {">"} Step 1: Create variables!
        </h4>
        <p className="text-[12px]">
          (for 0rbit's Process Id, api URL and to store incoming Data)
        </p>
        <div className="flex flex-row items-center justify-center gap-3 min-w-full">
          <pre className="language-js flex flex-row justify-between items-center !bg-[#61625F]">
            <code className="language-js">{step1}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              tryItHandler(step1);
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
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 2: Token Prices, Requested Tokens and Logging
          Initialization
        </h4>
        <div className="flex flex-row items-center gap-3 min-w-full">
          <pre className="language-lua w-full !bg-[#61625F]">
            <code className="language-lua">{step2}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step2);
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
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 2: Token Addition Handler
        </h4>
        <div className="flex flex-row items-center gap-3 min-w-full">
          <pre className="language-lua w-full !bg-[#61625F]">
            <code className="language-lua">{step31}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step31);
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
        <div className="flex flex-row items-center gap-3 min-w-full">
          <pre className="language-lua w-full !bg-[#61625F]">
            <code className="language-lua">{step32}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step32);
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
        <div className="flex flex-row items-center gap-3 min-w-full">
          <pre className="language-lua w-full !bg-[#61625F]">
            <code className="language-lua">{step33}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              // setCode(assignVar);
              tryItHandler(step33);
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
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[18px]">
          {"> "}Step 4: Check the Token Price
        </h4>
        <div className="flex flex-row items-center gap-3 min-w-full">
          <pre className="language-lua w-full !bg-[#61625F]">
            <code className="language-lua">{step4}</code>
            <PrismLoader />
          </pre>
          <div
            onClick={() => {
              tryItHandler(step4);
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
      </div>
      <h6 className="mb-6">
        This will create a Get request and send it to the 0rbit's GET ao
        process.
      </h6>
    </div>
  );
};

export default PriceFeed;
