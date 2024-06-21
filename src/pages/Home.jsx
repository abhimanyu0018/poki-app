// src/components/PokemonList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokiCard";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        setPokemon(response.data.results);
      } catch (error) {
        console.error("Error fetching the Pokémon:", error);
      }
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="text-center">
      <input
        className="w-4/5 max-w-[400px] border rounded mb-5 p-2.5 border-solid border-[#ccc]"
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap justify-center gap-5">
        {filteredPokemon.map((p) => (
          <PokemonCard key={p.name} name={p.name} url={p.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
