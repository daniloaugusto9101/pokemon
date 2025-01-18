import React from "react";
import PokemonsService from "../api/PokemonsService";
import useFetch from "./useFetch";

const useGetPokemons = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const { request } = useFetch();

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await PokemonsService.getPokemons();

      if (data && data.results) {
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
  }, [request]);

  return pokemons;
};

export default useGetPokemons;
