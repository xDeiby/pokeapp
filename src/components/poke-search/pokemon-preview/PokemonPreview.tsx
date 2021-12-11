import React, { ReactElement } from "react";
import { IPokemon } from "../../../services/interfaces/IPokemonsResult";
import { PokemonPreviewContainer, PreviewTitle } from "../PokeSearch.style";

interface Props {
  pokemon: IPokemon;
}

export default function PokemonPreview({ pokemon }: Props): ReactElement {
  return (
    <PokemonPreviewContainer to={`pokemon/${pokemon.name}`}>
      <figure style={{ flex: "0 0 50" }}>
        <img src={pokemon.sprites.back_default} width={50} />
      </figure>
      <PreviewTitle>{pokemon.name}</PreviewTitle>
    </PokemonPreviewContainer>
  );
}
