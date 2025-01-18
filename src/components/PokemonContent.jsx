import React from "react";
import PokemonList from "./PokemonList";
import Footer from "./Footer";
import SearchPokemon from "./SearchPokemon";
import { GlobalContext } from "../contexts/GlobalContext";

const PokemonContent = () => {
  const { total, page, handlePageChange } = React.useContext(GlobalContext);

  return (
    <>
      {/* Sessão de pesquisa */}
      <SearchPokemon />

      {/* Lista de pokemons */}
      <PokemonList />

      {/* Footer com paginação */}
      <Footer total={total} page={page} onPageChange={handlePageChange} />
    </>
  );
};

export default PokemonContent;
