import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="top-0 px-2 w-full z-50 backdrop-blur-md">
        <div className="flex items-center">
          <Image src="/logo.svg" width={100} height={100} alt="orbit 0rbit logo" />
        </div>
    </header>
  );
};

export default Header;
