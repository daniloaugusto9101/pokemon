import React from "react";
import SearchInput from "./SearchInput";
import FilterInput from "./FilterInput";
import { GlobalContext } from "../contexts/GlobalContext";

const SearchPokemon = () => {
  const [searchQuery, setSearchQuery] = React.useState();

  const { handleOnSearch } = React.useContext(GlobalContext);

  //Busca o pokemon
  function handleOnSubmit(event) {
    event.preventDefault();
    handleOnSearch(searchQuery);
  }

  return (
    <section className="flex justify-center mt-28  ">
      <form onSubmit={handleOnSubmit} className="flex items-center space-x-12 w-[1140px] ">
        <SearchInput setSearchQuery={setSearchQuery} handleOnSubmit={handleOnSubmit} />
        <FilterInput />
      </form>
    </section>
  );
};

export default SearchPokemon;
