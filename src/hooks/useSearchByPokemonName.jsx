import React from "react";
import useFetch from "./useFetch";

const apiUrl = import.meta.env.VITE_API_URL;

const useSearchByPokemonName = (idOrName) => {
  const [searchResults, setSearchResults] = React.useState([]);
  const { request, error } = useFetch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      try {
        if (!idOrName || isNaN(Number(idOrName))) {
          setSearchResults([]);
          return;
        }
        const { json } = await request(`${apiUrl}/pokemon/${idOrName}`);
        setSearchResults(json ? [json] : []);
      } catch (error) {
        setSearchResults([]);
      }
    };

    fetchPokemons();
  }, [request, idOrName]);

  return { searchResults, error };
};

export default useSearchByPokemonName;
