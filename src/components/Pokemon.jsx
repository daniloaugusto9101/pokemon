import React from "react";
import SearchPokemon from "./SearchPokemon";
import PokemonList from "./PokemonList";
import useGetPokemons from "../hooks/useGetPokemons";

const Pokemon = () => {
  const [pokemonDetails, setPokemonDetails] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const searchResults = [];

  //Recupera os pokemons
  const pokemons = useGetPokemons();
  console.log("Aqui: ", pokemonDetails);

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
      <SearchPokemon onSearch={handleOnSearch} /> {/* Campo de pesquisa */}
      <PokemonList pokemonDetails={searchResults.length > 0 ? searchResults : pokemonDetails} /> {/* Lista de pokemons */}
    </>
  );
};

export default Pokemon;
