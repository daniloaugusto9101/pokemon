import React from "react";
import { FaFrog } from "react-icons/fa";

const PokemonItem = ({ pokemon }) => {
  return (
    <div className="w-64 h-72 border border-gray-300 rounded-lg shadow-md flex flex-col items-center justify-between ">
      {/* Imagem do Pokémon */}
      <div className="w-full h-2/3 flex items-center justify-center bg-gray-200 rounded-t-lg">
        <img src={pokemon.sprites.front_default} alt="Bulbasaur" className="w-24 h-24" />
      </div>

      {/* Conteúdo do Card */}
      <div className="w-full flex justify-between space-y-1 p-6">
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-bold text-gray-700">{pokemon.name}</h2>
          <p className="text-sm text-gray-600">Tipo {pokemon.types[0].type.name}</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <FaFrog className="text-gray-500" />
          <p className="text-sm font-medium text-gray-500">{pokemon.species.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
