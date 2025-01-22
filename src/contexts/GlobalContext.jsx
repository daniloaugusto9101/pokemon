import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [allPokemons, setAllPokemons] = React.useState([]);
  const [filteredPokemons, setFilteredPokemons] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // Indica carregamento inicial
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const itemsPerPage = 20;

  // Fetch inicial para carregar os Pokémons com detalhes
  React.useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const offset = (page - 1) * itemsPerPage;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`);
        const data = await response.json();

        setTotal(data.count);
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setAllPokemons(pokemonDetails.filter(Boolean)); // Salva todos os detalhes
        setFilteredPokemons(pokemonDetails.filter(Boolean)); // Exibe todos inicialmente
      } catch (error) {
        console.error("Erro ao buscar os Pokémons:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchPokemons();
  }, []);

  // Atualiza a lista filtrada sempre que o termo de busca mudar
  React.useEffect(() => {
    if (searchQuery) {
      setFilteredPokemons(allPokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())));
    } else {
      setFilteredPokemons(allPokemons); // Mostra todos os Pokémons
    }
  }, [searchQuery, allPokemons]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return <GlobalContext.Provider value={{ searchQuery, setSearchQuery, filteredPokemons, loading, total, page, handlePageChange }}>{children}</GlobalContext.Provider>;
};
