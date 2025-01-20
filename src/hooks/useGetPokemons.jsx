import React from "react";
import useFetch from "./useFetch";

const apiUrl = import.meta.env.VITE_API_URL;

const useGetPokemons = (page, itemsPerPage) => {
  const [pokemons, setPokemons] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const { request } = useFetch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const offset = (page - 1) * itemsPerPage;
      const { json } = await request(`${apiUrl}/pokemon/?offset=${offset}&limit=${itemsPerPage}`);

      if (json && json.results) {
        setTotal(json.count);
        const detailedPokemons = await Promise.all(
          json.results.map(async (pokemon) => {
            const { json: details } = await request(pokemon.url);
            return details;
          })
        );
        setPokemons(detailedPokemons);
      }
    };

    fetchPokemons();
  }, [request, page, itemsPerPage]);

  return { pokemons, total };
};

export default useGetPokemons;
