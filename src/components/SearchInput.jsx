import { FaSearch } from "react-icons/fa";

const SearchInput = ({ setSearchQuery, handleOnSubmit }) => {
  return (
    <div className="relative">
      <button
        className="absolute right-3 top-1/2 transform -translate-y-1/2  p-2 rounded-full bg-gray-300 text-gray-500 cursor-pointer"
        onClick={(event) => {
          handleOnSubmit(event);
        }}
      >
        <FaSearch />
      </button>
      <input
        type="text"
        placeholder="Pesquise um Pokémon"
        className="pl-6 pr-12 py-3 border-2 border-gray-300 rounded-full min-w-96 focus:outline-none focus:shadow-md"
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
