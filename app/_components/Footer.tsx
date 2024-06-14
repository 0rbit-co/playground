"use client";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { brandDarkBg, brandSecondaryText } from "../_utils/colors";

const event = ({
  action,
  category,
  label,
}: {
  action: string;
  category: string;
  label: string;
}) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};

const Footer = () => {
  return (
    <footer
      className={`${brandDarkBg} w-full flex items-center justify-center`}
    >
      <section className="flex flex-row items-center justify-between py-[12px] sm:px-20 px-[12px] max-w-[1800px] w-full">
        <h3
          className={`${brandSecondaryText} sm:text-[18px] text-[12px] font-[Regular]`}
        >
          &copy; 2024 <span className="">0rbit</span>
        </h3>
        <div className="flex flex-row sm:gap-6 gap-[12px] items-center justify-center">
          <Link
            href="https://twitter.com/0rbitco"
            onClick={() =>
              event({
                action: "click_social_link",
                category: "Footer",
                label: "Twitter",
              })
            }
          >
            <FaTwitter
              className={`${brandSecondaryText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
            />
          </Link>
          <Link
            href="https://discord.gg/JVSjqaKJgV"
            onClick={() =>
              event({
                action: "click_social_link",
                category: "Footer",
                label: "Discord",
              })
            }
          >
            <FaDiscord
              className={`${brandSecondaryText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
            />
          </Link>
          <Link
            href="https://github.com/0rbit-co"
            onClick={() =>
              event({
                action: "click_social_link",
                category: "Footer",
                label: "Github",
              })
            }
          >
            <TbBrandGithubFilled
              className={`${brandSecondaryText} hover:opacity-75 md:w-6 md:h-6 w-[15px] h-[15px]`}
            />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;