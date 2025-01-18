import { api } from "../config/http";

const getPokemons = (limit = 20, offset = 0) => {
  return api.get(`/pokemon`, {
    params: { limit, offset },
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
