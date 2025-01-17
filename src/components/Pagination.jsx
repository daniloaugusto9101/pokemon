import React from "react";

const Pagination = () => {
  return (
    <footer className="my-14 flex justify-center">
      <div className="flex items-center space-x-2 text-gray-600">
        <button className="px-3 py-1 text-sm rounded hover:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed" disabled>
          &larr; Anterior
        </button>

        <button className="px-3 py-1 text-sm rounded hover:bg-gray-200">1</button>
        <button className="px-3 py-1 text-sm font-semibold bg-gray-300 text-gray-900 rounded">2</button>
        <button className="px-3 py-1 text-sm rounded hover:bg-gray-200">3</button>
        <button className="px-3 py-1 text-sm rounded hover:bg-gray-200">4</button>
        <button className="px-3 py-1 text-sm rounded hover:bg-gray-200">5</button>
        <span className="px-2 py-1 text-sm text-gray-400">...</span>
        <button className="px-3 py-1 text-sm rounded hover:bg-gray-200">11</button>

        <button className="px-3 py-1 text-sm rounded hover:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed">Próximo &rarr;</button>
      </div>
    </footer>
  );
};

export default Pagination;
