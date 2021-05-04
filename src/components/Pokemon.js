import React from "react";

function Pokemon({ pokemon, key }) {
  return (
    <div className="pokemon">
      <p>{pokemon.name}</p>
    </div>
  );
}

export default Pokemon;
