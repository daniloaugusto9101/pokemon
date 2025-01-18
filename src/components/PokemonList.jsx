import React from "react";
import PokemonItem from "./PokemonItem";
import { GlobalContext } from "../contexts/GlobalContext";

const PokemonList = () => {
  const { pokemonDetails } = React.useContext(GlobalContext);
  if (pokemonDetails) {
    return (
      <main className="flex justify-center mt-28 ">
        <section className="w-[1140px]">
          <header>
            <p>Total: Pokémons</p>
          </header>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {pokemonDetails.map((pokemon) => {
              return <PokemonItem key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
        </section>
      </main>
    );
  } else {
    return null;
  }
};

export default PokemonList;
