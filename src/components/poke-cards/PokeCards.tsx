import { ReactElement, useEffect, useState } from "react";
import { IPokemonsResult } from "../../services/interfaces/IPokemonsResult";
import { pokeServiceInstance } from "../../services/PokeServices";
import Loading from "../poke-loading/Loading";
import PokePagination from "../poke-pagination/PokePagination";
import { PokeCardContainer, PokemonElement } from "./PoleCards.style";

interface Props {
  numPokemons: number;
}

export default function PokeCards({ numPokemons }: Props): ReactElement {
  const [pokemons, setPokemons] = useState<IPokemonsResult>();
  const [loading, setLoading] = useState<boolean>(false);

  const newPage = async (page: number) => {
    setLoading(true);
    const data = await pokeServiceInstance.getPokemons(
      page * numPokemons,
      numPokemons
    );
    setPokemons(data);
    setLoading(false);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await pokeServiceInstance.getPokemons(0, numPokemons);
      setPokemons(data);
      setLoading(false);
    };
    loadData();
  }, [numPokemons]);

  return (
    <>
      <Loading isLoading={loading}>
        <PokeCardContainer>
          {pokemons?.results.map((poke) => (
            <PokemonElement to={`/pokemon/${poke.name}`} key={poke.name}>
              {poke.name}
            </PokemonElement>
          ))}
        </PokeCardContainer>
      </Loading>
      {pokemons && (
        <PokePagination numPages={20} pokemons={pokemons} newPage={newPage} />
      )}
    </>
  );
}
