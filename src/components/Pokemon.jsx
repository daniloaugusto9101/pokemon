import React from "react";
import PokemonList from "./PokemonList";
import Footer from "./Footer";
import { GlobalStorage } from "../contexts/GlobalContext";

const Pokemon = () => {
  return (
    <>
      <GlobalStorage>
        {/* Campo de pesquisa */}
        {/* <SearchPokemon /> */}

        {/* Lista de pokemons */}
        {/* <PokemonList pokemonDetails={searchResults.length > 0 ? searchResults : pokemonDetails} /> */}
        <PokemonList />

        {/* Footer com paginção */}
        <Footer />
      </GlobalStorage>
    </>
  );
};

export default Pokemon;
