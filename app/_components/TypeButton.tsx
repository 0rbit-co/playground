"use client";
import { useTutorialStore } from "../_store/store";

const TypeButton = ({ btnName }: any) => {
  const setTut = useTutorialStore((state) => state.changeTutorial);
  const tutorialClickHandler = () => {
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
