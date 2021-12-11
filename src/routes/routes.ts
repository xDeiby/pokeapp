import PokemonInfo from "../pages/PokemonInfo";
import Pokemons from "../pages/Pokemons";
import { IRoute } from "./interfaces/routes.interface";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Pokemones",
    view: Pokemons,
    to: "/",
    default: true,
  },
  {
    path: "pokemon/:name",
    name: "Pokemon",
    to: "/pokemon/",
    view: PokemonInfo,
  },
];

export default routes;
