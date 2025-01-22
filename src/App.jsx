import "./App.css";
import Header from "./components/Header";
import PokemonContent from "./components/PokemonContent";
import { GlobalStorage } from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <Header />
      <PokemonContent />
    </>
  );
}

export default App;
