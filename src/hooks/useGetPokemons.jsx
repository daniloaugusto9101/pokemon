import React from "react";
import PokemonsService from "../api/PokemonsService";

const useGetPokemons = () => {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    PokemonsService.getPokemons().then(({ data }) => setPokemons(data.results));
  }, []);

  return pokemons;
};

export default useGetPokemons;
