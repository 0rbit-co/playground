import { BetterIDEa, DropDown, Footer, Header, TutRender } from "./_components";
import { brandDarkBg, brandDarkText, brandLightBg } from "./_utils/colors";

export default function Home() {
  return (
    <main
      className={`h-[100vh] min-w-[100vw] 
    ${brandLightBg} text-[#f1f1f1]
    flex flex-col items-center justify-between gap-[21px]`}
    >
      <Header />
      <div className="w-[86%] flex-row gap-9 justify-between lg:flex hidden max-w-[1800px]">
        <div className="w-1/2 flex flex-col justify-start gap-6">
          <div className="">
            <DropDown />
          </div>
          <div className={`${brandDarkBg} p-4 rounded-md`}>
            <TutRender />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start gap-6">
          <BetterIDEa />
        </div>
      </div>
      <div className="text-end w-full flex justify-end px-8 text-[#444444] text-lg font-light leading-tight">Powered by betterIdeA</div>
      <Footer />
    </main>
  );
}
