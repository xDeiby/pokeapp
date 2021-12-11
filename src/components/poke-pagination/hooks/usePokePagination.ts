import { useEffect, useReducer, useState } from "react";
import { IPokemonsResult } from "../../../services/interfaces/IPokemonsResult";
import { pokeServiceInstance } from "../../../services/PokeServices";
import { genRange } from "../../../utils/genRange";

interface IPaginationAction {
  type: "NEXT" | "BACK" | "CHANGE";
  payload?: number;
}

interface IPaginationState {
  // next: number;
  // previous: number;
  current: number;
  visibles: number[];
}

export function usePokePagination(visibles = 8, total: number) {
  //   const [loading, setLoading] = useState<boolean>(false);
  //   const [pokemons, setPokemons] = useState<IPokemonsResult>();

  const INITIAL_STATE: IPaginationState = {
    current: 1,
    visibles: genRange(1, total > visibles ? visibles : total),
  };

  const paginationReducer = (
    state: IPaginationState,
    action: IPaginationAction
  ): IPaginationState => {
    let visiblePages;
    switch (action.type) {
      case "NEXT":
        if (
          state.current + 1 >= [...state.visibles].pop()! &&
          state.current + 1 < total
        ) {
          visiblePages = genRange(
            state.current + 1,
            total > visibles + state.current ? visibles + state.current : total
          );
        }

        return {
          current: state.current === total ? state.current : state.current + 1,
          visibles: visiblePages || state.visibles,
        };

      case "BACK":
        if (
          state.current <= [...state.visibles].shift()! &&
          state.current - 1 > 1
        ) {
          visiblePages = genRange(
            state.current - visibles < 1 ? 1 : state.current - visibles,
            state.current
          );
        }

        return {
          current: state.current === 1 ? state.current : state.current - 1,
          visibles: visiblePages || state.visibles,
        };
      case "CHANGE":
        const newPage = action.payload as number;

        return {
          current: newPage,
          visibles: state.visibles,
        };

      default:
        return state;
    }
  };

  const [activePage, dispatchPage] = useReducer(
    paginationReducer,
    INITIAL_STATE
  );

  return {
    activePage,
    next: () => dispatchPage({ type: "NEXT" }),
    back: () => dispatchPage({ type: "BACK" }),
    change: (page: number) => dispatchPage({ type: "CHANGE", payload: page }),
  };
}
