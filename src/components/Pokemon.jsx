import React from "react";
import PokemonList from "./PokemonList";
import Footer from "./Footer";
import { GlobalContext } from "../contexts/GlobalContext";

const Pokemon = () => {
  const { pokemonDetails, searchResults, handleOnSearch } = React.useContext(GlobalContext);

  return (
    <>
      {/* Sessão de pesquisa */}
      {/* <SearchPokemon onSearch={handleOnSearch} /> */}

      {/* Lista de pokemons */}
      <PokemonList pokemonDetails={searchResults.length > 0 ? searchResults : pokemonDetails} />

      {/* Footer com paginção */}
      <Footer />
    </>
  );
};

export default Pokemon;
