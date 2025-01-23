import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <span className="text-white text-lg font-semibold">Carregando...</span>
      </div>
    </div>
  );
};

export default Loading;
