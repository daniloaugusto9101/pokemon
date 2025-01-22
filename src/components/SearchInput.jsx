import React from "react";
import { FaSearch } from "react-icons/fa";
import { GlobalContext } from "../contexts/GlobalContext";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = React.useState(""); // Tipo selecionado pelo usuário
  const { setFilteredPokemons } = React.useContext(GlobalContext);

  // Função para buscar Pokémons filtrados quando o botão for clicado
  const handleSearch = async () => {
    const search = searchQuery.trim().toLowerCase();

    try {
      //Proteção para não buscar se não tiver nada digitado
      if (!search) {
        setFilteredPokemons([]);
        return;
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery.trim().toLowerCase()}`);
      const data = await response.json();

      setFilteredPokemons([data]);
    } catch (error) {
      console.error("Erro ao buscar o Pokémon:", error);
    } finally {
      // setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div className="relative">
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-300 text-gray-500 cursor-pointer" type="text" onClick={handleSearch}>
        <FaSearch />
      </button>
      <input type="text" value={searchQuery || ""} placeholder="Pesquise um Pokémon" className="pl-6 pr-12 py-3 border-2 border-gray-300 rounded-full sm:min-w-96 focus:outline-none focus:shadow-md" onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  );
};

export default SearchInput;
