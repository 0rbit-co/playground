"use client";
import { useTutorialStore } from "../_store/store";

const TypeButton = ({ btnName }: any) => {
  const setTut = useTutorialStore((state) => state.changeTutorial);
  const tutorialClickHandler = () => {
    switch (btnName) {
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
    // setTut({ btnName });
  };
  return (
    <h3
      onClick={tutorialClickHandler}
      className="bg-[#EB8F44] px-[12px] py-[6px] rounded-xl text-center
      hover:bg-[#eb8f447a] hover:cursor-pointer
      "
    >
      {btnName}
    </h3>
  );
};

export default TypeButton;
