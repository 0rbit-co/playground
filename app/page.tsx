import { BetterIDEa, Header, InfoStatic, TutRender } from "./_components";
import DropDown from "./_components/DropDown";
import Footer from "./_components/Footer";
import { brandDarkBg, brandDarkText, brandLightBg } from "./_utils/colors";

export default function Home() {
  return (
    <main
      className={`min-h-[100vh] max-h-[100vh] min-w-[100vw] 
    ${brandLightBg} text-[#f1f1f1]
    flex flex-col items-center justify-between gap-9`}
    >
      <Header />
      <DropDown />
      <div className="w-full xl:px-20 px-[15px] flex-row gap-9 justify-between lg:flex hidden">
        <section
          className={`w-[48%] flex flex-col px-4 py-6 min-h-[100%] ${brandDarkBg} rounded-lg`}
        >
          <TutRender />
        </section>
        <section
          className={`w-[48%] min-h-[100%] p-1 ${brandDarkBg} rounded-md`}
        >
          <BetterIDEa />
        </section>
      </div>
      <p
        className={`w-full text-right font-light text-[18px]
      my-[-21px] px-20 ${brandDarkText} lg:block hidden`}
      >
        Powered by betterIdeA
      </p>
      <Footer />
    </main>
  );
}
