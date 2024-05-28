import { BetterIDEa, DropDown, Footer, Header, TutRender } from "./_components";
import ToolTip from "./_components/ToolTip";
import { brandDarkBg, brandDarkText, brandLightBg } from "./_utils/colors";

export default function Home() {
  return (
    <main
      className={`h-[100vh] min-w-[100vw] 
    ${brandLightBg} text-[#f1f1f1]
    flex flex-col items-center justify-between gap-[21px]`}
    >
      <Header />
      <div className="w-[96%] flex-row gap-9 justify-between lg:flex hidden max-w-[1800px]">
        <div className="w-1/2 flex flex-col justify-start gap-8">
          <div className="">
            <DropDown />
          </div>
          <div className={`${brandDarkBg} min-h-[90%] p-4 rounded-md`}>
            <TutRender />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start gap-8">
          <div className="">
            <ToolTip />
          </div>
          <div className={`${brandDarkBg} min-h-[90%] p-4 rounded-md`}>
            <BetterIDEa />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
