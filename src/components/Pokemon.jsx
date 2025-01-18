import React from "react";
import SearchPokemon from "./SearchPokemon";
import PokemonList from "./PokemonList";
import useFetch from "../hooks/useFetch";
import useGetPokemons from "../hooks/useGetPokemons";

const Pokemon = () => {
  const { loading, error, request } = useFetch();
  const [pokemonDetails, setPokemonDetails] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const searchResults = [];
  const pokemons = useGetPokemons();
  console.log("Aqui: ", pokemons);

  //Faz a busca da lista de Pokemon
  React.useEffect(() => {
    const fetchPokemonDetails = async () => {
      const { json } = await request("https://pokeapi.co/api/v2/pokemon?limit=20");

      if (json && json.results) {
        // Realizar as requisições individuais para cada Pokémon
        const pokemonDetails = await Promise.all(
          json.results.map(async (pokemon) => {
            const { json: details } = await request(pokemon.url);
            return details;
          })
        );
        setPokemonDetails(pokemonDetails);
      }
    };

    fetchPokemonDetails();
  }, [request]);

  function handleOnSearch(pokemonName) {
    console.log(pokemonName);
    setSearchQuery(pokemonName);
  }

  return (
    <>
      <SearchPokemon onSearch={handleOnSearch} />
      <PokemonList pokemonDetails={searchResults.length > 0 ? searchResults : pokemonDetails} />
    </>
  );
};

export default Pokemon;
