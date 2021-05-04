import React from "react";
import Pokemon from "../components/Pokemon";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "./../graphql/get-pokemons";

function PokemonContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
    </div>
  );
}

export default PokemonContainer;
