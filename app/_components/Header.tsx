import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="text-center absolute top-0 flex flex-col items-center justify-center">
      <Image src="/logo.svg" width={120} height={90} alt="orbit 0rbit logo" />
      <h1 className="text-[30px] mt-[-15px] text-[#272a1c]">Playground</h1>
    </header>
  );
};

export default Header;
