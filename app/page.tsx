import { BetterIDEa, Header, InfoStatic, TutRender } from "./_components";
import DropDown from "./_components/DropDown";
import Footer from "./_components/Footer";
import { brandDarkBg, brandLightBg } from "./_utils/colors";

export default function Home() {
  return (
    <main
      className={`min-h-[100vh] max-h-[100vh] min-w-[100vw] 
    ${brandLightBg} text-[#f1f1f1]
    flex flex-col items-center justify-between gap-9 `}
    >
      <Header />
      <DropDown />
      <div className="w-full xl:px-[60px] px-[15px] flex-row gap-9 justify-center lg:flex hidden">
        <section
          className={`w-[45%] flex flex-col px-4 py-6 min-h-[100%] ${brandDarkBg} rounded-lg`}
        >
          <TutRender />
        </section>
        <section
          className={`w-[45%] min-h-[100%] p-1 ${brandDarkBg} rounded-md`}
        >
          <BetterIDEa />
        </section>
      </div>
      <Footer />
    </main>
  );
}
