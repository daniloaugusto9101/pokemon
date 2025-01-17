import React from "react";
import { IoFilterSharp } from "react-icons/io5";

const FilterInput = () => {
  return (
    <section className="flex items-center space-x-2">
      <IoFilterSharp className="text-gray-500" />
      <p>Filtrar por</p>
    </section>
  );
};

export default FilterInput;
