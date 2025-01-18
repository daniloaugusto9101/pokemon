import React from "react";
import useGetPokemons from "../hooks/useGetPokemons";
import useSearchByPokemonName from "../hooks/useSearchByPokemonName";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [pokemonDetails, setPokemonDetails] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState(null);

  //Recupera os Pokémons
  const pokemons = useGetPokemons();

  //Recupera o resultado da API feita pela pesquisa
  const searchResults = useSearchByPokemonName(searchQuery) || [];

  React.useEffect(() => {
    setPokemonDetails(pokemons);
  }, [pokemons]);

  // Recupera texto digitado no campo de pesquisa
  function handleOnSearch(pokemonName) {
    console.log(pokemonName);
    setSearchQuery(pokemonName);
  }

  return <GlobalContext.Provider value={{ pokemonDetails, searchResults, handleOnSearch }}>{children}</GlobalContext.Provider>;
};
