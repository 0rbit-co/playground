"use client";
import { useState } from "react";
import { useTutorialStore } from "../_store/store";
import { brandDarkText, brandSecondaryBg } from "../_utils/colors";
import Image from "next/image";

const event = ({ action, category, label }: any) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};

const DropDown = () => {
  const currentTut = useTutorialStore((state) => state.curTutorial);
  const setTut = useTutorialStore((state) => state.changeTutorial);
  const [dropdown, setDropdown] = useState(false);

  const tutorialClickHandler = (tutName: any) => {
    event({
      action: "click_tutorial",
      category: "DropDown",
      label: tutName,
    });

    switch (tutName) {
      case "GET Request":
        console.log("GET Request");
        setTut("GET Request");
        break;
      case "POST Request":
        console.log("POST Request");
        setTut("POST Request");
        break;
      case "Pricefeed":
        console.log("Pricefeed");
        setTut("Pricefeed");
        break;
      case "Newsfeed":
        console.log("Newsfeed");
        setTut("Newsfeed");
        break;
      default:
        break;
    }
    setDropdown(false);
  };

  return (
    <div className="h-[33px] w-full justify-start px-4 mx-[-12px] lg:flex hidden max-w-[1800px]">
      <ul
        onMouseEnter={() => {
          setDropdown(true);
        }}
        onMouseLeave={() => {
          setDropdown(false);
        }}
        className={` overflow- rounded-md w-[180px] z-10`}
      >
        <li
          className={`flex flex-row justify-between items-center hover:cursor-pointer
          ${brandSecondaryBg} px-[12px] py-[6px] rounded-t-md ${
            dropdown ? "" : " rounded-b-md"
          }`}
        >
          {currentTut}
          <Image alt="dropdown" width={15} height={15} src="/ddArr.svg" />
        </li>
        {dropdown ? (
          <>
            {currentTut != "GET Request" && (
              <li
                onClick={() => tutorialClickHandler("GET Request")}
                className={`hover:cursor-pointer ${brandSecondaryBg} ${brandDarkText} px-[12px] py-[6px] hover:bg-[#e8ab79]`}
              >
                GET Request
              </li>
            )}
            {currentTut != "Pricefeed" && (
              <li
                onClick={() => tutorialClickHandler("Pricefeed")}
                className={`hover:cursor-pointer ${brandSecondaryBg} ${brandDarkText} text-white px-[12px] py-[6px] hover:bg-[#e8ab79]`}
              >
                Pricefeed
              </li>
            )}
            {currentTut != "Newsfeed" && (
              <li
                onClick={() => tutorialClickHandler("Newsfeed")}
                className={`hover:cursor-pointer ${brandSecondaryBg} ${brandDarkText} text-white px-[12px] py-[6px] hover:bg-[#e8ab79] rounded-b-md`}
              >
                Newsfeed
              </li>
            )}
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default DropDown;