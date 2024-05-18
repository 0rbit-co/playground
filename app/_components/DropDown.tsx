"use client";
import { useState } from "react";
import { useTutorialStore } from "../_store/store";
import { brandDarkText, brandSecondaryBg } from "../_utils/colors";
import Image from "next/image";

const DropDown = () => {
  const currentTut = useTutorialStore((state) => state.curTutorial);
  const setTut = useTutorialStore((state) => state.changeTutorial);
  const [dropdown, setDropdown] = useState(false);
  const tutorialClickHandler = (tutName: any) => {
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
    <div className="h-[15px] w-full flex -center justify-start px-20">
      <ul
        onMouseEnter={() => {
          setDropdown(true);
        }}
        onMouseLeave={() => {
          setDropdown(false);
        }}
        className={` overflow-clip rounded-md w-[180px] fixed`}
      >
        <li
          className={`flex flex-row justify-between items-center hover:tracking-widest hover:cursor-pointer
        ${brandSecondaryBg} px-[12px] py-[6px]`}
        >
          {currentTut}
          <Image alt="dropdown" width={15} height={15} src="/ddArr.svg" />
        </li>
        {dropdown ? (
          <>
            {currentTut != "GET Request" ? (
              <li
                onClick={() => {
                  tutorialClickHandler("GET Request");
                }}
                className={`hover:tracking-widest hover:cursor-pointer ${brandSecondaryBg} ${brandDarkText} px-[12px] py-[6px] hover:bg-[#e8ab79]`}
              >
                GET Request
              </li>
            ) : (
              ""
            )}
            {currentTut != "Pricefeed" ? (
              <li
                onClick={() => {
                  tutorialClickHandler("Pricefeed");
                }}
                className={`hover:tracking-widest hover:cursor-pointer ${brandSecondaryBg} ${brandDarkText} px-[12px] py-[6px] hover:bg-[#e8ab79]`}
              >
                Pricefeed
              </li>
            ) : (
              ""
            )}
            {currentTut != "Newsfeed" ? (
              <li
                onClick={() => {
                  tutorialClickHandler("Newsfeed");
                }}
                className={`hover:tracking-widest hover:cursor-pointer ${brandSecondaryBg} ${brandDarkText} px-[12px] py-[6px] hover:bg-[#e8ab79]`}
              >
                Newsfeed
              </li>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default DropDown;
