/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { IPokemon } from "../../services/interfaces/IPokemonsResult";
import { pokeServiceInstance } from "../../services/PokeServices";
import PokemonPreview from "./pokemon-preview/PokemonPreview";
import { PokeInput, PokeSearchContainer, Suggest } from "./PokeSearch.style";

export default function PokeSearch(): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<IPokemon>();

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        if (inputRef.current && inputRef.current.value)
          searchPokemon(
            inputRef.current.value.toLocaleLowerCase().trim().replace(/\s/g, "")
          );
      }
    };
    inputRef.current && inputRef.current.addEventListener("keydown", listener);
    return () => {
      inputRef.current!.removeEventListener("keydown", listener);
    };
  }, [inputRef.current]);

  const searchPokemon = async (name: string) => {
    const pokemon = await pokeServiceInstance.pokemonInfo(name);
    pokemon && setResult(pokemon);
  };

  return (
    <PokeSearchContainer>
      <PokeInput ref={inputRef} placeholder="¿Qué pokemon buscas?"></PokeInput>
      <Suggest>
        {result?.name ? (
          <PokemonPreview pokemon={result} />
        ) : result ? (
          "No hay coincidencias"
        ) : (
          "No hay pokemones"
        )}
      </Suggest>
    </PokeSearchContainer>
  );
}
