import { api } from "../config/http";

const searchByPokemonName = (idOrName) => {
  return api.get(`/pokemon/${idOrName}`);
};

const PokemonsService = {
  searchByPokemonName,
};

export default PokemonsService;
