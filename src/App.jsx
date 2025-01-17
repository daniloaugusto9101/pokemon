import "./App.css";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import SearchPokemon from "./components/SearchPokemon";

function App() {
  return (
    <>
      <Header />
      <SearchPokemon />
      <PokemonList />
    </>
  );
}

export default App;
