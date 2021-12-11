import { ReactElement } from "react";
import { IPokemon } from "../../services/interfaces/IPokemonsResult";
import PokeSection from "./poke-section/PokeSection";
import {
  CardContent,
  CardTitle,
  ContainerImage,
  EXP,
  HeaderCard,
  PokemonImage,
  PokemonStyledInfo,
} from "./Pokemon.style";

interface Props {
  pokemon: IPokemon;
}

export default function Pokemon({ pokemon }: Props): ReactElement {
  return (
    <PokemonStyledInfo>
      <HeaderCard>
        <ContainerImage>
          <PokemonImage
            src={pokemon.sprites.other?.["official-artwork"].front_default}
          />
        </ContainerImage>
      </HeaderCard>
      <CardContent>
        <CardTitle>{pokemon.name}</CardTitle>
        <EXP>{pokemon.base_experience} EXP</EXP>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardTitle size={1.8}>{pokemon.weight}</CardTitle>
            <CardTitle size={1}>Wight</CardTitle>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardTitle size={1.8}>{pokemon.height}</CardTitle>
            <CardTitle size={1}>Height</CardTitle>
          </div>
        </div>
        <PokeSection pokemon={pokemon} />
      </CardContent>
    </PokemonStyledInfo>
  );
}
