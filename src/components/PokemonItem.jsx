import React from "react";
import PokemonDetail from "./PokemonDetail";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const PokemonItem = ({ pokemon }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleCardClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCloseModal = (e) => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-64 h-72 border border-gray-300 rounded-lg shadow-md flex flex-col items-center justify-between " onClick={handleCardClick}>
      {/* Imagem do Pokémon */}
      <div className="w-full h-2/3 flex items-center justify-center bg-gray-200 rounded-t-lg">
        <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt="Pokemon GIF" className="w-20" />
      </div>

      {/* Conteúdo do Card */}
      <div className="w-full flex justify-between space-y-1 p-6">
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-bold text-gray-700">{capitalizeFirstLetter(pokemon.name)}</h2>
          <p className="text-sm text-gray-600">Tipo {pokemon.types[0].type.name}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={pokemon.sprites.versions["generation-i"]["red-blue"].front_default} alt="Pokemon GIF" className="w-8" />
        </div>
      </div>
      {isModalOpen && <PokemonDetail pokemon={pokemon} handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default PokemonItem;
