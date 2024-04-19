import { BetterIDEa, Header, InfoStatic, Tabs, TutRender } from "./_components";

export default function Home() {
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
        <section className="w-[50%] flex flex-col px-6 py-6 min-h-fit">
          <InfoStatic />
          <Tabs />
          <TutRender />
        </section>
        <section className="w-[50%]">
          <BetterIDEa />
        </section>
      </div>
    </main>
  );
}
