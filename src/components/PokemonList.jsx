import React from "react";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
  return (
    <main className="flex justify-center mt-28 ">
      <section className="w-[1140px]">
        <header>
          <p>Total: 150 Pokémons</p>
        </header>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
        </div>
      </section>
    </main>
  );
};

export default PokemonList;
