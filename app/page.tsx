import { BetterIDEa, Header, InfoStatic, TutRender } from "./_components";
import DropDown from "./_components/DropDown";
import { brandDarkBg, brandLightBg } from "./_utils/colors";

export default function Home() {
  return (
    <main
      className={`min-h-[100vh] min-w-[100vw] 
    ${brandLightBg} text-[#f1f1f1]
    flex flex-col items-center justify-center gap-12`}
    >
      <Header />
      <DropDown />
      <div className="w-full px-[60px] flex flex-row gap-3">
        <section
          className={`w-[50%] flex flex-col px-4 py-6 min-h-[100%] ${brandDarkBg} rounded-lg`}
        >
          <TutRender />
        </section>
        <section className="w-[50%] min-h-[100%]">
          <BetterIDEa />
        </section>
      </div>
      {/* <div
        className="flex flex-col min-h-[92vh]
      bg-[#272a1c] w-[100%] max-h-[84vh]
      border-[1px] border-[#000000] bottom-0

      "
      >
        <div className="w-full bg-[#1b1e13] text-center py-[3px] text-[18px] text-[#3b402b] font-[Thin]">
          {" "}
          SandBox to try 0rbit yourself, Powered by BetterIDEa!
        </div>
        <div className="flex flex-row min-h-[100%]">
          <section className="w-[50%] flex flex-col px-6 py-3 min-h-[100%]">
            <InfoStatic />
            <Tabs />
            <TutDropdown />
            <TutRender />
          </section>
          <section className="min-h-[100%] px-[1px] min-w-fit bg-[#000000]"></section>
          <section className="w-[50%] min-h-[100%]">
            <BetterIDEa />
          </section>
        </div>
      </div> */}
    </main>
  );
}
