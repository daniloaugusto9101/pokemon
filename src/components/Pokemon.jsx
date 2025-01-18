import React from "react";
import SearchPokemon from "./SearchPokemon";
import PokemonList from "./PokemonList";
import useGetPokemons from "../hooks/useGetPokemons";
import useSearchByPokemonName from "../hooks/useSearchByPokemonName";

const Pokemon = () => {
  const [pokemonDetails, setPokemonDetails] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState(null);

  //Recupera o resultado da pesquisa
  const searchResults = useSearchByPokemonName(searchQuery);

  //Recupera os pokemons
  const pokemons = useGetPokemons();

  React.useEffect(() => {
    setPokemonDetails(pokemons);
  }, [pokemons]);

  // Recupera texto digitado no campo de pesquisa
  function handleOnSearch(pokemonName) {
    // console.log(pokemonName);
    setSearchQuery(pokemonName);
  }

  return (
    <>
      {/* Campo de pesquisa */}
      <SearchPokemon onSearch={handleOnSearch} />

      {/* Lista de pokemons */}
      <PokemonList pokemonDetails={searchResults.length > 0 ? searchResults : pokemonDetails} />
    </>
  );
};

export default Pokemon;
