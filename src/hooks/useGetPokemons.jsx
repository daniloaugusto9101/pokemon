import React from "react";
import PokemonsService from "../api/PokemonsService";
import useFetch from "./useFetch";

const useGetPokemons = (page, itemsPerPage) => {
  const [pokemons, setPokemons] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const { request } = useFetch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const offset = (page - 1) * itemsPerPage;
      const { data } = await PokemonsService.getPokemons(itemsPerPage, offset);

      if (data && data.results) {
        setTotal(data.count);
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
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
