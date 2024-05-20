import Image from "next/image";
import React from "react";
import {
  brandDarkText,
  brandLightText,
  brandSecondaryBg,
  brandSecondaryText,
} from "../_utils/colors";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Header = () => {
  return (
    <>
      <header className="text-center top-0 flex flex-row items-center justify-between sm:px-[36px] px-[12px] pt-3 w-full">
        <div className="flex flex-row gap-3 items-center">
          <Image
            src="/logos/recLight.svg"
            width={60}
            height={60}
            alt="orbit 0rbit logo"
            className="sm:w-[81px] sm:h-[54px] w-[60px] h-[45px]"
          />
          <h1
            className={`sm:text-[30px] text-[18px] ${brandDarkText} mb-[-9px] ${comfortaa.className}`}
          >
            playground
          </h1>
        </div>
        <div className="flex flex-row sm:gap-6 gap-[12px] items-center justify-center">
          <Link href="https://twitter.com/0rbitco">
            <FaTwitter
              className={`${brandDarkText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
            />
          </Link>
          <Link href="https://discord.gg/JVSjqaKJgV">
            <FaDiscord
              className={`${brandDarkText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
            />
          </Link>
          <Link href="https://github.com/0rbit-co">
            <TbBrandGithubFilled
              className={`${brandDarkText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
            />
          </Link>
        </div>
      </header>
      <div className={`${brandDarkText} lg:px-20 px-10 text-center  `}>
        <h2 className="text-[33px] font-medium leading-[36px] lg:block hidden">
          Checkout our <span className={`text-[#D16D1B]`}>AO playground</span>{" "}
          👀 by betterIDEa . You can use the code tutorials and test them on aos
          directly here. For more info, check out our{" "}
          <a
            href="https://docs.0rbit.co/"
            className={`${brandSecondaryBg} ${brandLightText} px-[12px] py-[1px] rounded-md text-[24px]
            hover:cursor-pointer hover:bg-[#ce7d3b] hover:underline`}
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
