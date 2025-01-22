import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GlobalContext } from "../contexts/GlobalContext";

const SearchPokemon = () => {
  const { searchQuery, setSearchQuery, fetchPokemonDetails } = React.useContext(GlobalContext);
  console.log(searchQuery);

  return (
    <section className="flex justify-center mt-28 w-full">
      <div className="flex flex-col sm:flex-row items-center gap-5 w-[1140px] mx-5">
        <div className="relative">
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-300 text-gray-500 cursor-pointer" onClick={fetchPokemonDetails}>
            <FaSearch />
          </button>
          <input type="text" value={searchQuery || ""} placeholder="Pesquise um Pokémon" className="pl-6 pr-12 py-3 border-2 border-gray-300 rounded-full sm:min-w-96 focus:outline-none focus:shadow-md" onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <div className="flex items-center space-x-2">
          <IoFilterSharp className="text-gray-500" />
          <p>Filtrar por</p>
        </div>
      </div>
    </section>
  );
};

export default SearchPokemon;
