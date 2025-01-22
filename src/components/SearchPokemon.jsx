import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GlobalContext } from "../contexts/GlobalContext";
import SelectedType from "./SelectedType";

const SearchPokemon = () => {
  const { searchQuery, setSearchQuery, handleSearch } = React.useContext(GlobalContext);

  function submitForm(event) {
    event.preventDefault();
    handleSearch();
  }

  return (
    <section className="flex justify-center mt-28 w-full">
      <form className="flex flex-col sm:flex-row items-center gap-5 w-[1140px] mx-5" onSubmit={submitForm}>
        <div className="relative">
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-300 text-gray-500 cursor-pointer" type="submit">
            <FaSearch />
          </button>
          <input type="text" value={searchQuery || ""} placeholder="Pesquise um Pokémon" className="pl-6 pr-12 py-3 border-2 border-gray-300 rounded-full sm:min-w-96 focus:outline-none focus:shadow-md" onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

        <SelectedType />
      </form>
    </section>
  );
};

export default SearchPokemon;
