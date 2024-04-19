"use client";
import { useTutorialStore } from "./_store/store";
import {
  BetterIDEa,
  GETReq,
  Header,
  InfoStatic,
  POSTReq,
  TypeButton,
} from "./_components";
import { useEffect } from "react";

export default function Home() {
  const currentTut = useTutorialStore((state) => state.curTutorial);
  useEffect(() => {
    console.log(currentTut);
  }, [currentTut]);

  return (
    <main
      className="min-h-[100vh] min-w-[100vw] 
    bg-[#E3E7D3] text-[#f1f1f1]
    flex flex-col items-center justify-center px-[20px]"
    >
      <Header />
      <div
        className="flex flex-row mt-[54px]
      bg-[#272a1c] rounded-md w-[100%] max-h-[80vh]
      border-[1px] border-[#000000] 
      "
      >
        <section className="w-[50%] flex flex-col px-6 py-3 min-h-fit">
          <InfoStatic />
          <div className="flex flex-row justify-between items-center gap-3">
            <TypeButton btnName="GET Request" />
            <TypeButton btnName="POST Request" />
            <TypeButton btnName="Pricefeed" />
            <TypeButton btnName="Newsfeed" />
          </div>
          <div className="bg-[#121212] px-9 py-6 my-6 rounded-xl min-h-fit">
            {/* {currentTut == "GET Request" ? <GETReq /> : <POSTReq />} */}
            {/* <GETReq /> */}
            <POSTReq />
          </div>
        </section>
        <section className="w-[50%]">
          <BetterIDEa />
        </section>
      </div>
    </main>
  );
}
