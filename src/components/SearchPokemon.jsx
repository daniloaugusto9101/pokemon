import React from "react";
import SelectedType from "./SelectedType";
import SearchInput from "./SearchInput";

const SearchPokemon = () => {
  return (
    <section className="flex justify-center mt-28 w-full">
      <div className="flex flex-col sm:flex-row items-start gap-5 w-[1140px] mx-5">
        <SearchInput />
        <SelectedType />
      </div>
    </section>
  );
};

export default SearchPokemon;
