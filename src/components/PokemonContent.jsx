import React from "react";
import PokemonList from "./PokemonList";
import Footer from "./Footer";
import { GlobalContext } from "../contexts/GlobalContext";
import SearchPokemon from "./SearchPokemon";

const PokemonContent = () => {
  const { pokemonDetails, searchResults } = React.useContext(GlobalContext);

  return (
    <>
      {/* Sessão de pesquisa */}
      <SearchPokemon />

      {/* Lista de pokemons */}
      <PokemonList pokemonDetails={searchResults.length > 0 ? searchResults : pokemonDetails} />

      {/* Footer com paginção */}
      <Footer />
    </>
  );
};

export default PokemonContent;
