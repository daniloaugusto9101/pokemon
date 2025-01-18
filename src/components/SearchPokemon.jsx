import React from "react";
// import SearchInput from "./SearchInput";
import FilterInput from "./FilterInput";
import { FaSearch, FaUser } from "react-icons/fa";
import { GlobalContext } from "../contexts/GlobalContext";

const SearchPokemon = () => {
  const [searchQuery, setSearchQuery] = React.useState();

  const { handleOnSearch } = React.useContext(GlobalContext);

  //Busca o pokemon
  function handleOnSubmit(event) {
    event.preventDefault();
    handleOnSearch(searchQuery);
  }

  //Limpa a busca
  // function resetSearch() {
  //   setSearchQuery("");
  //   handleOnSearch("");
  // }
  return (
    <section className="flex justify-center mt-28  ">
      <form onSubmit={handleOnSubmit} className="flex items-center space-x-12 w-[1140px] ">
        <div className="relative">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2  p-2 rounded-full bg-gray-300 text-gray-500">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Pesquise um Pokémon"
            className="pl-6 pr-12 py-3 border-2 border-gray-300 rounded-full min-w-96 focus:outline-none focus:shadow-md"
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
        </div>
        {/* <SearchInput /> */}
        <FilterInput />
      </form>
    </section>
  );
};

export default SearchPokemon;
