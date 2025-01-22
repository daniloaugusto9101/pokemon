import React from "react";
import useGetPokemons from "../hooks/useGetPokemons";
import useSearchByPokemonName from "../hooks/useSearchByPokemonName";
import { validateSearch } from "../utils/stringUtils";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [pokemonDetails, setPokemonDetails] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 20;

  // Recupera os Pokémons
  const { pokemons, total, error: fetchError } = useGetPokemons(page, itemsPerPage);

  // Recupera o resultado da API feita pela pesquisa
  const { searchResults, error: searchError } = useSearchByPokemonName(searchQuery);

  // Define o estado de pokemonDetails com base no resultado da pesquisa
  React.useEffect(() => {
    setPokemonDetails(searchResults.length > 0 ? searchResults : pokemons);
  }, [searchResults, pokemons]);

  // Recupera texto digitado no campo de pesquisa
  function handleOnSearch(pokemonName) {
    const str = validateSearch(pokemonName);
    setSearchQuery(str);
  }

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Combine os erros e loading para exibição
  const combinedError = searchError || fetchError;

  return <GlobalContext.Provider value={{ pokemonDetails, handleOnSearch, total, page, handlePageChange, combinedError }}>{children}</GlobalContext.Provider>;
};
