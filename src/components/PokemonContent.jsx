import React from "react";
import PokemonList from "./PokemonList";
import Footer from "./Footer";
import SearchPokemon from "./SearchPokemon";
import { GlobalStorage } from "../contexts/GlobalContext";

const PokemonContent = () => {
  return (
    <>
      <GlobalStorage>
        {/* Sessão de pesquisa */}
        <SearchPokemon />

        {/* Lista de pokemons */}
        <PokemonList />

        {/* Footer com paginação */}
        <Footer />
      </GlobalStorage>
    </>
  );
};

export default PokemonContent;
