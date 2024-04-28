"use client";
import { useTutorialStore } from "../_store/store";

const TypeButton = ({ btnName }: any) => {
  const setTut = useTutorialStore((state) => state.changeTutorial);
  const tutorialClickHandler = () => {
    switch (btnName) {
      case "GET Request":
        console.log("get");
        setTut("get");
        break;
      case "POST Request":
        console.log("post");
        setTut("post");
        break;
      case "Pricefeed":
        console.log("pf");
        setTut("pf");
        break;
      case "Newsfeed":
        console.log("nf");
        setTut("nf");
        break;
      default:
        break;
    }
    // setTut({ btnName });
  };
  return (
    <h3
      onClick={tutorialClickHandler}
      className="bg-[#EB8F44] text-blackOlive px-[12px] py-[6px] w-36 rounded-xl text-center
      hover:bg-[#eb8f447a] hover:cursor-pointer
      "
    >
      {btnName}
    </h3>
  );
};

export default TypeButton;
