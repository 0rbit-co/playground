import { BetterIDEa, Header, InfoStatic, Tabs, TutRender } from "./_components";

export default function Home() {
  return (
    <main
      className=" 
    bg-[#E3E7D3] text-[#f1f1f1]
    flex flex-col items-center justify-center p-10 py-5"
    >
      <Header />
      <div
        className="flex flex-row mt-[54px]
      bg-[#272a1c] rounded-xl w-[100%] h-screen
      border-[1px] border-[#000000] 
      "
      >
        <section className="w-[50%] flex flex-col px-6 py-6 min-h-fit">
          <InfoStatic />
          <Tabs />
          <TutRender />
        </section>
        <div className="w-[1px] bg-beige"></div>
        <section className="w-[50%]">
          <BetterIDEa />
        </section>
      </div>
    </main>
  );
}
