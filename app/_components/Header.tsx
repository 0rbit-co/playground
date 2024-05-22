import Image from "next/image";
import {
  brandDarkBorder,
  brandDarkText,
  brandLightText,
  brandSecondaryBg,
} from "../_utils/colors";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Header = () => {
  return (
    <>
      <header className="max-w-[1800px] text-center top-0 flex flex-row items-center lg:justify-between justify-center sm:px-[36px] px-[12px] pt-3 w-full">
        <div className="flex flex-row gap-3 items-center">
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
        <h2 className="text-[33px] font-medium leading-[36px] lg:block hidden">
          Checkout our <span className={`text-[#D16D1B]`}>AO playground</span>{" "}
          👀. You can use the code tutorials and test them on aos directly here.
          For more info, check out our{" "}
          <a
            href="https://docs.0rbit.co/"
            className={`${brandSecondaryBg} ${brandLightText} px-[12px] py-[1px] rounded-md text-[24px]
            hover:cursor-pointer hover:bg-[#ce7d3b] hover:underline shadow-[0.9px_0.9px_3px_0px_#25291C] hover:shadow-none`}
          >
            Docs
          </a>
        </h2>
        <h2 className="lg:hidden block text-[24px] font-medium leading-[36px]">
          {" "}
          <span className={`text-[#D16D1B]`}>Playground</span> is supported in
          Desktop view only.
        </h2>
      </div>
    </>
  );
};

export default Header;
