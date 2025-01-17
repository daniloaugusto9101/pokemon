import { FaSearch, FaUser } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="relative">
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2  p-2 rounded-full bg-gray-300 text-gray-500">
        <FaSearch />
      </div>
      <input type="text" placeholder="Pesquise um Pokémon" className="pl-6 pr-12 py-3 border-2 border-gray-300 rounded-full min-w-96 focus:outline-none focus:shadow-md" />
    </div>
  );
};

export default SearchInput;
