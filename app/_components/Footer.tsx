import Link from "next/link";
import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import {
  brandDarkBg,
  brandDarkText,
  brandSecondaryBg,
  brandSecondaryText,
} from "../_utils/colors";

const Footer = () => {
  return (
    <footer
      className={`flex flex-row items-center justify-between ${brandDarkBg} w-full py-[12px] sm:px-20 px-[12px]`}
    >
      <h3
        className={`${brandSecondaryText} font-bold sm:text-[18px] text-[12px]`}
      >
        &copy; 2024 0rbit
      </h3>
      <div className="flex flex-row sm:gap-6 gap-[12px] items-center justify-center">
        <Link href="https://twitter.com/0rbitco">
          <FaTwitter
            className={`${brandSecondaryText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
          />
        </Link>
        <Link href="https://discord.gg/JVSjqaKJgV">
          <FaDiscord
            className={`${brandSecondaryText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
          />
        </Link>
        <Link href="https://github.com/0rbit-co">
          <TbBrandGithubFilled
            className={`${brandSecondaryText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
