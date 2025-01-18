import React from "react";
import PokemonsService from "../api/PokemonsService";

const useSearchByPokemonName = (idOrName) => {
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    if (!idOrName) {
      setSearchResults([]);
      return;
    }
    PokemonsService.searchByPokemonName(idOrName).then(({ data }) => {
      setSearchResults([data]);
    });
  }, [idOrName]);

  return searchResults;
};

export default useSearchByPokemonName;
