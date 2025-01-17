import React from "react";
import SearchInput from "./SearchInput";
import FilterInput from "./FilterInput";

const SectionSearchBar = () => {
  return (
    <section className="flex justify-center mt-28  ">
      <div className="flex items-center space-x-12 w-[1140px] ">
        <SearchInput />
        <FilterInput />
      </div>
    </section>
  );
};

export default SectionSearchBar;
