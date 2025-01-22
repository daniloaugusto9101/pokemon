import React from "react";
import { IoFilterSharp } from "react-icons/io5";

const FilterInput = () => {
  const { searchQuery, setSearchQuery, handleSearch } = React.useContext(GlobalContext);
  return (
    <section className="flex items-center space-x-2">
      <IoFilterSharp className="text-gray-500" />
      <p>Filtrar por</p>
      <div>
        <h3>Filtrar por Tipo</h3>
        <select>
          <option value="">Selecione um tipo</option>
          <option value="fire">Fogo</option>
          <option value="water">Água</option>
          <option value="grass">Grama</option>
          <option value="electric">Elétrico</option>
          <option value="rock">Pedra</option>
          <option value="psychic">Psíquico</option>
          <option value="ground">Terra</option>
          <option value="ice">Gelo</option>
          <option value="dragon">Dragão</option>
          <option value="dark">Sombrio</option>
          <option value="fairy">Fada</option>
          <option value="normal">Normal</option>
          <option value="bug">Inseto</option>
          <option value="fighting">Lutador</option>
          <option value="ghost">Fantasma</option>
          <option value="poison">Venenoso</option>
          <option value="steel">Aço</option>
          <option value="flying">Voador</option>
        </select>
        <button>Filtrar</button>
      </div>
    </section>
  );
};

export default FilterInput;
