import React from "react";
import PokemonItem from "./PokemonItem";
import Pagination from "./Pagination";
import PokemonDetail from "./PokemonDetail";

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
        <Pagination />
      </section>
      <PokemonDetail />
    </main>
  );
};

export default PokemonList;
