import React from "react";
import { FaFrog } from "react-icons/fa";

const PokemonDetail = () => {
  return (
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white w-[500px] rounded-2xl shadow-lg relative">
        {/* Barra de titulo */}
        <div class="bg-gray-200 rounded-t-2xl p-4 relative">
          <h2 class="text-lg text-gray-800 font-bold text-center">Pokemon name</h2>
          <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/*Corpo do modal  */}
        <div class="bg-yellow-300  rounded-b-2xl flex flex-col items-center gap-8 p-8">
          {/* imaggem */}
          <div className="w-56 h-56 flex items-center justify-center bg-gray-200 rounded-t-lg bg-green-300">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="w-24 h-24" />
          </div>

          {/*botão abaixo da imagem  */}
          <div className="flex gap-5">
            <span className="bg-gray-400 px-2 py-1 rounded-full text-gray-100 text-sm">teste1 teste1</span>
            <span className="bg-gray-500 px-2 py-1 rounded-full text-gray-100 text-sm">teste1 teste1</span>
          </div>

          {/* icones de Informações */}
          <div className="flex justify-center gap-5">
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaFrog />
                <span>info</span>
              </div>
              <p>lorem lorem</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaFrog />
                <span>info</span>
              </div>
              <p>lorem lorem</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaFrog />
                <span>info</span>
              </div>
              <p>lorem lorem</p>
            </div>
          </div>

          {/* Descrição */}
          <p class="text-gray-600 mb-6 bg-blue-300">Este é o conteúdo do modal. Você pode adicionar textos, botões ou qualquer outro elemento aqui.</p>
          <p class="text-gray-600 mb-6 bg-blue-300">lorem lorem</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
