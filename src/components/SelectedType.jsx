import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const SelectedType = () => {
  const [selectedType, setSelectedType] = React.useState(""); // Tipo selecionado pelo usuário
  const { setFilteredPokemons } = React.useContext(GlobalContext);

  // Função para buscar Pokémons por tipo
  const handleFilterByType = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.pokemon.map(async (pokemon) => {
          const res = await fetch(pokemon.pokemon.url);
          return await res.json();
        })
      );

      setFilteredPokemons(pokemonDetails);
    } catch (error) {
    } finally {
      //   setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div className="flex  items-center gap-4 ">
      <select
        value={selectedType}
        onChange={(e) => {
          setSelectedType(e.target.value);
        }}
        className="w-64 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-700"
      >
        <option value="" disabled>
          Selecione um tipo
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
      <button onClick={handleFilterByType} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
        Filtrar
      </button>
    </div>
  );
};

export default SelectedType;
