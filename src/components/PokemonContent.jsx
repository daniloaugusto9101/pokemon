import React from "react";
import PokemonList from "./PokemonList";
import Footer from "./Footer";
import SearchPokemon from "./SearchPokemon";

const PokemonContent = () => {
  return (
    <>
      {/* Sessão de pesquisa */}
      <SearchPokemon />

      {/* Lista de pokemons */}
      <PokemonList />

      {/* Footer com paginção */}
      <Footer />
    </>
  );
};

export default PokemonContent;
