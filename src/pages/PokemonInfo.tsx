import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/poke-loading/Loading";
import Pokemon from "../components/pokemon/Pokemon";
import { IPokemon } from "../services/interfaces/IPokemonsResult";
import { pokeServiceInstance } from "../services/PokeServices";

const defaultStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 0",
};
export default function PokemonInfo() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    const loadPokemon = async () => {
      const result = await pokeServiceInstance.pokemonInfo(name as string);
      setPokemon(result);
    };
    loadPokemon();
  }, [name]);

  return (
    <Loading isLoading={pokemon === undefined}>
      <div style={defaultStyles}>
        <Pokemon pokemon={pokemon!} />
      </div>
    </Loading>
  );
}
