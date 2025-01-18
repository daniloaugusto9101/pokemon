import React from "react";
import PokemonItem from "./PokemonItem";
import Pagination from "./Pagination";
import PokemonDetail from "./PokemonDetail";
import useFetch from "../hooks/useFetch";

const PokemonList = () => {
  const { data, loading, error, request } = useFetch();
  const [pokemonDetails, setPokemonDetails] = React.useState([]);

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

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (pokemonDetails) {
    return (
      <main className="flex justify-center mt-28 ">
        <section className="w-[1140px]">
          <header>
            <p>Total: 150 Pokémons</p>
          </header>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {pokemonDetails.map((pokemon) => {
              return <PokemonItem key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
          <Pagination />
        </section>
        <PokemonDetail />
      </main>
    );
  } else {
    return null;
  }
};

export default PokemonList;
