// src/components/PokemonCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonCard = ({ name, url }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(url);
        setImage(response.data.sprites.front_default);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, [url]);

  return (
    <div className="border w-[150px] text-center shadow-[0_0_10px_rgba(0,0,0,0.1)] p-5 rounded-lg border-solid border-[#ddd]">
      <img className="w-[100px] h-[100px]" src={image} alt={name} />
      <h3 className="text-base capitalize mt-2.5 mb-0 mx-0">{name}</h3>
    </div>
  );
};

export default PokemonCard;
