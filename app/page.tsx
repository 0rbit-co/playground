import Image from "next/image";
import {
  BetterIDEa,
  GETReq,
  Header,
  InfoStatic,
  TypeButton,
} from "./_components";

export default function Home() {
  return (
    <main
      className="min-h-[100vh] min-w-[100vw] 
    bg-[#E3E7D3] 
    flex flex-col items-center justify-center px-[20px]"
    >
      <Header />
      <div
        className="flex flex-row  min-h-full
      bg-[#272a1c] rounded-md w-[100%]
      border-[1px] border-[#000000] 
 
      "
      >
        <section className="w-[50%] flex flex-col px-6 py-3">
          <InfoStatic />
          <div className="flex flex-row justify-between items-center gap-3">
            <TypeButton text="GET Request" />
            <TypeButton text="POST Request" />
            <TypeButton text="Pricefeed" />
            <TypeButton text="Newsfeed" />
          </div>
          <GETReq />
        </section>
        <section className="w-[50%]">
          <BetterIDEa />
        </section>
      </div>
    </main>
  );
}
