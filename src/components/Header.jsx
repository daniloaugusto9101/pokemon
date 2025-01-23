import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="shadow-md shadow-gray-300 flex justify-center">
      <section className="flex justify-center sm:justify-between items-center py-10 mx-5 w-[1140px] ">
        <Logo />
        <a href="https://dev.pokemontcg.io/" target="_blank" className="text-gray-700 hidden sm:block">
          Documentação
        </a>
      </section>
    </header>
  );
};

export default Header;
