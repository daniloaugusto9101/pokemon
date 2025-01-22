import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [searchQuery, setSearchQuery] = React.useState(""); // Estado do termo de busca
  const [allPokemons, setAllPokemons] = React.useState([]); // Todos os Pokémons
  const [filteredPokemons, setFilteredPokemons] = React.useState([]); // Pokémons filtrados
  const [loading, setLoading] = React.useState(true); // Status de carregamento
  const [page, setPage] = React.useState(1); // Página atual
  const [total, setTotal] = React.useState(0); // Total de Pokémons encontrados
  const itemsPerPage = 20;

  // Função para carregar os Pokémons com detalhes
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
      } catch (error) {
        console.error("Erro ao buscar os Pokémons:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchPokemons();
  }, [page]);

  // Função para buscar Pokémons filtrados quando o botão for clicado
  const handleSearch = async () => {
    const search = searchQuery.trim().toLowerCase();

    try {
      //Proteção para não buscar se não tiver nada digitado
      if (!search) {
        setFilteredPokemons([]);
        return;
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchQuery.trim().toLowerCase()}`);
      const data = await response.json();

      setFilteredPokemons([data]);
    } catch (error) {
      console.error("Erro ao buscar o Pokémon:", error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value); // Atualiza a página atual
  };

  // Lista ativa para exibição (filtrada ou completa)
  const listPokemons = filteredPokemons.length > 0 ? filteredPokemons : allPokemons;

  return <GlobalContext.Provider value={{ searchQuery, setSearchQuery, listPokemons, loading, total, page, handlePageChange, handleSearch }}>{children}</GlobalContext.Provider>;
};
