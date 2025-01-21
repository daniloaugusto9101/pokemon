import React, { useState } from "react";

const ErrorMessage = ({ title = "Erro", message = "Algo deu errado. Por favor, tente novamente mais tarde." }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setIsVisible(false)}>
      <div className="relative p-4 bg-red-100 border border-red-400 rounded-lg shadow-lg">
        <h1 className="text-lg font-semibold text-red-600">{title}</h1>
        <p className="text-sm text-red-700 mt-2">{message}</p>
        <button onClick={() => setIsVisible(false)} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
