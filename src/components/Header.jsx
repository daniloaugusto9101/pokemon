import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="shadow-md shadow-gray-300 flex justify-center">
      <section className="flex justify-between items-center py-10 w-[1140px]">
        <Logo />
        <a href="https://dev.pokemontcg.io/" target="_blank" className="text-gray-700">
          Documentação
        </a>
      </section>
    </header>
  );
};

export default Header;
