import React from "react";
import useGetPokemons from "../hooks/useGetPokemons";
import useSearchByPokemonName from "../hooks/useSearchByPokemonName";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [pokemonDetails, setPokemonDetails] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 20;

  // Recupera os Pokémons
  const { pokemons, total } = useGetPokemons(page, itemsPerPage);

  // Recupera o resultado da API feita pela pesquisa
  const searchResults = useSearchByPokemonName(searchQuery);

  // Define o estado de pokemonDetails com base no resultado da pesquisa
  React.useEffect(() => {
    if (searchResults.length > 0) {
      setPokemonDetails(searchResults);
    } else {
      setPokemonDetails(pokemons);
    }
  }, [searchResults, pokemons]);

  // Recupera texto digitado no campo de pesquisa
  function handleOnSearch(pokemonName) {
    console.log("chegou aqui", pokemonName);
    setSearchQuery(pokemonName);
  }

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return <GlobalContext.Provider value={{ pokemonDetails, handleOnSearch, total, page, handlePageChange }}>{children}</GlobalContext.Provider>;
};
