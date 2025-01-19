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
    handleOnSearch(searchQuery.toLocaleLowerCase());
  }

  return (
    <section className="flex  justify-center mt-28 w-full">
      <form onSubmit={handleOnSubmit} className="flex flex-col sm:flex-row items-center  gap-5 w-[1140px] mx-5  ">
        <SearchInput setSearchQuery={setSearchQuery} handleOnSubmit={handleOnSubmit} />
        <FilterInput />
      </form>
    </section>
  );
};

export default SearchPokemon;
