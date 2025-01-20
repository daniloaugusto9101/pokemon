import React from "react";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import { IoCloseSharp } from "react-icons/io5";
import useFetch from "../hooks/useFetch";
import { TbPokeball } from "react-icons/tb";

const PokemonDetail = ({ pokemon, handleCardClick }) => {
  const [sepecies, setSpecies] = React.useState(null);

  const { request } = useFetch();
  React.useEffect(() => {
    const fetchPokemons = async () => {
      const resp = await request(pokemon.species.url);
      setSpecies(resp.json);
    };

    fetchPokemons();
  }, [pokemon, request]);

  if (!sepecies) return null;
  if (sepecies) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-2xl shadow-lg relative max-w-xl w-full overflow-auto mx-5">
          {/* Barra de título */}
          <div className="bg-gray-200 rounded-t-2xl p-4 relative">
            <h2 className="text-lg text-gray-800 font-bold text-center">{capitalizeFirstLetter(pokemon?.name)}</h2>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl" onClick={handleCardClick}>
              <IoCloseSharp />
            </button>
          </div>

          {/* Corpo do modal */}
          <div className="rounded-b-2xl flex flex-col items-center space-y-10 p-5 ">
            {/* Imagem */}
            <div className="w-48 h-48 flex items-center justify-center bg-gray-200 rounded-2xl border-4 border-gray-400 ">
              <img src={pokemon?.sprites?.versions["generation-v"]?.["black-white"]?.animated?.front_default} alt="Pokemon GIF" className="w-28" />
            </div>

            {/* Botão abaixo da imagem */}
            <div className="flex gap-5 bg-gre">
              <span className="bg-gray-400 rounded-full text-gray-100 text-[9px] px-2">ability: {pokemon?.abilities[0]?.ability?.name}</span>
              <span className="bg-gray-400 rounded-full text-gray-100 text-[9px] px-2">ability: {pokemon?.abilities[1]?.ability?.name}</span>
            </div>

            {/* Ícones de Informações */}
            <div className="flex justify-center flex-wrap gap-6 ">
              <div className="">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TbPokeball className="text-xl text-gray-500" />
                  <span className="text-gray-800 text-md">Geração</span>
                </div>
                <p className="text-gray-500 text-sm text-center">{sepecies?.generation?.name}</p>
              </div>
              <div className="hidden sm:block sm:border  border-gray-300"></div>
              <div className="">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TbPokeball className="text-xl text-gray-500" />
                  <span className="text-gray-800 text-md">Tx cresc.</span>
                </div>
                <p className="text-gray-500 text-sm text-center">{sepecies?.growth_rate?.name}</p>
              </div>
              <div className="hidden sm:block sm:border border-gray-300"></div>
              <div className="">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TbPokeball className="text-xl text-gray-500" />
                  <span className="text-gray-800 text-md">Habitat</span>
                </div>
                <p className="text-gray-500 text-sm text-center">{sepecies?.habitat?.name}</p>
              </div>
            </div>

            {/* Descrição */}
            <p className="text-gray-600 mb-6 text-[10px] sm:text-sm text-center sm:text-left">{sepecies?.flavor_text_entries[0]?.flavor_text}</p>
            <p className="text-gray-900 mb-6 text-sm font-bold">Forma: {sepecies?.shape.name}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default PokemonDetail;
