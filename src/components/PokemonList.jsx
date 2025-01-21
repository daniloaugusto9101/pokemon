import React from "react";
import PokemonItem from "./PokemonItem";
import { TbPokeball } from "react-icons/tb";
import { GlobalContext } from "../contexts/GlobalContext";
import ErrorMessage from "./ErrorMessage";

const PokemonList = () => {
  const { pokemonDetails, total, combinedError, combinedLoading } = React.useContext(GlobalContext);

  if (combinedError) return <ErrorMessage title="ERRO! Lista de Pokemons" message="Ocorreu um erro ao tentar repurar a lista de cards dos Pokémons" />;
  if (pokemonDetails) {
    return (
      <main className="flex justify-center mt-14 ">
        <section className="w-[1140px]  mx-5">
          <header>
            <p className="flex items-center justify-center sm:justify-start text-lg text-gray-600 gap-2">
              <TbPokeball className="text-xl " /> Total: {total} Pokémons
            </p>
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
