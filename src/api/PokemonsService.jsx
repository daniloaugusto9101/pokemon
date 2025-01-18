import { api } from "../config/http";

const getPokemons = (limit = 20) => {
  return api.get(`/pokemon`, {
    params: { limit },
  });
};
const searchByPokemonName = (idOrName) => {
  return api.get(`/pokemon/${idOrName}`);
};

const PokemonsService = {
  getPokemons,
  searchByPokemonName,
};

export default PokemonsService;
