import { api } from "../config/http";

const getPokemons = (limit = 20) => {
  return api.get(`/pokemon`, {
    params: { limit },
  });
};

const PokemonsService = {
  getPokemons,
};

export default PokemonsService;
