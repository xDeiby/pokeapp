import poke_api from "./api.conf";
import { IPokemonsResult, IPokemon } from "./interfaces/IPokemonsResult";

export default class PokeService {
  // La original no contiene las  imagenes
  private _imagesApi =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  //   All Pokemons
  public async getPokemons(
    offset: number = 0,
    limit: number = 10
  ): Promise<IPokemonsResult> {
    const params = {
      limit,
      offset,
    };

    try {
      const response = await poke_api.get<IPokemonsResult>("pokemon", {
        params,
      });

      return response.data;
    } catch (error) {
      return {} as IPokemonsResult;
    }
  }

  public pokeImage(id: number): string {
    return this._imagesApi + id.toString() + ".png";
  }

  public async pokemonInfo(name: string): Promise<IPokemon> {
    try {
      const response = await poke_api.get<IPokemon>(`pokemon/${name}`);

      return response.data;
    } catch (error) {
      return {} as IPokemon;
    }
  }
}

export const pokeServiceInstance = new PokeService();
