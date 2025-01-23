import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const SelectedType = () => {
  const [selectedType, setSelectedType] = React.useState(""); // Tipo selecionado pelo usuário
  const { setFilteredPokemons, setError, setLoading } = React.useContext(GlobalContext);

  // Função para buscar Pokémons por tipo
  const handleFilterByType = async (type) => {
    const search = type.trim().toLowerCase();
    try {
      setError(null);
      setLoading(true);

      //Proteção para não buscar se não tiver nada digitado
      if (!search) {
        setFilteredPokemons([]);
        return;
      }

      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.pokemon.map(async (pokemon) => {
          const res = await fetch(pokemon.pokemon.url);
          return await res.json();
        })
      );

      setFilteredPokemons(pokemonDetails);
    } catch (error) {
      setError("Ocorreu um erro no hook useFetch() => " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex  items-center gap-4 ">
      <select
        value={selectedType}
        onChange={async (e) => {
          const newValue = e.target.value;
          setSelectedType(newValue);
          if (newValue) {
            await handleFilterByType(newValue);
          }
        }}
        className="w-64 px-2 py-4 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700"
      >
        <option value="" disabled>
          Filtra por
        </option>
        <option value="fire">🔥 Fogo</option>
        <option value="water">💧 Água</option>
        <option value="grass">🌿 Grama</option>
        <option value="electric">⚡ Elétrico</option>
        <option value="rock">🪨 Pedra</option>
        <option value="psychic">🔮 Psíquico</option>
        <option value="ground">🌍 Terra</option>
        <option value="ice">❄️ Gelo</option>
        <option value="dragon">🐉 Dragão</option>
        <option value="dark">🌑 Sombrio</option>
        <option value="fairy">✨ Fada</option>
        <option value="normal">⬜ Normal</option>
        <option value="bug">🐛 Inseto</option>
        <option value="fighting">🥊 Lutador</option>
        <option value="ghost">👻 Fantasma</option>
        <option value="poison">☠️ Venenoso</option>
        <option value="steel">⚙️ Aço</option>
        <option value="flying">🦅 Voador</option>
      </select>
      <button onClick={(e) => handleFilterByType("")} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
        Resetar
      </button>
    </div>
  );
};

export default SelectedType;
