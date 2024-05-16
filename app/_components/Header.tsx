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
      <header className="text-center top-0 flex flex-row items-center justify-between px-[36px] pt-3 w-full">
        <div className="flex flex-row gap-3 items-center">
          <Image
            src="/logos/recLight.svg"
            width={60}
            height={60}
            alt="orbit 0rbit logo"
            className="w-[81px] h-[54px]"
          />
          <h1
            className={`text-[30px] ${brandDarkText} mb-[-9px] ${comfortaa.className}`}
          >
            playground
          </h1>
        </div>
        <div className="flex flex-row gap-6 items-center justify-center">
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
      <div className={`${brandDarkText} px-20 text-center`}>
        <h2 className="text-[33px] font-medium leading-[36px]">
          Checkout our <span className={`text-[#D16D1B]`}>AO playground</span>{" "}
          👀 by betterIDEa . You can use the code tutorials and test them on aos
          directly here. For more info, check out our{" "}
          <span
            className={`${brandSecondaryBg} ${brandLightText} px-[12px] py-[1px] rounded-md text-[24px]`}
          >
            Docs
          </span>
        </h2>
      </div>
    </>
  );
};

export default Header;
