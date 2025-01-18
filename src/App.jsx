import "./App.css";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import { GlobalStorage } from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <Header />
      <GlobalStorage>
        <Pokemon />
      </GlobalStorage>
    </>
  );
}

export default App;
