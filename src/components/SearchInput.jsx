import React from "react";
import { FaSearch } from "react-icons/fa";
import { GlobalContext } from "../contexts/GlobalContext";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = React.useState(""); // Tipo selecionado pelo usuário
  const { setFilteredPokemons, setError, setLoading, error } = React.useContext(GlobalContext);

  // Função para buscar Pokémons filtrados quando o botão for clicado
  const handleSearch = async () => {
    const search = searchQuery.trim().toLowerCase();

    try {
      setError(null);
      setLoading(true);
      //Proteção para não buscar se não tiver nada digitado
      if (!search) {
        setFilteredPokemons([]);
        return;
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery.trim().toLowerCase()}`);
      const data = await response.json();

      setFilteredPokemons([data]);
    } catch (error) {
      setError("Ocorreu um errro ao buscar os Pokémons => " + error);
    } finally {
      setLoading(false);
    }
  };

  const color1 = error ? "bg-red-300 text-red-500" : "bg-gray-300 text-gray-500";
  const color2 = error ? "border-red-300" : "border-gray-300";

  return (
    <div className=" w-full md:w-[420px]">
      <div className="relative 0">
        <button className={`${color1} absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full cursor-pointer`} type="text" onClick={handleSearch}>
          <FaSearch />
        </button>
        <input type="text" value={searchQuery || ""} placeholder="Pesquise um Pokémon" className={` ${color2} pl-6 pr-12 py-3 border-2 rounded-full focus:outline-none focus:shadow-md w-full`} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      {error && <span className="m-2 text-red-400 text-[10px]">Nenhum item encontrado, tente novamente!</span>}
    </div>
  );
};

export default SearchInput;
