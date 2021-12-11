import React, { ReactElement } from "react";
import { IPokemonsResult } from "../../services/interfaces/IPokemonsResult";
import { usePokePagination } from "./hooks/usePokePagination";
import { ButtonPag, H1, PokePaginationContainer } from "./PokePagination.style";

interface Props {
  newPage: (page: number) => void;
  numPages: number;
  pokemons: IPokemonsResult;
}

export default function PokePagination({
  newPage,
  numPages,
  pokemons,
}: Props): ReactElement {
  const { activePage, next, back, change } = usePokePagination(
    5,
    pokemons.count % numPages
  );

  const onNext = () => {
    activePage.current + 1 <= pokemons.count % numPages &&
      newPage(activePage.current + 1);
    next();
  };

  const onBack = () => {
    activePage.current - 1 >= 1 && newPage(activePage.current - 1);
    back();
  };

  const onChangePage = (page: number) => {
    newPage(page);
    change(page);
  };

  return (
    <PokePaginationContainer>
      <ButtonPag dir="left" onClick={onBack}>
        back
      </ButtonPag>
      {activePage.visibles.map((pag) => (
        <H1
          onClick={() => onChangePage(pag)}
          active={pag === activePage.current}
          key={pag}
        >
          {pag}
        </H1>
      ))}
      <ButtonPag dir="right" onClick={onNext}>
        next
      </ButtonPag>
    </PokePaginationContainer>
  );
}
