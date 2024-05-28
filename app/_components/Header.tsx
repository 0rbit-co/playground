import Image from "next/image";
import {
  brandDarkBorder,
  brandDarkText,
  brandLightText,
  brandSecondaryBg,
} from "../_utils/colors";
import { Comfortaa } from "next/font/google";
import { GoArrowUpRight } from "react-icons/go";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Header = () => {
  return (
    <>
      <header className="max-w-[1800px] border-b-[1px] border-[#25291C]/40 text-center top-0 flex flex-row items-center lg:justify-between justify-center sm:px-20 px-[12px] py-1.5 w-full">
        <div className="">
          <a href="https://www.0rbit.co/" className="flex flex-row gap-3 items-center">
          <Image
            src="/logos/recLight.svg"
            width={60}
            height={60}
            alt="orbit 0rbit logo"
            className="sm:w-[81px] sm:h-[54px] w-[60px] h-[45px]"
          />
          <h1
            className={`sm:text-[30px] text-[18px] ${brandDarkText} lg:mb-[-15px] mb-[-9px] ${comfortaa.className}`}
          >
            playground
          </h1>
          </a>
        </div>
        <div className=" flex-row gap-3 lg:flex hidden">
          <a
            href="http://docs.0rbit.co"
            className={`rounded-lg px-[24px] py-[3px] ${brandDarkBorder} ${brandDarkText} border-[1px]
            hover:px-[21px] hover:tracking-widest hover:bg-[#d9decd]`}
          >
            Docs
          </a>
          <a
            href="https://mirror.xyz/0x26B11B188E9E69b2426FD6111302E721F423020E"
            className={`rounded-lg px-[24px] py-[3px] ${brandDarkBorder} ${brandDarkText} border-[1px]
            hover:px-[21px] hover:tracking-widest hover:bg-[#d9decd]`}
          >
            Blogs
          </a>
        </div>
      </header>
      <div
        className={`${brandDarkText} max-w-[1800px] lg:px-20 px-10 text-center  `}
      >
        <h2 className="text-[28px] leading-[36px] font-medium lg:block hidden text-[#25291C]">
          Test <span className="font-['Regular'] text-[#EB8F44]">0rbit</span> in
          your browser. You can use the code tutorials and test them directly
          here. <br />
          For more info, check out our{" "}
          <span className="inline-flex items-center">
            <a
              href="https://docs.0rbit.co/"
              className="text-[28px] text-[#EB8F44] underline"
            >
              Docs.
            </a>
            <GoArrowUpRight className="text-[#EB8F44]" />
          </span>
        </h2>
        <div className="lg:hidden flex flex-col gap-3 items-center justify-center">
          <Image
            src="/mobView.svg"
            height={150}
            width={300}
            alt="mob view"
            className="mt-[-30px]"
          />
          <h2 className=" sm:text-[24px] text-[18px] font-medium sm:leading-[36px] leading-[24px]">
            {" "}
            <span className={`text-[#D16D1B]`}>Playground</span> is supported in
            Desktop view only.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
